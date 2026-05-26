import { portfolioData } from '../data/portfolioData'

export async function fetchProjects() {
  return { data: portfolioData.projects }
}

export async function fetchSkills() {
  return { data: portfolioData.skills }
}

export async function trackVisitor() {
  return { ok: true }
}

export async function submitContact(contactPayload) {
  return { ok: true, data: contactPayload }
}
