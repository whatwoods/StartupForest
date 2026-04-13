import { useState } from 'react';
import { applicationTimeline } from '../data';

export function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="container page-shell">
      <section className="page-intro">
        <div>
          <p className="eyebrow">Organizer Onboarding</p>
          <h1>申请成为组织者</h1>
        </div>
        <p>从资质申请到试运行活动，再到正式入驻后台，形成标准化组织者审核流程。</p>
      </section>

      <section className="apply-layout">
        <div className="timeline-panel panel">
          <h2>审核流程</h2>
          <div className="timeline">
            {applicationTimeline.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <form className="panel apply-form">
          <h2>组织申请表</h2>
          <div className="form-hint">
            <span>带 * 的字段为必填项。</span>
            <span>发起者会在 3 个工作日内通过邮箱联系你。</span>
          </div>
          {submitted ? <div className="form-message success">申请已记录，下一步将进入资质审核。</div> : null}
          <label>
            <span>组织名称 *</span>
            <input placeholder="请输入机构或社群名称" />
          </label>
          <label>
            <span>联系人 *</span>
            <input placeholder="请输入联系人姓名" />
          </label>
          <label>
            <span>联系邮箱 *</span>
            <input placeholder="请输入邮箱地址" />
          </label>
          <label className="full">
            <span>过往活动经验</span>
            <textarea placeholder="请描述你组织过的活动类型、规模和结果" rows={4} />
          </label>
          <label className="full">
            <span>计划发起的活动方向</span>
            <textarea placeholder="如 AI、硬科技、消费品牌、绿色创新等" rows={4} />
          </label>
          <button className="primary-button" onClick={() => setSubmitted(true)} type="button">
            提交组织申请
          </button>
        </form>
      </section>
    </main>
  );
}
