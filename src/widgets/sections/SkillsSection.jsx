import LogoBadge from '../../shared/ui/LogoBadge'
import { MotionItem, MotionSection } from '../../shared/ui/MotionFrame'

function SkillsSection({ skills, education, experience, certificates }) {
  return (
    <MotionSection id="skills" className="section skills-section section-panel">
      <MotionItem as="h2">Skills & Tools</MotionItem>

      <MotionItem className="skills-block" delay={0.08}>
        <ul className="highlights-grid">
          {skills.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="tool-grid">
          {skills.tools.map((tool) => (
            <article
              key={typeof tool === 'string' ? tool : tool.name}
              className="tool-card"
            >
              <LogoBadge
                name={typeof tool === 'string' ? tool : tool.name}
                logoUrl={typeof tool === 'string' ? '' : tool.logoUrl}
                className="tool-logo"
              />
              <span>{typeof tool === 'string' ? tool : tool.name}</span>
            </article>
          ))}
        </div>
      </MotionItem>

      <MotionItem className="skills-block" delay={0.14}>
        <h3 className="section-subhead">Languages</h3>
        <div className="language-list">
          {skills.languages.map((language) => (
            <div key={language.name} className="language-row">
              <span>{language.name}</span>
              <div className="progress-track" aria-hidden="true">
                <div
                  className="progress-fill"
                  style={{ width: `${Math.max(0, Math.min(100, language.level))}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </MotionItem>

      <MotionItem className="skills-block" delay={0.2}>
        <h3 className="section-subhead">Education</h3>
        <ul className="education-list">
          {education.map((item) => (
            <li key={`${item.institution}-${item.program}`}>
              <p className="entry-title">{item.institution}</p>
              <p className="entry-subtitle">{item.program} ({item.years})</p>
              {item.details && <p className="entry-muted">{item.details}</p>}
            </li>
          ))}
        </ul>
      </MotionItem>

      <MotionItem className="skills-block" delay={0.26}>
        <h3 className="section-subhead">Experience & Certificates</h3>
        <ul className="education-list">
          {experience.map((item) => (
            <li key={`${item.role}-${item.company}`}>
              <p className="entry-title">{item.role}</p>
              <p className="entry-subtitle">{item.company} ({item.duration})</p>
              {item.summary && <p className="entry-muted">{item.summary}</p>}
            </li>
          ))}

          {certificates.map((item) => {
            const certTitle = typeof item === 'string' ? item : item.title
            const certSub = typeof item === 'string' ? '' : item.provider

            return (
              <li key={certTitle}>
                <p className="entry-title">{certTitle}</p>
                {certSub && <p className="entry-subtitle">{certSub}</p>}
              </li>
            )
          })}
        </ul>
      </MotionItem>
    </MotionSection>
  )
}

export default SkillsSection
