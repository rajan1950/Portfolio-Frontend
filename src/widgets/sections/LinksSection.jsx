import LogoBadge from '../../shared/ui/LogoBadge'
import { MotionItem, MotionSection } from '../../shared/ui/MotionFrame'

function LinksSection({ links, profile, footer }) {
  const socialItems = Array.isArray(links.social)
    ? links.social
    : [
        { name: 'LinkedIn', url: links.linkedin, logoUrl: '' },
        { name: 'GitHub', url: links.github, logoUrl: '' },
        { name: 'Instagram', url: links.instagram, logoUrl: '' },
        { name: 'Email', url: links.email, logoUrl: '' },
      ]

  return (
    <MotionSection id="links" className="section links-section section-panel">
      <MotionItem as="h2">Links</MotionItem>
      <MotionItem className="social-row" delay={0.08}>
        {socialItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target={item.url?.startsWith('mailto:') ? undefined : '_blank'}
            rel={item.url?.startsWith('mailto:') ? undefined : 'noreferrer'}
            className="social-link"
          >
            <LogoBadge name={item.name} logoUrl={item.logoUrl} className="social-logo" />
            <span>{item.name}</span>
          </a>
        ))}
      </MotionItem>

      <MotionItem className="footer-contact" delay={0.14}>
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
      </MotionItem>

      <MotionItem as="footer" delay={0.2}>
        {new Date().getFullYear()} {footer.text}
      </MotionItem>
    </MotionSection>
  )
}

export default LinksSection
