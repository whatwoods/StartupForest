import { Link } from 'react-router-dom';
import { registrations } from '../data';

export function MePage() {
  return (
    <main className="container page-shell">
      <section className="page-intro">
        <div>
          <p className="eyebrow">User Center</p>
          <h1>我的报名</h1>
        </div>
        <p>正式版把报名记录、票种、审核状态和后续咨询入口整理到一页里。</p>
      </section>

      <section className="me-layout">
        <aside className="panel sidebar-menu">
          <Link className="menu-item active" to="/me">
            我的报名
          </Link>
          <Link className="menu-item" to="/event/forest-maker-2026">
            我的项目
          </Link>
          <Link className="menu-item" to="/apply">
            个人信息
          </Link>
        </aside>

        <div className="registration-list">
          {registrations.map((item) => (
            <article className="panel registration-card" key={item.title}>
              <div>
                <h2>{item.title}</h2>
                <p>报名时间：{item.submittedAt}</p>
              </div>
              <div>
                <span className="muted">票种</span>
                <strong>{item.ticket}</strong>
              </div>
              <div>
                <span className={`status ${statusClass(item.status)}`}>{item.status}</span>
              </div>
            </article>
          ))}

          <div className="panel support-card">
            <div>
              <h2>对审核结果有疑问？</h2>
              <p>正式版保留了 demo 中的咨询入口，并统一成服务卡片，后续可接 IM 或工单系统。</p>
            </div>
            <button className="primary-button small" type="button">
              在线咨询
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function statusClass(status: string) {
  switch (status) {
    case '审核中':
      return 'shortlisted';
    case '入选':
      return 'live';
    case '未入选':
      return 'closed';
    default:
      return 'applying';
  }
}
