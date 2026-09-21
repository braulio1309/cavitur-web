export interface ContactRequest {
  full_name: string
  email: string
  phone: string
  profile_type: string
  interests: string[]
  message: string
}

interface ContactResponse {
  status: boolean
  message: string
  data: { id: number }
}

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export async function submitContact(payload: ContactRequest): Promise<ContactResponse> {
  const response = await fetch(`${apiBaseUrl}/api/contactos`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => null) as ContactResponse | null
  if (!response.ok || !data?.status) {
    throw new Error(data?.message || 'No fue posible enviar tu solicitud. Inténtalo nuevamente.')
  }

  return data
}