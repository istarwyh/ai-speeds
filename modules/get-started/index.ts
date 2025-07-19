import { providersComponent } from './components/providers';
import { setupComponent } from './components/setup';
import { deploymentComponent } from './components/deployment';

export const getStartedModule = `
<section class="content-section" id="get-started">
    <!-- Hero Section -->
    <div class="hero">
        <div class="hero-content">
            <h1>Claude-Code-Router</h1>
            <p class="subtitle">Universal Claude API Proxy for Multiple Providers</p>
            <div class="badges">
                <a href="#deepseek" class="badge" data-provider="deepseek">DeepSeek</a>
                <a href="#openai" class="badge" data-provider="openai">OpenAI</a>
                <a href="#kimi" class="badge" data-provider="kimi">Kimi</a>
                <a href="#openrouter" class="badge" data-provider="openrouter">OpenRouter</a>
                <a href="#anyrouter" class="badge" data-provider="anyrouter">AnyRouter</a>
                <a href="#siliconflow" class="badge" data-provider="siliconflow">SiliconFlow</a>
            </div>
        </div>
    </div>

    <div class="section-header">
        <h2>🚀 如何用上 CC</h2>
        <p class="section-subtitle">快速开始使用 Claude Code Router，连接你喜欢的 AI 模型</p>
    </div>

    ${providersComponent}
    ${setupComponent}
    ${deploymentComponent}
</section>`;

export * from './components/providers';
export * from './components/setup';
export * from './components/deployment';
