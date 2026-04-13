import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data';

const stageOptions = [
  { label: '全部活动', value: 'all' },
  { label: '报名中', value: 'applying' },
  { label: '入选公示', value: 'shortlisted' },
  { label: '进行中', value: 'live' },
  { label: '已结束', value: 'closed' },
] as const;

export function EventsPage() {
  const [stage, setStage] = useState<(typeof stageOptions)[number]['value']>('all');
  const [year, setYear] = useState('全部年份');

  const years = useMemo(() => {
    const yearSet = new Set(events.map((event) => event.dateLabel.slice(0, 4)));
    return ['全部年份', ...Array.from(yearSet)];
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const stageMatch = stage === 'all' || event.stage === stage;
      const yearMatch = year === '全部年份' || event.dateLabel.startsWith(year);
      return stageMatch && yearMatch;
    });
  }, [stage, year]);

  return (
    <main className="container page-shell">
      <section className="page-intro">
        <div>
          <p className="eyebrow">Program Directory</p>
          <h1>活动列表</h1>
        </div>
        <p>统一展示活动状态、时间、场地与报名入口，供访客快速筛选和跳转。</p>
      </section>

      <section className="filter-strip">
        <div className="chip-group">
          {stageOptions.map((option) => (
            <button
              key={option.value}
              className={stage === option.value ? 'chip active' : 'chip'}
              onClick={() => setStage(option.value)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="filter-meta">
          <label className="filter-select">
            <span>年份</span>
            <select onChange={(event) => setYear(event.target.value)} value={year}>
              {years.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <p className="result-count">当前结果：{filteredEvents.length} 场活动</p>
        </div>
      </section>

      <section className="list-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <article className="event-card event-card-large" key={event.id}>
              <img alt={event.title} src={event.heroImage} />
              <div className="event-card-body">
                <div className="event-row">
                  <span className={`status ${event.stage}`}>{label(event.stage)}</span>
                  <span className="muted">{event.metrics.browseCount} 浏览</span>
                </div>
                <h2>{event.title}</h2>
                <p className="event-meta">
                  {event.dateLabel} · {event.city} · {event.venue}
                </p>
                <p>{event.description}</p>
                <div className="tag-row">
                  {event.topics.map((topic) => (
                    <span className="tag" key={topic}>
                      {topic}
                    </span>
                  ))}
                </div>
                <Link className="primary-button small" to={`/event/${event.id}`}>
                  进入活动详情
                </Link>
              </div>
            </article>
          ))
        ) : (
          <article className="panel empty-state">
            <h2>当前筛选下没有活动</h2>
            <p>你可以切换年份或阶段筛选，也可以回到全部活动查看完整目录。</p>
            <button className="secondary-button" onClick={() => { setStage('all'); setYear('全部年份'); }} type="button">
              重置筛选
            </button>
          </article>
        )}
      </section>
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
