import { BrandIcon, BrandIconSimple, BrandWordmark } from '@/components-next/BrandIcon';

export default function BrandIconTestPage() {
  return (
    <div className='min-h-screen bg-bg-secondary p-8'>
      <div className='max-w-6xl mx-auto space-y-12'>
        <header className='text-center space-y-2'>
          <h1 className='text-4xl font-bold text-text-primary'>Brand Icon 优化测试</h1>
          <p className='text-text-secondary'>测试不同尺寸和变体下的显示效果</p>
        </header>

        {/* Size Testing */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-text-primary border-b border-border-light pb-2'>
            尺寸测试 - Spiral 设计
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={16} design='spiral' />
              <span className='text-sm text-text-secondary'>16px (微小)</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={24} design='spiral' />
              <span className='text-sm text-text-secondary'>24px (小)</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={32} design='spiral' />
              <span className='text-sm text-text-secondary'>32px (默认)</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={48} design='spiral' />
              <span className='text-sm text-text-secondary'>48px (中等)</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={64} design='spiral' />
              <span className='text-sm text-text-secondary'>64px (大)</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={96} design='spiral' />
              <span className='text-sm text-text-secondary'>96px (超大)</span>
            </div>
          </div>
        </section>

        {/* Variant Testing */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-text-primary border-b border-border-light pb-2'>
            变体测试 - 64px
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={64} design='spiral' variant='default' />
              <span className='text-sm text-text-secondary'>Default</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={64} design='spiral' variant='gradient' />
              <span className='text-sm text-text-secondary'>Gradient</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-gray-900 rounded-lg border border-gray-700'>
              <BrandIcon size={64} design='spiral' variant='monochrome' className='text-white' />
              <span className='text-sm text-gray-300'>Monochrome</span>
            </div>
          </div>
        </section>

        {/* Favicon Testing */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-text-primary border-b border-border-light pb-2'>
            Favicon 专用简化版本
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIconSimple size={16} />
              <span className='text-sm text-text-secondary'>16px (实际大小)</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIconSimple size={32} />
              <span className='text-sm text-text-secondary'>32px (预览)</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIconSimple size={48} />
              <span className='text-sm text-text-secondary'>48px (预览)</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIconSimple size={64} />
              <span className='text-sm text-text-secondary'>64px (预览)</span>
            </div>
          </div>
        </section>

        {/* Wordmark Testing */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-text-primary border-b border-border-light pb-2'>Wordmark 测试</h2>
          <div className='space-y-8'>
            <div className='flex items-center justify-center p-8 bg-white rounded-lg border border-border-light'>
              <BrandWordmark size={120} />
            </div>
            <div className='flex items-center justify-center p-8 bg-white rounded-lg border border-border-light'>
              <BrandWordmark size={180} />
            </div>
          </div>
        </section>

        {/* Design Comparison */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-text-primary border-b border-border-light pb-2'>
            设计对比 - 64px
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={64} design='spiral' />
              <span className='text-sm font-medium text-text-primary'>Spiral (推荐)</span>
              <span className='text-xs text-text-secondary text-center'>螺旋上升，代表AI加速成长</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={64} design='letterform' />
              <span className='text-sm font-medium text-text-primary'>Letterform</span>
              <span className='text-xs text-text-secondary text-center'>A+S字母组合</span>
            </div>
            <div className='flex flex-col items-center space-y-3 p-6 bg-white rounded-lg border border-border-light'>
              <BrandIcon size={64} design='lightning' />
              <span className='text-sm font-medium text-text-primary'>Lightning</span>
              <span className='text-xs text-text-secondary text-center'>闪电符号，代表速度</span>
            </div>
          </div>
        </section>

        {/* Optimization Summary */}
        <section className='space-y-4 bg-teal-50 border border-teal-200 rounded-lg p-6'>
          <h2 className='text-xl font-semibold text-teal-900'>✨ 优化总结</h2>
          <ul className='space-y-2 text-sm text-teal-800'>
            <li className='flex items-start gap-2'>
              <span className='text-teal-500 mt-0.5'>✓</span>
              <span>
                <strong>箭头对称性修正：</strong>左翼 (18→21) 和右翼 (26→23) 现在完美对称，中心点在 x=22
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-teal-500 mt-0.5'>✓</span>
              <span>
                <strong>节点渐进式设计：</strong>从底部 1.8 → 中部 1.4 → 顶部 1.1，增强上升动势
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-teal-500 mt-0.5'>✓</span>
              <span>
                <strong>箭头视觉增强：</strong>strokeWidth 从 2.5 增加到 2.8，更醒目有力
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-teal-500 mt-0.5'>✓</span>
              <span>
                <strong>峰点更突出：</strong>半径从 1.8 增加到 2，视觉冲击力更强
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-teal-500 mt-0.5'>✓</span>
              <span>
                <strong>Favicon优化：</strong>简化版使用更粗的线条 (strokeWidth=3) 和更大的峰点
                (r=2.2)，在小尺寸下更清晰
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
