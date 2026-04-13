import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { events } from '../data';

export function EventDetailPage() {
  const { id } = useParams();
  const event = events.find((item) => item.id === id) ?? events[0];
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError('');
    setSubmitted(false);

    if (event.stage !== 'applying') {
      setError('当前活动不在报名阶段，请先查看入选公示或活动回顾。');
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="container detail-layout">
      <section className="detail-main">
        <div className="page-intro compact">
          <span className={`status ${event.stage}`}>{label(event.stage)}</span>
          <h1>{event.title}</h1>
          <p>{event.subtitle}</p>
        </div>
        <img alt={event.title} className="detail-hero" src={event.heroImage} />
        <section className="panel mobile-summary">
          <h2>移动端活动速览</h2>
          <div className="mobile-summary-grid">
            <div>
              <span className="muted">举办时间</span>
              <strong>{event.dateLabel}</strong>
            </div>
            <div>
              <span className="muted">地点</span>
              <strong>
                {event.city} · {event.venue}
              </strong>
            </div>
            <div>
              <span className="muted">浏览量</span>
              <strong>{event.metrics.browseCount}</strong>
            </div>
            <div>
              <span className="muted">申请人数</span>
              <strong>{event.metrics.applicants}</strong>
            </div>
          </div>
        </section>
        <section className="detail-copy panel">
          <h2>活动详情</h2>
          <p>{event.description}</p>
          <div className="two-col-list">
            <article>
              <h3>核心议题</h3>
              <ul>
                {event.topics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3>活动亮点</h3>
              <ul>
                {event.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="panel form-panel">
          <h2>报名申请</h2>
          <p>正式版先实现完整界面与交互结构，后续可直接对接真实报名 API。</p>
          <div className="form-hint">
            <span>必填字段会在接入真实接口后进行更严格校验。</span>
            <span>报名结果将在用户中心同步展示。</span>
          </div>
          {error ? <div className="form-message error">{error}</div> : null}
          {submitted ? <div className="form-message success">报名申请已提交，审核结果会同步到“我的报名”。</div> : null}
          <form className="form-grid">
            <label>
              <span>姓名 *</span>
              <input placeholder="请输入真实姓名" />
            </label>
            <label>
              <span>手机号 *</span>
              <input placeholder="请输入手机号" />
            </label>
            <label className="full">
              <span>邮箱 *</span>
              <input placeholder="example@forest.cn" />
            </label>
            <label className="full">
              <span>项目简介</span>
              <textarea placeholder="介绍你的项目方向、所处阶段和参与诉求" rows={5} />
            </label>
            <button className="primary-button" onClick={handleSubmit} type="button">
              提交报名申请
            </button>
          </form>
        </section>
        <section className="panel mobile-ticket-panel">
          <h2>移动端票务状态</h2>
          {event.tickets.map((ticket) => (
            <div className="ticket-row" key={ticket.name}>
              <div>
                <strong>{ticket.name}</strong>
                <p>{ticket.description}</p>
              </div>
              <div className="ticket-price">
                <span>¥{ticket.price}</span>
                <small>
                  {ticket.remaining} / {ticket.total}
                </small>
              </div>
            </div>
          ))}
        </section>
      </section>

      <aside className="detail-side">
        <section className="panel side-ticket">
          <h3>票务状态</h3>
          {event.tickets.map((ticket) => (
            <div className="ticket-row" key={ticket.name}>
              <div>
                <strong>{ticket.name}</strong>
                <p>{ticket.description}</p>
              </div>
              <div className="ticket-price">
                <span>¥{ticket.price}</span>
                <small>
                  {ticket.remaining} / {ticket.total}
                </small>
              </div>
            </div>
          ))}
          <Link className="primary-button small" to="/me">
            查看我的报名
          </Link>
        </section>

        <section className="panel side-facts">
          <h3>活动速览</h3>
          <dl>
            <div>
              <dt>举办时间</dt>
              <dd>{event.dateLabel}</dd>
            </div>
            <div>
              <dt>地点</dt>
              <dd>
                {event.city} · {event.venue}
              </dd>
            </div>
            <div>
              <dt>浏览量</dt>
              <dd>{event.metrics.browseCount}</dd>
            </div>
            <div>
              <dt>申请人数</dt>
              <dd>{event.metrics.applicants}</dd>
            </div>
          </dl>
        </section>
      </aside>
    </main>
  );
}

function label(stage: string) {
  return (
    {
      applying: '报名中',
      shortlisted: '入选公示',
      live: '进行中',
      closed: '已结束',
    }[stage] ?? stage
  );
}
