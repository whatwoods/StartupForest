import { useState } from 'react';
import { Link } from 'react-router-dom';
import { adminDraft } from '../data';

export function AdminPage() {
  const [saved, setSaved] = useState(false);
  const [published, setPublished] = useState(false);

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <div>
          <p className="eyebrow light">Admin Console</p>
          <h1>创业森林</h1>
        </div>
        <nav>
          <Link to="/admin">活动管理</Link>
          <Link to="/events">活动预览</Link>
          <Link to="/me">参与者</Link>
          <Link to="/apply">组织申请</Link>
        </nav>
      </aside>

      <section className="admin-content">
        <header className="admin-header">
          <div>
            <p className="eyebrow">Publishing Desk</p>
            <h2>创建新活动</h2>
          </div>
          <button className="secondary-button" type="button">
            预览活动页
          </button>
        </header>

        <div className="admin-panels">
          <section className="panel">
            <h3>活动基本信息</h3>
            <div className="form-hint">
              <span>当前为正式版交互壳层，字段可直接对接真实后台表单。</span>
              <span>保存草稿与发布态已经预留反馈区域。</span>
            </div>
            {saved ? <div className="form-message success">草稿已保存，组织者可以稍后继续编辑。</div> : null}
            {published ? <div className="form-message success">活动已发布，前台列表与详情页将显示最新内容。</div> : null}
            <div className="form-grid">
              <label className="full">
                <span>活动主题 *</span>
                <input defaultValue={adminDraft.title} />
              </label>
              <label>
                <span>开始时间 *</span>
                <input defaultValue={adminDraft.startAt} type="datetime-local" />
              </label>
              <label>
                <span>活动地点 *</span>
                <input defaultValue={adminDraft.location} />
              </label>
              <label className="full">
                <span>活动简介</span>
                <textarea defaultValue={adminDraft.summary} rows={6} />
              </label>
            </div>
          </section>

          <section className="panel">
            <h3>票种与容量</h3>
            <div className="admin-ticket-list">
              {adminDraft.tickets.map((ticket) => (
                <article className="admin-ticket-row" key={ticket.name}>
                  <div>
                    <span className="muted">票种名称</span>
                    <strong>{ticket.name}</strong>
                  </div>
                  <div>
                    <span className="muted">名额</span>
                    <strong>{ticket.quota}</strong>
                  </div>
                  <div>
                    <span className="muted">价格</span>
                    <strong>¥{ticket.price}</strong>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel admin-rule-grid">
            <article>
              <h3>报名审核方式</h3>
              <p>支持手动审核与先到先得，正式版界面已预留后端策略接入位置。</p>
            </article>
            <article>
              <h3>投票规则</h3>
              <p>活动进行阶段可开放现场投票、控制次数限制，并延展到项目墙展示。</p>
            </article>
          </section>
        </div>

        <footer className="admin-footer">
          <span>草稿已自动保存到本地状态</span>
          <div>
            <button
              className="secondary-button"
              onClick={() => {
                setSaved(true);
                setPublished(false);
              }}
              type="button"
            >
              保存草稿
            </button>
            <button
              className="primary-button"
              onClick={() => {
                setPublished(true);
                setSaved(false);
              }}
              type="button"
            >
              立即发布活动
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}
