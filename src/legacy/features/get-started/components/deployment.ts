export const deploymentComponent = `
<!-- Self-Deployment -->
<div class="deployment">
    <div class="deployment-header">
        <h2>🚀 Deploy Your Own</h2>
        <div class="deployment-benefits">
            <span class="benefit-tag">🔐 Private</span>
            <span class="benefit-tag">⚡ Secure </span>
            <span class="benefit-tag">🌐 Full Control</span>
            <span class="benefit-tag">📊 Zero Logs</span>
        </div>
    </div>
    
    <div class="deployment-grid">
        <!-- Quick Deploy Card -->
        <div class="deploy-card primary">
            <div class="card-header">
                <span class="card-icon">⚡</span>
                <h3>Quick Deploy</h3>
                <span class="time-badge">~3 min</span>
            </div>
            <div class="deploy-steps">
                <div class="step-item">
                    <span class="step-icon">📥</span>
                    <div class="step-content">
                        <div class="step-title">Clone & Setup</div>
                        <div class="code-snippet">
                            <code>git clone https://github.com/istarwyh/ai-speeds && cd ai-speeds && pnpm install</code>
                            <button class="copy-btn" onclick="copyToClipboard('git clone https://github.com/istarwyh/ai-speeds && cd ai-speeds && pnpm install')">📋</button>
                        </div>
                    </div>
                </div>
                <div class="step-item">
                    <span class="step-icon">🔑</span>
                    <div class="step-content">
                        <div class="step-title">Configure Secrets</div>
                        <div class="provider-configs">
        

                            <div class="config-option" onclick="toggleConfigDetails('openai')">
                                <span class="provider-icon openai">AI</span>
                                <span>OpenAI</span>
                                <span class="expand-icon">▶</span>
                            </div>
                            <div class="config-details" id="openai-config">
                                <div class="code-snippet">
                                    <code>wrangler secret put OPENAI_COMPATIBLE_BASE_URL</code>
                                    <button class="copy-btn" onclick="copyToClipboard('wrangler secret put OPENAI_COMPATIBLE_BASE_URL')">📋</button>
                                </div>
                                <div class="config-note">Enter: https://api.openai.com/v1</div>
                            </div>

                            <div class="config-option" onclick="toggleConfigDetails('openrouter')">
                                <span class="provider-icon openrouter">OR</span>
                                <span>OpenRouter</span>
                                <span class="expand-icon">▶</span>
                            </div>
                            <div class="config-details" id="openrouter-config">
                                <div class="code-snippet">
                                    <code>wrangler secret put OPENROUTER_BASE_URL</code>
                                    <button class="copy-btn" onclick="copyToClipboard('wrangler secret put OPENROUTER_BASE_URL')">📋</button>
                                </div>
                                <div class="config-note">Enter: https://openrouter.ai/api/v1</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="step-item">
                    <span class="step-icon">🚀</span>
                    <div class="step-content">
                        <div class="step-title">Deploy</div>
                        <div class="code-snippet">
                            <code>npm run deploy</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Why Deploy Card -->
        <div class="deploy-card secondary">
            <div class="card-header">
                <span class="card-icon">🛡️</span>
                <h3>Why Deploy?</h3>
            </div>
            <div class="benefits-list">
                <div class="benefit-item">
                    <span class="benefit-icon">🌐</span>
                    <div>
                        <div class="benefit-title">All Providers</div>
                        <div class="benefit-desc">Access OpenAI, DeepSeek, Kimi, and more</div>
                    </div>
                </div>
                <div class="benefit-item">
                    <span class="benefit-icon">🔐</span>
                    <div>
                        <div class="benefit-title">Private & Secure</div>
                        <div class="benefit-desc">Your keys never touch third-party servers</div>
                    </div>
                </div>
                <div class="benefit-item">
                    <span class="benefit-icon">⚙️</span>
                    <div>
                        <div class="benefit-title">Full Control</div>
                        <div class="benefit-desc">Custom configs, model mappings</div>
                    </div>
                </div>
                <div class="benefit-item">
                    <span class="benefit-icon">📊</span>
                    <div>
                        <div class="benefit-title">Zero Logs</div>
                        <div class="benefit-desc">No data retention or tracking</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
// 切换配置详情显示
function toggleConfigDetails(providerId) {
    const details = document.getElementById(providerId + '-config');
    const expandIcon = event.currentTarget.querySelector('.expand-icon');
    
    if (details.style.display === 'none' || !details.style.display) {
        details.style.display = 'block';
        expandIcon.textContent = '▼';
        expandIcon.style.transform = 'rotate(90deg)';
    } else {
        details.style.display = 'none';
        expandIcon.textContent = '▶';
        expandIcon.style.transform = 'rotate(0deg)';
    }
}
</script>

<!-- Contact Section -->
<div class="contact-section">
    <div class="contact-header">
        <h3>💬 Need Help?</h3>
        <p>Get in touch if you have any questions or issues</p>
    </div>
    <div class="contact-methods">
        <div class="contact-item">
            <span class="contact-icon">📧</span>
            <div class="contact-info">
                <div class="contact-label">Email</div>
                <a href="mailto:talk@xiaohui.cool" class="contact-link">talk@xiaohui.cool</a>
            </div>
        </div>
        <div class="contact-item">
            <span class="contact-icon">💬</span>
            <div class="contact-info">
                <div class="contact-label">WeChat</div>
                <span class="contact-value">istarwyh</span>
            </div>
        </div>
    </div>
</div>

<!-- Footer -->
<div class="footer">
    <div class="footer-links">
        <a href="https://github.com/istarwyh/ai-speeds" target="_blank">GitHub</a>
        <a href="https://claude.ai/code" target="_blank">Claude Code</a>
        <a href="https://developers.cloudflare.com/workers/" target="_blank">Cloudflare Workers</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
    </div>

</div>
`;
