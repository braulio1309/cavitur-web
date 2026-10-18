export interface Course {
  id: number | string
  title: string
  description: string
  url: string | null
  imageUrl: string | null
  embedUrl: string | null
}

const testVideoUrl = 'https://drive.google.com/file/d/1t4cEmOvYp-dbQRN9lkoyD83jjFAgEhsg/view?usp=drive_link'
const testEmbedUrl = 'https://drive.google.com/file/d/1t4cEmOvYp-dbQRN9lkoyD83jjFAgEhsg/preview'

const testCourses: Course[] = [
  {
    id: 1,
    title: 'Introducción a la ganadería',
    description: 'Conoce los conceptos esenciales y las buenas prácticas para iniciarte en el sector ganadero.',
    url: testVideoUrl,
    imageUrl: null,
    embedUrl: testEmbedUrl,
  },
  {
    id: 2,
    title: 'Turismo sostenible',
    description: 'Descubre cómo crear experiencias turísticas responsables que conectan con cada destino.',
    url: testVideoUrl,
    imageUrl: null,
    embedUrl: testEmbedUrl,
  },
  {
    id: 3,
    title: 'Diseña experiencias de viaje',
    description: 'Aprende a transformar ideas y destinos en propuestas de viaje atractivas para tus clientes.',
    url: testVideoUrl,
    imageUrl: null,
    embedUrl: testEmbedUrl,
  },
]

export async function getCourses(): Promise<Course[]> {
  return testCourses
}

export async function getCourse(id: string): Promise<Course> {
  const course = testCourses.find((item) => String(item.id) === id)
  if (!course) throw new Error('No se encontró el curso de prueba solicitado.')
  return course
}
