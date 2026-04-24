import InfoChip from '../common/InfoChip'
import { MotionItem, MotionSection } from '../common/MotionFrame'
import {
  EnvelopeIcon,
  LinkedInIcon,
  LocationIcon,
  PhoneIcon,
} from '../common/Icons'

function HomeSection({ profile }) {
  return (
    <MotionSection id="home" className="section hero-section hero-panel">
      {profile.openToWork && (
        <MotionItem className="status-pill">
          <span className="status-dot" />
          Open to Work
        </MotionItem>
      )}

      <MotionItem as="p" className="role-line" delay={0.05}>
        {profile.role}
      </MotionItem>
      <MotionItem as="h1" delay={0.1}>
        {profile.name}
      </MotionItem>
      <MotionItem as="p" className="hero-tagline" delay={0.15}>
        {profile.tagline}
      </MotionItem>

      <MotionItem className="contact-grid" delay={0.2}>
        <InfoChip icon={<EnvelopeIcon />} text={profile.email} />
        <InfoChip icon={<PhoneIcon />} text={profile.phone} />
        <InfoChip icon={<LinkedInIcon />} text={profile.linkedin} />
        <InfoChip icon={<LocationIcon />} text={profile.location} />
      </MotionItem>
    </MotionSection>
  )
}

export default HomeSection
