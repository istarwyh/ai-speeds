# 多仓库联动发布流水线最佳实践

## 场景

上游 npm 包（`@cc4pm/homepage`）更新时，下游应用（`ai-speeds`）自动升级依赖并触发部署，无需人工干预。

## 架构

```
cc4pm/main push
  └─► publish-homepage.yml
        ├─► npm publish @cc4pm/homepage@x.y.z
        └─► repository_dispatch → istarwyh/ai-speeds
                                        └─► sync-cc4pm.yml
                                              ├─► pnpm add @cc4pm/homepage@x.y.z
                                              ├─► git commit & push
                                              └─► Netlify 自动部署触发
```

## 两个核心 Workflow

### 上游：`publish-homepage.yml`（cc4pm 仓库）

触发条件：`packages/homepage/**` 或 `docs/index.html` 有变更时 push main。

关键设计：

- **幂等检查**：先
  `npm view @cc4pm/homepage@$VERSION`，已发布则跳过，避免重复 publish 报错
- **条件 dispatch**：只有真正发包（或
  `force_notify=true`）才触发下游，避免无效噪音
- **payload 携带版本号**：`client-payload.version`
  传递精确版本，下游不需要自行查 latest

```yaml
- name: Check if version already published
  id: check
  working-directory: packages/homepage
  run: |
    PKG_VERSION=$(node -p "require('./package.json').version")
    echo "version=$PKG_VERSION" >> "$GITHUB_OUTPUT"
    if npm view "@cc4pm/homepage@$PKG_VERSION" version 2>/dev/null; then
      echo "already_published=true" >> "$GITHUB_OUTPUT"
    else
      echo "already_published=false" >> "$GITHUB_OUTPUT"
    fi
```

### 下游：`sync-cc4pm.yml`（ai-speeds 仓库）

触发条件：`repository_dispatch` 事件类型 `cc4pm-homepage-released`。

关键设计：

- **三级版本回退**：dispatch payload → 手动 input → npm
  latest，保证任何触发方式都能工作
- **当前版本检查**：版本相同则跳过 upgrade + commit，避免空提交
- **不用 cache**：pnpm store 首次不存在时 `actions/setup-node`
  的 cache 会报错，直接去掉

```yaml
- name: Resolve target version
  id: resolve
  run: |
    VERSION="${{ github.event.client_payload.version }}"
    if [ -z "$VERSION" ]; then VERSION="${{ inputs.version }}"; fi
    if [ -z "$VERSION" ]; then VERSION=$(npm view @cc4pm/homepage version); fi
    echo "version=$VERSION" >> "$GITHUB_OUTPUT"
```

## 所需 Secrets

| Secret             | 配置在仓库       | 说明                                               |
| ------------------ | ---------------- | -------------------------------------------------- |
| `NPM_TOKEN`        | `istarwyh/cc4pm` | npm Automation token，用于 CI 发包                 |
| `CROSS_REPO_TOKEN` | `istarwyh/cc4pm` | GitHub PAT，需要 `repo` scope，用于跨仓库 dispatch |

### 配置命令

```bash
# 重新登录 npm 获取新 token（token 会写入 ~/.npmrc）
npm login --registry https://registry.npmjs.org

# 将 ~/.npmrc 里的 token 直接写入 GitHub Secret（避免终端交互粘贴问题）
grep '_authToken' ~/.npmrc | cut -d= -f2 | gh secret set NPM_TOKEN --repo istarwyh/cc4pm

# 设置 CROSS_REPO_TOKEN（从 https://github.com/settings/tokens 生成后用 -b 传入）
gh secret set CROSS_REPO_TOKEN -b "ghp_xxxx" --repo istarwyh/cc4pm
```

> **注意**：npm token 有效期到期后需重新 `npm login` 并更新 GitHub
> Secret，否则 CI 发包会报 `404 Not found`（与包不存在的 404 相同，容易混淆）。

## 手动触发调试

```bash
# 跳过版本检查，强制触发全链路（含 dispatch）
gh workflow run publish-homepage.yml \
  --repo istarwyh/cc4pm \
  --ref main \
  --field force_notify=true

# 观察上游运行
gh run watch --repo istarwyh/cc4pm

# 观察下游（dispatch 到达后约 5s 启动）
gh run list --repo istarwyh/ai-speeds --workflow=sync-cc4pm.yml --limit 3
gh run watch <run-id> --repo istarwyh/ai-speeds
```

## 完整触发流程（正常发布路径）

```bash
# 1. 升级上游包版本号
# 编辑 cc4pm/packages/homepage/package.json version 字段

# 2. 推送到 main（自动触发 workflow）
git add packages/homepage/package.json
git commit -m "chore(homepage): bump version to x.y.z"
git push origin main

# 3. GitHub Actions 自动完成后续所有步骤：
#    ✓ 发包到 npm
#    ✓ dispatch 到 ai-speeds
#    ✓ pnpm upgrade + commit + push
#    ✓ Netlify 触发重新部署
```

## 已知坑

| 问题                                                | 原因                                          | 解决                                              |
| --------------------------------------------------- | --------------------------------------------- | ------------------------------------------------- |
| CI publish 报 `404 Not found`                       | npm token 过期，非包不存在                    | 重新 `npm login` 更新 Secret                      |
| `gh secret set` 交互 prompt 报 escape sequence 错误 | 终端 escape 干扰                              | 改用 `echo "token" \| gh secret set` 或 `-b` 参数 |
| `Post Setup Node.js` 步骤报 cache 路径不存在        | pnpm store 首次为空，`cache: pnpm` 找不到路径 | 移除 `setup-node` 的 `cache: pnpm` 配置           |
| bot push 被远端拒绝（non-fast-forward）             | workflow 并发写同一分支                       | 本地 `git pull --rebase` 再 push                  |
