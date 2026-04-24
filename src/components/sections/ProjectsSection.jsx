import { MotionItem, MotionSection } from '../common/MotionFrame'

function ProjectsSection({ projects }) {
  return (
    <MotionSection id="projects" className="section section-panel">
      <MotionItem as="h2">Projects</MotionItem>
      <MotionItem className="timeline" delay={0.08}>
        {projects.map((project) => (
          <article className="timeline-item" key={project.title}>
            <h3>{project.title}</h3>
            <p className="subtitle">{project.subtitle}</p>
            <p>{project.description}</p>

            <p className="meta-title">Objective</p>
            <p>{project.objective}</p>

            <p className="meta-title">Key Features</p>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <p className="meta-title">Tech Stack</p>
            <div className="tag-wrap">
              {project.techStack.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <p className="meta-title">Skills Used</p>
            <div className="tag-wrap">
              {project.skillsUsed.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </MotionItem>
    </MotionSection>
  )
}

export default ProjectsSection
