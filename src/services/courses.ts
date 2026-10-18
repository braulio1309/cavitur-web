export interface Course {
  id: number | string
  title: string
  description: string
  url: string | null
  imageUrl: string | null
  embedUrl: string | null
}

type ApiRecord = Record<string, unknown>

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')
const coursesBaseUrl = `${apiBaseUrl}/api/courses`

function asRecord(value: unknown): ApiRecord {
  return value && typeof value === 'object' ? value as ApiRecord : {}
}

function asString(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value : null
}

function normalizeCourse(value: unknown): Course {
  const course = asRecord(value)

  return {
    id: typeof course.id === 'number' || typeof course.id === 'string' ? course.id : '',
    title: asString(course.title) || '',
    description: asString(course.description) || '',
    url: asString(course.url),
    imageUrl: asString(course.image_url) || asString(course.image_path),
    embedUrl: asString(course.embed_url),
  }
}

async function getJson(path = ''): Promise<unknown> {
  const response = await fetch(`${coursesBaseUrl}${path}`, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`No fue posible cargar los cursos (${response.status}).`)
  return response.json()
}

export async function getCourses(): Promise<Course[]> {
  const value = await getJson()
  const payload = asRecord(value)
  const rows = Array.isArray(value) ? value : Array.isArray(payload.data) ? payload.data : Array.isArray(payload.courses) ? payload.courses : []
  return rows.map(normalizeCourse)
}

export async function getCourse(id: string): Promise<Course> {
  const payload = asRecord(await getJson(`/${encodeURIComponent(id)}`))
  const course = asRecord(payload.data ?? payload.course ?? payload)
  return normalizeCourse(course)
}
