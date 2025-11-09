export const baseStyles = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 全局触摸优化 */
* {
    -webkit-tap-highlight-color: rgba(37, 99, 235, 0.1);
    -webkit-touch-callout: none;
}

/* 可交互元素启用触摸操作 */
button,
a,
.clickable,
.nav-tab,
.card,
.practice-card {
    touch-action: manipulation; /* 禁用双击缩放，保留滑动 */
    -webkit-user-select: none;
    user-select: none;
}

/* 允许文本选择的元素 */
p,
li,
span,
.text-content {
    -webkit-user-select: text;
    user-select: text;
}

body {
    font-family: var(--font-family-primary);
    line-height: var(--line-height-normal);
    color: var(--color-text-primary);
    background: var(--color-bg-primary);
    min-height: 100vh;
    padding: 0;
    overflow-x: hidden;
}

.container {
    max-width: 100%;
    width: 100%;
    margin: 0;
    background: var(--color-bg-primary);
    border-radius: 0;
    box-shadow: none;
    overflow: hidden;
    position: relative;
    padding-bottom: var(--space-8);
    display: flex;
    min-height: 100vh;
}

@media (max-width: 768px) {
    body {
        font-size: 16px; /* 防止 iOS 自动缩放 */
        line-height: var(--line-height-relaxed);
        -webkit-text-size-adjust: 100%;
        padding: 0;
    }

    .container {
        flex-direction: column;
    }

    /* 移动端文本优化 */
    p, li {
        line-height: var(--line-height-relaxed);
        margin-bottom: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: var(--line-height-tight);
        margin-bottom: 0.75rem;
    }
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-normal);
}

.overlay.active {
    opacity: 1;
    visibility: visible;
}

/* 触摸反馈效果 */
button:active,
.nav-tab:active,
.card:active,
.practice-card:active,
a:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
}

/* 桌面端保留 hover 效果 */
@media (hover: hover) {
    button:hover,
    .nav-tab:hover,
    .card:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease;
    }
}

/* 移动端禁用 hover 效果 */
@media (hover: none) {
    button:hover,
    .nav-tab:hover,
    .card:hover {
        transform: none;
    }
}

/* 尊重用户的动画偏好 */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/* GPU 加速优化 */
.card,
.practice-card,
.nav-tab {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
}
`;
