const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000').replace(
  /\/$/,
  '',
)

const API_PREFIX = (import.meta.env.VITE_API_PREFIX || '/api')
  .replace(/^\/?/, '/')
  .replace(/\/$/, '')

function buildUrl(path) {
  const normalizedPath = path.replace(/^\/?/, '/')
  return `${API_BASE_URL}${API_PREFIX}${normalizedPath}`
}

async function request(path, options = {}) {
  const response = await fetch(buildUrl(path), options)

  let payload = null

  try {
    payload = await response.json()
  } catch {
    payload = null
  }

  if (!response.ok) {
    const message = payload?.message || `Request failed with status ${response.status}`
    throw new Error(message)
  }

  return payload
}

export async function fetchProjects() {
  return request('/projects')
}

export async function fetchSkills() {
  return request('/skills')
}

export async function trackVisitor() {
  return request('/visitor/track', {
    method: 'POST',
  })
}

export async function submitContact(contactPayload) {
  return request('/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactPayload),
  })
}
