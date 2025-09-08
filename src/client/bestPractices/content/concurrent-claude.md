## 多 Claude 并发干活 - 构建高效的 AI 协作开发团队

### 代码审查模式

**双 Claude 协作**：

```bash
# 终端 1：代码编写
claude "实现新的用户注册功能"

# 终端 2：代码审查（新终端）
cd same/project && claude
# 然后询问："请审查刚才实现的注册功能代码"
```

### 并行开发策略

并行开发的核心是要给 Claude 创建相互独立的环境，简单来说就是对同一份代码仓库复制出多个相互隔离的仓库。那我们就可以使用**Git Worktrees 方法**：

```bash
# 创建新的工作区 project-auth 并关联上 feature/auth 分支，如果这个分支不存在，会自动创建
git worktree add -b  feature/auth ../project-auth feature/current_branch
git worktree add -b feature/ui-redesign  ../project-ui feature/current_branch
```

这样就会在当前项目目录的上级目录基于`feature/current_branch` 分支拷贝一份当前项目作为工作区。注意依赖并不会拷贝过去，有需要的话要先`npm install` 之类先装好依赖环境。

继而可以在在不同工作区启动 Claude：

```
cd ../project-auth && claude
cd ../project-ui && claude
```

当子工作区任务完成的时候记得使用 `git worktree remove ../project-auth` 删除子工作区

不过这样做其实环境还不够隔离，比如 `数据库`， `redis` 以及全局生效的配置文件、环境变量还是没有隔离，可能会使用相同的资源，想要做到真正的隔离得给每个 CC 分配一个 Docker 。不过先给 CC 分配一个小隔间基本就可以满足诉求了。

### 子智能体团队
Claude Code 支持创建 subAgent， subAgent 的好处是上下文会与Claude Code 当前回答里的hostAgent 上下文隔离，从而解决上下文爆炸、上下文腐烂等问题，当然这个也会有缺点--因为上下文是隔离的，所以 subAgent 只能凭借 hostAgent 交由过来的任务描述了解背景，如果需要更多的信息 subAgent 需要自己重新收集。
所以我们使用 subAgent的时候应该注意它的任务应该是模块边界清晰的任务。通过`/agents` 命令即可进入创建 subAgent 页面。
如下是我创建的专门用于生成微信封面的 agent -- wechat-cover-layout-designer  :

```
Description (tells Claude when to use this agent):                              
Use this agent when you need to create a WeChat official account cover image layout with specific proportional requirements. This agent should be used when the user requests a dual-cover design (main cover +朋友圈分享 cover) with modern visual impact, responsive layout, and download functionality. Example: When a user asks for a WeChat cover design with exact 3.35:1 overall ratio, 2.35:1 main cover, and 1:1 share cover with specific text layout requirements.

System prompt:
...              
```

写完之后让CC 生成封面图，它就会handoff 给wechat-cover-layout-designer 

![](https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/202508302115952.png)

最后生成的微信公众号封面示例：

![](https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/202508302152085.png)