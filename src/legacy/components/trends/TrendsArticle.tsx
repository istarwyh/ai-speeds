'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

const imageUrls = {
  heroImage: `/api/img-proxy?src=${encodeURIComponent('https://lf-code-agent.coze.cn/obj/x-ai-cn/286927358722/attachment/image_20251007103810.png')}`,
  userGrowth:
    `/api/img-proxy?src=${encodeURIComponent('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Data%20visualization%20of%20AI%20user%20growth%20trend&sign=6eb5ee831767c682c21278f7da78317f')}`,
  valuation: `/api/img-proxy?src=${encodeURIComponent('https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/202510071209392.png')}`,
  chatgptOS: `/api/img-proxy?src=${encodeURIComponent('https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/202510071210260.png')}`,
  agentKit: `/api/img-proxy?src=${encodeURIComponent('https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/202510071212193.png')}`,
  codex: `/api/img-proxy?src=${encodeURIComponent('https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/202510071213436.png')}`,
  gpt5: `/api/img-proxy?src=${encodeURIComponent('https://xiaohui-zhangjiakou.oss-cn-zhangjiakou.aliyuncs.com/image/202510071214348.png')}`,
  features: `/api/img-proxy?src=${encodeURIComponent('https://lf-code-agent.coze.cn/obj/x-ai-cn/286927358722/attachment/image_20251007104017.png')}`,
};

const growthData = [
  {
    name: '2023',
    users: 100,
    developers: 2,
  },
  {
    name: '2024',
    users: 400,
    developers: 250,
  },
  {
    name: '2025',
    users: 800,
    developers: 400,
  },
];

const features = [
  {
    title: 'ChatGPT 变超级 App',
    description: '对话中直接调用第三方应用，AI 主动推荐工具，支持应用内交易变现。',
    icon: 'fa-brands fa-openid',
    image: imageUrls.chatgptOS,
  },
  {
    title: 'AgentKit 工具包上线',
    description: '可视化拖拽搭建多 Agent 工作流，几分钟完成从开发到部署的全流程。',
    icon: 'fa-cubes',
    image: imageUrls.agentKit,
  },
  {
    title: 'Codex 全面开放',
    description: '自然语言实时写代码，支持语音控制和 Slack 集成，自动审核 PR 提升团队效率 70%。',
    icon: 'fa-code',
    image: imageUrls.codex,
  },
  {
    title: '模型 API 大升级',
    description: '最强 GPT-5 Pro 开放 API、语音成本降 70%、Sora 2 支持产品内视频生成和精细控制。',
    icon: 'fa-rocket',
    image: imageUrls.gpt5,
  },
];

const stats = [
  {
    value: '8亿+',
    label: '每周活跃用户',
  },
  {
    value: '400万+',
    label: '开发者数量',
  },
  {
    value: '60亿',
    label: '每分钟处理tokens',
  },
  {
    value: '5000亿',
    label: '公司估值(美元)',
  },
];

export function TrendsArticle() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100'>
      {}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5',
        )}
      >
        <div className='container mx-auto px-4 flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <i className='fa-brands fa-openid text-2xl text-blue-600 dark:text-blue-400'></i>
            <span className='font-bold text-xl'>AI 趋势</span>
          </div>
          <nav>
            <ul className='flex space-x-6'>
              <li>
                <a href='#overview' className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                  概览
                </a>
              </li>
              <li>
                <a href='#features' className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                  新功能
                </a>
              </li>
              <li>
                <a href='#details' className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                  详情
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className='container mx-auto px-4 pt-28 pb-16'>
        {}
        <section className='mb-20'>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className='text-center max-w-4xl mx-auto'
          >
            <span className='inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-6'>
              2025年10月7日 · 重大发布
            </span>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
              OpenAI 发布「ChatGPT OS」
              <br />
              <span className='text-blue-600 dark:text-blue-400'>或许明年OpenAI 会发布手机</span>
            </h1>
            <p className='text-xl text-slate-600 dark:text-slate-300 mb-8'>AISpeedsMe · 上海</p>
            <></>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className='mt-12 rounded-2xl overflow-hidden shadow-2xl'
          >
            <img
              src={imageUrls.heroImage}
              alt='OpenAI DevDay 2025 announcement'
              className='w-full h-auto object-cover'
            />
          </motion.div>
        </section>
        {}
        <section id='overview' className='mb-20'>
          <div className='max-w-4xl mx-auto'>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className='text-3xl font-bold mb-8 text-center'>OpenAI 的飞速增长</h2>
              <div className='grid md:grid-cols-2 gap-8 mb-12'>
                <div className='bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg'>
                  <h3 className='text-xl font-semibold mb-4'>用户与开发者增长</h3>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    2023 年，OpenAI 只有 200 万名每周活跃开发者，以及 1 亿名每周活跃用户。两年后，已有 400
                    万名开发者使用 OpenAI 模型构建产品，超 8 亿人每周用 ChatGPT，API 每分钟处理 60 亿 tokens。
                  </p>
                  <p className='text-slate-600 dark:text-slate-300'>
                    多亏了大家，AI 已经从人们拿来玩的东西，变成了人们每天都在用来创造的工具。
                  </p>
                </div>
                <div className='bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg'>
                  <h3 className='text-xl font-semibold mb-4'>公司估值里程碑</h3>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    就在上周，OpenAI 通过一笔 66 亿美元的股权交易，公司估值直接冲到了 5000 亿美元，超过了马斯克的
                    SpaceX，成为全球估值最高的初创企业。
                  </p>
                  <div className='mt-4'>
                    <div className='h-64'>
                      <ResponsiveContainer width='100%' height='100%'>
                        <BarChart data={growthData}>
                          <CartesianGrid strokeDasharray='3 3' stroke='#e2e8f0' />
                          <XAxis dataKey='name' stroke='#64748b' />
                          <YAxis stroke='#64748b' />
                          <Tooltip />
                          <Bar dataKey='users' fill='#3b82f6' name='用户(百万)' />
                          <Bar dataKey='developers' fill='#8b5cf6' name='开发者(万)' />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-16'
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className='bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-center'
                >
                  <div className='text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-slate-600 dark:text-slate-300'>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {}
        <section id='features' className='mb-20'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className='text-center mb-16'
            >
              <h2 className='text-3xl font-bold mb-4'>DevDay 划重点</h2>
              <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
                OpenAI 发布了一系列革命性更新，将 AI 能力推向新高度
              </p>
            </motion.div>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={cn(
                      'mb-6 p-6 rounded-xl cursor-pointer transition-all',
                      activeFeature === index
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 shadow-md'
                        : 'bg-white dark:bg-slate-800 hover:shadow-md',
                    )}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className='flex items-start'>
                      <i className={`fa ${feature.icon} text-2xl text-blue-600 dark:text-blue-400 mr-4 mt-1`}></i>
                      <div>
                        <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
                        <p className='text-slate-600 dark:text-slate-300'>{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                key={activeFeature}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className='rounded-xl overflow-hidden shadow-2xl'
              >
                <img
                  src={features[activeFeature]?.image || imageUrls.features}
                  alt={features[activeFeature]?.title || 'Feature image'}
                  className='w-full h-auto rounded-xl'
                />
              </motion.div>
            </div>
          </div>
        </section>
        {}
        <section id='details' className='mb-20'>
          <div className='max-w-4xl mx-auto'>
            {}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className='mb-20'
            >
              <h2 className='text-2xl font-bold mb-6'>ChatGPT 里直接装 App 了</h2>
              <div className='bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg mb-8'>
                <img src={imageUrls.chatgptOS} alt='ChatGPT 变超级 App' className='w-full h-64 md:h-80 object-cover' />
                <div className='p-8'>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    今天，OpenAI 扔出个重磅炸弹——ChatGPT 现在可以直接调用第三方应用了。过去你可能得专门下载
                    App；现在只需一句话，Spotify、Canva 等应用就能在对话中自动唤起，还能提供可直接操作的交互界面。
                  </p>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    如果你已经订阅了某个外部服务，还能在 ChatGPT 里直接登录账户，无缝衔接。
                  </p>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    从今天起，除了欧盟地区，所有登录用户都能用，覆盖免费、Go、Plus 和 Pro
                    计划。首批试点合作伙伴阵容相当豪华：Booking.com、Canva、Coursera、Figma、Expedia、Spotify、Zillow
                    等一众厂商。
                  </p>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    据彭博社报道，苹果正在为iOS 19开发原生ChatGPT Apps集成，未来iPhone用户将获得更深度的系统级AI体验。
                  </p>
                  <div className='mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg'>
                    <h3 className='text-xl font-semibold mb-3'>现场演示亮点</h3>
                    <ul className='list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2'>
                      <li>通过 ChatGPT 调用 Canva 为遛狗服务公司设计宣传海报</li>
                      <li>基于海报内容生成商业展示 PPT</li>
                      <li>调用 Zillow 展示匹兹堡地区的待售房屋并生成可交互地图</li>
                      <li>AI 主动推荐相关工具，如创建派对播放列表时自动唤起 Spotify</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            {}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className='mb-20'
            >
              <h2 className='text-2xl font-bold mb-6'>AgentKit 登场，造 Agent 从此不愁</h2>
              <div className='bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg'>
                <img src={imageUrls.agentKit} alt='AgentKit 工具包' className='w-full h-64 md:h-80 object-cover' />
                <div className='p-8'>
                  <p className='text-slate-600 dark:text-slate-300 mb-6'>
                    今天 OpenAI 正式推出 AgentKit——一整套专为开发者和企业打造的完整工具。在此之前，构建 Agent
                    简直是个噩梦：复杂的流程编排、自定义连接器、手动评估、上线前还要花好几周开发前端。
                  </p>
                  <div className='grid md:grid-cols-3 gap-6 mb-8'>
                    <div className='bg-slate-50 dark:bg-slate-700 p-5 rounded-lg'>
                      <h3 className='font-semibold text-lg mb-2'>Agent Builder</h3>
                      <p className='text-slate-600 dark:text-slate-300'>
                        用于创建和管理多 Agent 工作流版本的可视化画布
                      </p>
                    </div>
                    <div className='bg-slate-50 dark:bg-slate-700 p-5 rounded-lg'>
                      <h3 className='font-semibold text-lg mb-2'>Connector Registry</h3>
                      <p className='text-slate-600 dark:text-slate-300'>管理员集中管理数据与工具互通的中心</p>
                    </div>
                    <div className='bg-slate-50 dark:bg-slate-700 p-5 rounded-lg'>
                      <h3 className='font-semibold text-lg mb-2'>ChatKit</h3>
                      <p className='text-slate-600 dark:text-slate-300'>
                        能将可定制的聊天式 Agent 体验嵌入产品的工具包
                      </p>
                    </div>
                  </div>
                  <p className='text-slate-600 dark:text-slate-300'>
                    仅用时 7 分 11 秒，OpenAI 员工就为 Dev Day 网站从零搭建了 AI 助手，展示了 AgentKit
                    的强大能力和易用性。
                  </p>
                </div>
              </div>
            </motion.div>
            {}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className='mb-20'
            >
              <h2 className='text-2xl font-bold mb-6'>OpenAI 全面开放 Codex，动动嘴就能让 AI 写代码</h2>
              <div className='bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg'>
                <img src={imageUrls.codex} alt='Codex 开放使用' className='w-full h-64 md:h-80 object-cover' />
                <div className='p-8'>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    自 8 月初以来，Codex 的日活跃使用量增长了 10 倍以上，GPT-5-Codex 在发布后三周内已处理超过 40 万亿
                    tokens。
                  </p>
                  <p className='text-slate-600 dark:text-slate-300 mb-6'>
                    发布会上提到，在 OpenAI 内部，如今几乎所有工程师都在用 Codex。团队每周合并的 Pull Request 数量增加了
                    70%，而 Codex 几乎会自动审查所有 PR。
                  </p>
                  <h3 className='text-xl font-semibold mb-3'>Codex 新功能</h3>
                  <ul className='list-disc pl-6 text-slate-600 dark:text-slate-300 space-y-2 mb-6'>
                    <li>全新 Slack 集成：在团队频道或线程中直接向 Codex 委派任务或提问</li>
                    <li>Codex SDK：将驱动 Codex CLI 的同款智能 Agent 嵌入自己的工作流</li>
                    <li>全新管理员工具：更直观查看和管理 Codex 的大规模使用情况</li>
                  </ul>
                  <p className='text-slate-600 dark:text-slate-300'>
                    现场演示中，OpenAI 员工仅通过自然语言就完成了完整摄像头控制系统的构建，包括 Node 服务器、UDP
                    数据包处理逻辑，甚至能用 Xbox 手柄控制摄像头。
                  </p>
                </div>
              </div>
            </motion.div>
            {}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className='text-2xl font-bold mb-6'>模型和 API 全面更新，这波真香</h2>
              <div className='bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg'>
                <img src={imageUrls.gpt5} alt='GPT-5 Pro 发布' className='w-full h-64 md:h-80 object-cover' />
                <div className='p-8'>
                  <h3 className='text-xl font-semibold mb-3'>GPT-5 Pro 开放 API</h3>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    GPT-5 Pro 正式向所有开发者开放 API 访问。这是 OpenAI
                    迄今发布过的最智能模型，特别适合处理需要高准确性和深度推理的困难任务，应用领域涵盖金融、法律、医疗等专业领域。
                  </p>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    摩根大通利用GPT-5 Pro构建了内部金融分析助手，处理速度提升85%。内部测试显示，GPT-5
                    Pro将财务分析报告准备时间从4小时缩短至12分钟。(来源：摩根大通技术研究报告2025.10)
                  </p>
                  <h3 className='text-xl font-semibold mb-3 mt-8'>语音 API 成本大降</h3>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    OpenAI 发布了 gpt-realtime-mini，价格降低了 70%，但保持相同的语音质量和表现力。Sam Altman
                    特别强调，语音将成为人们与 AI 交互的主要方式之一。
                  </p>
                  <h3 className='text-xl font-semibold mb-3 mt-8'>Sora 2 API 预览版发布</h3>
                  <p className='text-slate-600 dark:text-slate-300'>
                    更值得关注的是，Sora 2 的 API
                    预览版已经正式发布，开发者现在可以直接在自己的产品内生成高质量视频。Sora 2 的 API
                    使用非常灵活，开发者可以控制视频长度、宽高比、分辨率，轻松混剪视频，并且所有视频都配有完整的逼真同步音效。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {}
        <section className='mb-16'>
          <div className='max-w-3xl mx-auto text-center'>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <h2 className='text-2xl font-bold mb-6'>AI 开发的新时代</h2>
              <p className='text-xl text-slate-600 dark:text-slate-300 mb-8'>
                在发布会的尾声，Sam Altman
                强调，软件开发已经从过去需要几个月或几年的漫长周期缩短到现在只需几分钟就能完成。OpenAI
                这波更新几乎覆盖了开发者关心的所有领域——从应用生态到 Agent 工具，从代码助手到视频生成，一个不落。
              </p>
            </motion.div>
          </div>
        </section>

        {/* 发布会视频附录 */}
        <section className='mb-20'>
          <div className='max-w-6xl mx-auto px-4'>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className='bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden'
            >
              <div className='p-8 text-center'>
                <h3 className='text-2xl font-bold mb-4 text-slate-900 dark:text-white'>完整发布会视频</h3>
                <p className='text-slate-600 dark:text-slate-300 mb-6'>
                  想了解更多细节？观看 OpenAI DevDay 2025 完整发布会视频，了解这些创新功能背后的故事。
                </p>

                <div className='aspect-video w-full max-w-4xl mx-auto'>
                  <iframe
                    src='https://www.youtube.com/embed/hS1YqcewH0c'
                    title='OpenAI DevDay 2025 - Complete Keynote'
                    className='w-full h-full rounded-lg'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>

                <div className='mt-6 text-sm text-slate-500 dark:text-slate-400'>
                  <p>视频来源: OpenAI 官方 YouTube 频道</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className='bg-slate-900 text-white py-12'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center space-x-2 mb-6 md:mb-0'>
              <i className='fa-brands fa-openid text-2xl text-blue-400'></i>
              <span className='font-bold text-xl'>AI 趋势</span>
            </div>
            <div className='text-slate-400'>© 2025 AISpeedsMe. 保留所有权利.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
