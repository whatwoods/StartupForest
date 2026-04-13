export type EventStage = 'applying' | 'shortlisted' | 'live' | 'closed';

export type EventRecord = {
  id: string;
  title: string;
  subtitle: string;
  city: string;
  venue: string;
  dateLabel: string;
  stage: EventStage;
  summary: string;
  description: string;
  heroImage: string;
  metrics: {
    browseCount: number;
    applicants: number;
    seats: number;
  };
  topics: string[];
  highlights: string[];
  tickets: Array<{
    name: string;
    price: number;
    remaining: number;
    total: number;
    description: string;
  }>;
};

export const navItems = [
  { label: '首页', to: '/' },
  { label: '活动', to: '/events' },
  { label: '申请组织者', to: '/apply' },
  { label: '用户中心', to: '/me' },
  { label: '组织台', to: '/admin' },
];

export const stats = [
  { label: '年度活动场次', value: '128', note: '覆盖 18 座城市与 6 条主题赛道' },
  { label: '平台累计项目', value: '2,460+', note: '从早期想法到正式融资的完整追踪' },
  { label: '组织者网络', value: '94', note: '高校社群、产业联盟与专业机构共同参与' },
  { label: '社区投票总数', value: '36 万', note: '活动进行阶段开放公开评审与社群互动' },
];

export const lifecycleSteps = [
  {
    stage: '报名中',
    key: 'applying',
    action: '展示介绍、开放报名、收集项目信息',
    entry: '首页 Hero / 活动详情报名表单',
  },
  {
    stage: '入选公示',
    key: 'shortlisted',
    action: '关闭报名入口、开放名单查询与候补',
    entry: '活动详情侧栏 / 用户中心状态提醒',
  },
  {
    stage: '活动进行中',
    key: 'live',
    action: '项目提交、现场投票、过程数据追踪',
    entry: '活动列表状态卡 / 组织者后台',
  },
  {
    stage: '活动结束',
    key: 'closed',
    action: '展示项目墙、获奖公示与活动回顾',
    entry: '历届回顾 / 详情页资料包下载',
  },
];

export const events: EventRecord[] = [
  {
    id: 'forest-maker-2026',
    title: '森林创客 2026：可持续科技创新峰会',
    subtitle: '把创业与长期主义重新放到同一张桌子上',
    city: '上海',
    venue: '杨浦区创智天地',
    dateLabel: '2026.05.16 - 05.18',
    stage: 'applying',
    summary: '面向绿色科技、循环经济与城市可持续方向的创业者征集报名。',
    description:
      '活动以“长期主义的商业化”为主线，串联主题演讲、项目路演、闭门对谈与生态展位。入选团队将获得导师辅导、媒体曝光和投后资源连接。',
    heroImage:
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80',
    metrics: {
      browseCount: 1284,
      applicants: 318,
      seats: 120,
    },
    topics: ['零碳材料与城市更新', '农业科技与供应链重构', '影响力投资的融资策略'],
    highlights: ['三天主题论坛', '闭门创投晚宴', '入选项目展示墙'],
    tickets: [
      { name: '早鸟专业票', price: 299, remaining: 12, total: 100, description: '主论坛 + 工作坊 + 午餐' },
      { name: '标准体验票', price: 599, remaining: 45, total: 150, description: '完整议程 + 回看资料' },
      { name: '创投精英票', price: 899, remaining: 0, total: 40, description: '闭门会 + 社交晚宴 + 媒体专区' },
    ],
  },
  {
    id: 'ai-productivity-2026',
    title: 'AI+ 生产力跃迁实战营',
    subtitle: '让大模型从演示走向业务真实闭环',
    city: '杭州',
    venue: '西湖科创会客厅',
    dateLabel: '2026.04.20 - 04.21',
    stage: 'live',
    summary: '组织者与企业团队现场拆解 AI 在金融、制造和医疗中的落地路径。',
    description:
      '以真实业务挑战为主线，围绕数据接入、工具编排、评测闭环和组织流程协同展开深度工作坊。',
    heroImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    metrics: {
      browseCount: 2032,
      applicants: 248,
      seats: 80,
    },
    topics: ['场景拆解', '评测体系', 'Agent 工作流'],
    highlights: ['现场投票', '专家驻场答疑', '行业案例手册'],
    tickets: [
      { name: '现场参与票', price: 499, remaining: 8, total: 80, description: '两日工作坊 + 资料包' },
      { name: '线上直播票', price: 99, remaining: 160, total: 300, description: '直播 + 录像回看' },
    ],
  },
  {
    id: 'campfire-founder-2026',
    title: '创始人森林露营沙龙',
    subtitle: '回到自然环境里重新校准创业节奏',
    city: '深圳',
    venue: '南山海湾营地',
    dateLabel: '2026.06.08',
    stage: 'shortlisted',
    summary: '已结束报名，开放入选查询与候补补录。',
    description:
      '针对早期团队创始人设计的一日沉浸式对谈，从心理韧性、组织沟通到战略聚焦，强调深度而非规模。',
    heroImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    metrics: {
      browseCount: 965,
      applicants: 143,
      seats: 36,
    },
    topics: ['创始人心理韧性', '组织冲突修复', '节奏管理'],
    highlights: ['营地对谈', '深夜圆桌', '候补机制'],
    tickets: [
      { name: '创始人席位', price: 399, remaining: 0, total: 36, description: '已满员，候补排队中' },
    ],
  },
  {
    id: 'winter-review-2025',
    title: '冬季创业复盘会',
    subtitle: '把失败和增长都讲清楚',
    city: '北京',
    venue: '朝阳国际创投中心',
    dateLabel: '2025.12.12',
    stage: 'closed',
    summary: '活动结束，已开放项目展示与获奖公示。',
    description:
      '围绕融资复盘、团队管理和商业模式修正展开，形成公开案例库并沉淀年度方法论文档。',
    heroImage:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
    metrics: {
      browseCount: 1780,
      applicants: 220,
      seats: 120,
    },
    topics: ['融资复盘', '增长实验', '团队重组'],
    highlights: ['案例手册', '项目墙', '奖项回顾'],
    tickets: [{ name: '回顾资料包', price: 0, remaining: 999, total: 999, description: '开放下载' }],
  },
];

export const applicationTimeline = [
  { title: '提交组织申请', desc: '填写组织背景、过往案例与拟发起活动方向。' },
  { title: '发起者审核', desc: '平台在 3 个工作日内完成资质确认与能力评估。' },
  { title: '试运行活动', desc: '通过首场活动验证流程、协作与报名转化。' },
  { title: '正式入驻', desc: '解锁后台、报名审核、项目投票与数据统计能力。' },
];

export const registrations = [
  { title: '2026 创业林夏季加速营', submittedAt: '2026-04-12 14:30', ticket: '团队精英票', status: '审核中' },
  { title: 'AI+ 生产力跃迁实战营', submittedAt: '2026-03-28 09:15', ticket: '现场参与票', status: '入选' },
  { title: '创投私享闭门会', submittedAt: '2026-02-15 11:00', ticket: 'VIP 邀请票', status: '未入选' },
];

export const adminDraft = {
  title: '创业森林 · 城市共创日',
  startAt: '2026-05-30T13:30',
  location: '成都 · 交子大道创新会客厅',
  summary:
    '一场围绕产业资源、创业者连接与项目展示的城市共创活动，包含主题分享、报名审核与现场投票三个阶段。',
  tickets: [
    { name: '早鸟票', quota: 50, price: 0 },
    { name: '标准票', quota: 100, price: 199 },
  ],
};
