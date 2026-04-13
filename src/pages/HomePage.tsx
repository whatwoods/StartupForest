import { Link } from 'react-router-dom';
import { events, lifecycleSteps, stats } from '../data';

const featured = events.slice(0, 3);

export function HomePage() {
  return (
    <main>
      <section className="hero-section container">
        <div className="hero-copy">
          <p className="eyebrow">Editorial Growth Ecosystem</p>
          <h1>
            把创业活动
            <br />
            做成一片会生长的森林
          </h1>
          <p className="hero-text">
            正式版聚合首页、活动详情、报名流程、组织者申请、用户中心和后台工作台，告别 demo
            的离散页面，形成完整信息架构。
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/events">
              探索最新活动
            </Link>
            <Link className="secondary-button" to="/apply">
              申请成为组织者
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-card hero-card-main">
            <img alt="创业活动主视觉" src={featured[0].heroImage} />
            <div className="hero-card-body">
              <span className="status applying">报名中</span>
              <h3>{featured[0].title}</h3>
              <p>{featured[0].summary}</p>
            </div>
          </div>
          <div className="hero-note">
            <strong>活动生命周期完整联动</strong>
            <span>报名中、入选公示、活动进行中、活动结束四个阶段的页面状态已经统一建模。</span>
          </div>
        </div>
      </section>

      <section className="metric-section">
        <div className="container metric-grid">
          {stats.map((item) => (
            <article key={item.label} className="metric-card">
              <p className="metric-value">{item.value}</p>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container content-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Lifecycle</p>
            <h2>活动生命周期导览</h2>
          </div>
          <p className="section-note">让访客、选手和组织者一眼知道当前阶段能做什么。</p>
        </div>
        <div className="lifecycle-grid">
          {lifecycleSteps.map((step) => (
            <article className="lifecycle-card" key={step.key}>
              <span className={`status ${step.key}`}>{step.stage}</span>
              <h3>{step.action}</h3>
              <p>{step.entry}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container content-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Current Programs</p>
            <h2>核心活动入口</h2>
          </div>
          <Link className="inline-link" to="/events">
            查看全部活动
          </Link>
        </div>
        <div className="card-grid">
          {featured.map((event) => (
            <article className="event-card" key={event.id}>
              <img alt={event.title} src={event.heroImage} />
              <div className="event-card-body">
                <span className={`status ${event.stage}`}>{stageLabel(event.stage)}</span>
                <p className="event-meta">
                  {event.dateLabel} · {event.city}
                </p>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                <Link className="text-button" to={`/event/${event.id}`}>
                  查看详情
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container content-section split-section">
        <div>
          <p className="eyebrow">One Platform, Six Surfaces</p>
          <h2>从 demo 拼页变成正式产品结构</h2>
        </div>
        <div className="feature-list">
          <article>
            <h3>统一视觉系统</h3>
            <p>保留“Digital Arboretum”方向，抽成正式设计 token、玻璃导航、杂讯背景和层级卡片。</p>
          </article>
          <article>
            <h3>统一数据模型</h3>
            <p>活动、票种、阶段和报名记录都由共享数据层驱动，不再复制粘贴静态 HTML。</p>
          </article>
          <article>
            <h3>统一路由体验</h3>
            <p>首页、活动列表、详情、申请、用户中心、后台均可直接访问与扩展。</p>
          </article>
        </div>
      </section>
    </main>
  );
}

function stageLabel(stage: string) {
  switch (stage) {
    case 'applying':
      return '报名中';
    case 'shortlisted':
      return '入选公示';
    case 'live':
      return '进行中';
    case 'closed':
      return '已结束';
    default:
      return stage;
  }
}
