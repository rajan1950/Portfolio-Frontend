import { MotionItem, MotionSection } from '../common/MotionFrame'

function SummarySection({ summary, summaryCards }) {
  return (
    <MotionSection id="summary" className="section section-panel">
      <MotionItem as="h2">{summary.headline}</MotionItem>
      <MotionItem as="p" className="lead-text" delay={0.05}>
        {summary.intro}
      </MotionItem>
      <MotionItem as="blockquote" delay={0.1}>
        {summary.quote}
      </MotionItem>

      <MotionItem className="mini-cards" delay={0.15}>
        {summaryCards.map((card) => (
          <article className="mini-card" key={card.title}>
            <h3>{card.title}</h3>
            <ul>
              {card.items.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
        ))}
      </MotionItem>
    </MotionSection>
  )
}

export default SummarySection
