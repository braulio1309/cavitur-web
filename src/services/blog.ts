export interface BlogCategory {
  id: number | string
  name: string
  slug: string
  postsCount: number
}

export interface BlogPost {
  id: number | string
  slug: string
  title: string
  excerpt: string
  image: string | null
  publishedAt: string | null
  readingTime: string | null
  category: BlogCategory | null
}

export interface BlogPostDetail extends BlogPost {
  content: string
}

export interface PaginatedPosts {
  data: BlogPost[]
  currentPage: number
  lastPage: number
}

type ApiRecord = Record<string, unknown>

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')
const blogBaseUrl = `${apiBaseUrl}/api/blog`

function asRecord(value: unknown): ApiRecord {
  return value && typeof value === 'object' ? value as ApiRecord : {}
}

function asString(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value : null
}

function asNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

function normalizeCategory(value: unknown): BlogCategory | null {
  const category = asRecord(value)
  const slug = asString(category.slug)
  const name = asString(category.name) || asString(category.nombre)

  if (!slug || !name) return null

  return {
    id: (category.id as number | string) ?? slug,
    name,
    slug,
    postsCount: asNumber(category.posts_count ?? category.postsCount ?? category.count, 0),
  }
}

function normalizePost(value: unknown): BlogPost {
  const post = asRecord(value)
  const title = asString(post.title) || asString(post.titulo) || ''
  const slug = asString(post.slug) || String(post.id ?? '')

  return {
    id: (post.id as number | string) ?? slug,
    slug,
    title,
    excerpt: asString(post.excerpt) || asString(post.summary) || asString(post.resumen) || '',
    image: asString(post.image) || asString(post.featured_image) || asString(post.imagen),
    publishedAt: asString(post.published_at) || asString(post.publishedAt) || asString(post.fecha),
    readingTime: asString(post.reading_time) || asString(post.readingTime) || asString(post.tiempo_lectura),
    category: normalizeCategory(post.category ?? post.categoria),
  }
}

async function getJson(path: string): Promise<unknown> {
  const response = await fetch(`${blogBaseUrl}${path}`, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) throw new Error(`No fue posible cargar el blog (${response.status}).`)
  return response.json()
}

export async function getPosts(categorySlug?: string, page = 1): Promise<PaginatedPosts> {
  const query = new URLSearchParams({ page: String(page) })
  if (categorySlug) query.set('category', categorySlug)

  const payload = asRecord(await getJson(`/posts?${query}`))
  const rows = Array.isArray(payload.data) ? payload.data : Array.isArray(payload.posts) ? payload.posts : []
  const meta = asRecord(payload.meta)

  return {
    data: rows.map(normalizePost),
    currentPage: asNumber(meta.current_page ?? payload.current_page, page),
    lastPage: asNumber(meta.last_page ?? payload.last_page, 1),
  }
}

export async function getCategories(): Promise<BlogCategory[]> {
  const payload = asRecord(await getJson('/categories'))
  const rows = Array.isArray(payload.data) ? payload.data : Array.isArray(payload.categories) ? payload.categories : []
  return rows.map(normalizeCategory).filter((category): category is BlogCategory => category !== null)
}

export async function getPost(slug: string): Promise<BlogPostDetail> {
  const payload = asRecord(await getJson(`/posts/${encodeURIComponent(slug)}`))
  const post = asRecord(payload.data ?? payload.post ?? payload)
  return { ...normalizePost(post), content: asString(post.content) || '' }
}