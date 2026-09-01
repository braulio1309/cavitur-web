<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

// --- ESTADOS REACTIVOS ---
const activeTab = ref<'mision' | 'vision' | 'valores'>('mision')
const selectedCategory = ref<string>('Todos')
const formSubmitted = ref<boolean>(false)

// Formulario de Contacto / Alianza
const formData = reactive({
  nombre: '',
  email: '',
  telefono: '',
  tipoPerfil: 'Freelance de Viajes',
  mensaje: ''
})

// --- DATOS DEL BLOG ---
interface BlogPost {
  id: number
  titulo: string
  resumen: string
  categoria: string
  fecha: string
  imagen: string
  tiempoLectura: string
}

const posts = ref<BlogPost[]>([
  {
    id: 1,
    titulo: 'Cómo maximizar tus comisiones aéreas como agente freelance en 2026',
    resumen: 'Estrategias clave de consolidación y negociación de tarifas GDS para asesores independientes.',
    categoria: 'Freelance',
    fecha: '28 Ago, 2026',
    tiempoLectura: '4 min',
    imagen: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    titulo: 'Alianzas B2B: El futuro de las agencias de turismo emisivo',
    resumen: 'Por qué unirse a un centro aliado reduce costos operativos e incrementa tu inventario hotelero.',
    categoria: 'Agencias',
    fecha: '22 Ago, 2026',
    tiempoLectura: '6 min',
    imagen: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    titulo: 'Top destinos emergentes con mayor margen de rentabilidad turística',
    resumen: 'Análisis de tendencias de viaje y paquetes empaquetados de alta conversión para este trimestre.',
    categoria: 'Tendencias',
    fecha: '15 Ago, 2026',
    tiempoLectura: '5 min',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  }
])

const categoriasBlog = ['Todos', 'Freelance', 'Agencias', 'Tendencias']

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'Todos') return posts.value
  return posts.value.filter(p => p.categoria === selectedCategory.value)
})

// Enviar formulario
const handleSubmit = () => {
  formSubmitted.value = true
  setTimeout(() => {
    // Reset luego de 4 segundos
    formData.nombre = ''
    formData.email = ''
    formData.telefono = ''
    formData.mensaje = ''
    formSubmitted.value = false
  }, 4000)
}
</script>

<template>
  <div class="cavitur-app">
    
    <!-- BARRA SUPERIOR DE CONECTIVIDAD -->
    <header class="top-announcement py-2 text-white">
      <div class="container d-flex justify-content-between align-items-center small">
        <div>
          <span class="badge bg-cavitur-orange me-2 text-white px-2 py-1">CENTRO ALIADO</span>
          <span class="d-none d-md-inline text-white-50">Conectamos agentes freelance y agencias con el ecosistema turístico global.</span>
        </div>
        <div class="d-flex align-items-center gap-3">
          <a href="https://wa.me/" target="_blank" class="text-white text-decoration-none hover-orange">
            <i class="bi bi-whatsapp text-success me-1"></i> Soporte Aliados
          </a>
        </div>
      </div>
    </header>

    <!-- NAVBAR PRINCIPAL -->
    <nav class="navbar navbar-expand-lg sticky-top bg-white border-bottom py-3">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="#inicio">
          <!-- LOGO VECTORIAL CAVITUR -->
          <div class="logo-wrapper">
            <span class="logo-text-c">C</span>
            <span class="logo-text-a">A</span>
            <span class="logo-text-v">V<span class="plane-tail"><i class="bi bi-airplane-fill"></i></span></span>
            <span class="logo-text-rest">ITUR</span>
          </div>
        </a>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto me-lg-4 mb-2 mb-lg-0 gap-lg-3 fw-medium">
            <li class="nav-item"><a class="nav-link text-dark-green" href="#inicio">Inicio</a></li>
            <li class="nav-item"><a class="nav-link text-dark-green" href="#nosotros">Misión & Visión</a></li>
            <li class="nav-item"><a class="nav-link text-dark-green" href="#pilares">Beneficios</a></li>
            <li class="nav-item"><a class="nav-link text-dark-green" href="#servicios">Servicios</a></li>
            <li class="nav-item"><a class="nav-link text-dark-green" href="#blog">Blog</a></li>
            <li class="nav-item"><a class="nav-link text-dark-green" href="#contacto">Contacto</a></li>
          </ul>
          <a href="#contacto" class="btn btn-cavitur-orange px-4 py-2 rounded-pill fw-bold">
            <i class="bi bi-person-plus me-1"></i> Únete como Aliado
          </a>
        </div>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section id="inicio" class="hero-section py-5 position-relative">
      <div class="container py-lg-5">
        <div class="row align-items-center gy-5">
          <div class="col-lg-6">
            <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-cream border border-cavitur-green-subtle mb-3">
              <i class="bi bi-stars text-cavitur-orange"></i>
              <span class="small fw-bold text-cavitur-green">PARA FREELANCE Y AGENCIAS DE VIAJES</span>
            </div>
            
            <h1 class="display-4 fw-extrabold text-dark-green mb-3">
              Algo <span class="text-cavitur-orange fst-italic">grande</span> se está preparando para tu negocio turístico
            </h1>
            
            <p class="lead text-muted mb-4 fs-6">
              <strong>CAVITUR</strong> es el centro aliado estratégico que conecta a profesionales del turismo con mayor conectividad, tarifas mayoristas, soporte operativo y herramientas para escalar ventas.
            </p>

            <div class="d-flex flex-wrap gap-3 mb-4">
              <a href="#contacto" class="btn btn-cavitur-green btn-lg px-4 py-3 rounded-pill fw-bold">
                Comenzar Alianza <i class="bi bi-arrow-right ms-2"></i>
              </a>
              <a href="#nosotros" class="btn btn-outline-cavitur-green btn-lg px-4 py-3 rounded-pill fw-bold">
                Conocer Más
              </a>
            </div>

            <!-- Mini stats -->
            <div class="row g-3 pt-3 border-top">
              <div class="col-4">
                <h5 class="fw-bold text-cavitur-orange mb-0">+500</h5>
                <small class="text-muted">Rutas & GDS</small>
              </div>
              <div class="col-4">
                <h5 class="fw-bold text-cavitur-orange mb-0">100%</h5>
                <small class="text-muted">Apoyo B2B</small>
              </div>
              <div class="col-4">
                <h5 class="fw-bold text-cavitur-orange mb-0">24/7</h5>
                <small class="text-muted">Acompañamiento</small>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="hero-banner-card p-4 rounded-4 shadow-lg position-relative text-white overflow-hidden">
              <div class="banner-overlay"></div>
              <div class="position-relative z-1 p-md-3">
                <span class="badge bg-white text-dark-green fw-bold px-3 py-2 rounded-pill mb-3">
                  <i class="bi bi-globe-americas me-1 text-cavitur-orange"></i> RED COLABORATIVA
                </span>
                <h3 class="fw-bold mb-3">Conéctate. Colabora. Crece con CAVITUR.</h3>
                <p class="text-white-50 small mb-4">
                  Accede a la plataforma que centraliza negociaciones hoteleras, boletos aéreos, circuitos internacionales y capacitaciones de alto nivel.
                </p>
                <div class="p-3 bg-dark-glass rounded-3 border border-white-10">
                  <div class="d-flex align-items-center gap-3">
                    <div class="icon-circle bg-cavitur-orange text-white">
                      <i class="bi bi-bell-fill"></i>
                    </div>
                    <div>
                      <h6 class="mb-0 fw-bold">Activa Notificaciones y Novedades</h6>
                      <small class="text-white-50">Sé de los primeros en acceder a los cupos de consolidación.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4 PILARES DESTACADOS (DE LA IMAGEN DE MARCA) -->
    <section id="pilares" class="py-5 bg-cavitur-dark-green text-white">
      <div class="container py-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="text-cavitur-orange text-uppercase fw-bold letter-spacing-2 small">Ventajas Exclusivas</span>
          <h2 class="display-6 fw-bold mt-2">¿Por qué unirte a la red CAVITUR?</h2>
          <p class="text-white-50">Diseñado a la medida tanto para agencias consolidadas como para agentes independientes.</p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="pilar-card p-4 rounded-4 h-100 text-center">
              <div class="pilar-icon mx-auto mb-3">
                <i class="bi bi-briefcase-fill"></i>
              </div>
              <h5 class="fw-bold mb-2">Mayor Conectividad</h5>
              <p class="text-white-50 small mb-0">Integración ágil con consolidadores globales, inventario aéreo y plataformas de emisión en tiempo real.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="pilar-card p-4 rounded-4 h-100 text-center">
              <div class="pilar-icon mx-auto mb-3">
                <i class="bi bi-globe"></i>
              </div>
              <h5 class="fw-bold mb-2">Alianzas Estratégicas</h5>
              <p class="text-white-50 small mb-0">Convenios mayoristas con operadores y cadenas hoteleras que garantizan mejores márgenes de comisión.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="pilar-card p-4 rounded-4 h-100 text-center">
              <div class="pilar-icon mx-auto mb-3">
                <i class="bi bi-people-fill"></i>
              </div>
              <h5 class="fw-bold mb-2">Apoyo para tu Crecimiento</h5>
              <p class="text-white-50 small mb-0">Capacitaciones continuas, soporte en cotizaciones complejas y mentoría de desarrollo de negocio.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="pilar-card p-4 rounded-4 h-100 text-center">
              <div class="pilar-icon mx-auto mb-3">
                <i class="bi bi-send-fill"></i>
              </div>
              <h5 class="fw-bold mb-2">Más Oportunidades para Viajar</h5>
              <p class="text-white-50 small mb-0">Tarifas preferenciales para tus clientes y acceso a viajes de familiarización (FAM Trips) para agentes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MISIÓN, VISIÓN & VALORES (TAB DINÁMICO) -->
    <section id="nosotros" class="py-5 bg-cream">
      <div class="container py-lg-4">
        <div class="row align-items-center gy-5">
          
          <div class="col-lg-5">
            <span class="badge bg-cavitur-green text-white px-3 py-2 rounded-pill mb-3">QUIÉNES SOMOS</span>
            <h2 class="display-6 fw-bold text-dark-green mb-4">El aliado estratégico que transforma el negocio turístico</h2>
            <p class="text-muted mb-4">
              En <strong>CAVITUR</strong> nacemos de la convicción de que las agencias y los agentes freelance alcanzan su máximo potencial cuando cuentan con una infraestructura sólida, respaldo operativo y acceso directo a las mejores condiciones del mercado.
            </p>
            
            <!-- Botones interactivos de pestañas -->
            <div class="d-flex gap-2 p-1 bg-white rounded-pill shadow-sm border mb-4">
              <button 
                class="btn rounded-pill flex-fill fw-bold btn-sm py-2"
                :class="activeTab === 'mision' ? 'btn-cavitur-green' : 'btn-light text-muted'"
                @click="activeTab = 'mision'"
              >
                Misión
              </button>
              <button 
                class="btn rounded-pill flex-fill fw-bold btn-sm py-2"
                :class="activeTab === 'vision' ? 'btn-cavitur-green' : 'btn-light text-muted'"
                @click="activeTab = 'vision'"
              >
                Visión
              </button>
              <button 
                class="btn rounded-pill flex-fill fw-bold btn-sm py-2"
                :class="activeTab === 'valores' ? 'btn-cavitur-green' : 'btn-light text-muted'"
                @click="activeTab = 'valores'"
              >
                Valores
              </button>
            </div>

            <a href="#contacto" class="btn btn-cavitur-orange px-4 py-2 rounded-pill fw-bold">
              Quiero afiliarme ahora
            </a>
          </div>

          <div class="col-lg-6 offset-lg-1">
            <!-- TARJETA CONTENEDORA DE MISIÓN / VISIÓN -->
            <div class="card border-0 shadow-sm p-4 p-md-5 rounded-4 bg-white position-relative">
              
              <!-- Pestaña Misión -->
              <div v-if="activeTab === 'mision'" class="tab-fade">
                <div class="icon-box-large bg-cavitur-green-subtle text-cavitur-green mb-3">
                  <i class="bi bi-bullseye fs-2"></i>
                </div>
                <h3 class="h4 fw-bold text-dark-green mb-3">Nuestra Misión</h3>
                <p class="text-muted leading-relaxed mb-4">
                  Empoderar, conectar y respaldar a agencias de viajes y asesores turísticos independientes mediante soluciones comerciales de alta conectividad, consolidación de tarifas y un ecosistema colaborativo que impulse su rentabilidad y competitividad global.
                </p>
                <ul class="list-unstyled text-muted small d-flex flex-column gap-2 mb-0">
                  <li><i class="bi bi-check-circle-fill text-cavitur-orange me-2"></i>Acceso sin barreras a inventario global de vuelos y hoteles.</li>
                  <li><i class="bi bi-check-circle-fill text-cavitur-orange me-2"></i>Optimización de tiempos en cotización y emisión.</li>
                  <li><i class="bi bi-check-circle-fill text-cavitur-orange me-2"></i>Soporte continuo y transparente para cada miembro.</li>
                </ul>
              </div>

              <!-- Pestaña Visión -->
              <div v-if="activeTab === 'vision'" class="tab-fade">
                <div class="icon-box-large bg-cavitur-orange-subtle text-cavitur-orange mb-3">
                  <i class="bi bi-eye-fill fs-2"></i>
                </div>
                <h3 class="h4 fw-bold text-dark-green mb-3">Nuestra Visión</h3>
                <p class="text-muted leading-relaxed mb-4">
                  Consolidarnos como el centro aliado y la comunidad de referencia más influyente de la industria turística en la región, reconocidos por liderar la transformación digital del sector y por crear oportunidades de negocio sostenibles para cada aliado.
                </p>
                <ul class="list-unstyled text-muted small d-flex flex-column gap-2 mb-0">
                  <li><i class="bi bi-check-circle-fill text-cavitur-green me-2"></i>Expansión continua de acuerdos y convenios B2B internacionales.</li>
                  <li><i class="bi bi-check-circle-fill text-cavitur-green me-2"></i>Innovación en herramientas tecnológicas para agentes.</li>
                  <li><i class="bi bi-check-circle-fill text-cavitur-green me-2"></i>Liderazgo ético y profesional en el mercado de viajes.</li>
                </ul>
              </div>

              <!-- Pestaña Valores -->
              <div v-if="activeTab === 'valores'" class="tab-fade">
                <div class="icon-box-large bg-cavitur-green-subtle text-cavitur-green mb-3">
                  <i class="bi bi-shield-shaded fs-2"></i>
                </div>
                <h3 class="h4 fw-bold text-dark-green mb-3">Nuestros Valores</h3>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <h6 class="fw-bold text-dark-green mb-1"><i class="bi bi-arrow-repeat text-cavitur-orange me-1"></i> Sinergia</h6>
                    <p class="text-muted small mb-0">Crecemos juntos sumando esfuerzos y compartiendo oportunidades.</p>
                  </div>
                  <div class="col-sm-6">
                    <h6 class="fw-bold text-dark-green mb-1"><i class="bi bi-check2-all text-cavitur-orange me-1"></i> Transparencia</h6>
                    <p class="text-muted small mb-0">Claridad en comisiones, liquidaciones y acuerdos comerciales.</p>
                  </div>
                  <div class="col-sm-6">
                    <h6 class="fw-bold text-dark-green mb-1"><i class="bi bi-lightbulb text-cavitur-orange me-1"></i> Innovación</h6>
                    <p class="text-muted small mb-0">Tecnología ágil al servicio del asesor turístico moderno.</p>
                  </div>
                  <div class="col-sm-6">
                    <h6 class="fw-bold text-dark-green mb-1"><i class="bi bi-heart text-cavitur-orange me-1"></i> Compromiso</h6>
                    <p class="text-muted small mb-0">Dedicación total al éxito y respaldo de cada aliado.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SERVICIOS PARA AGENCIAS Y FREELANCERS -->
    <section id="servicios" class="py-5">
      <div class="container py-lg-4">
        <div class="text-center max-w-700 mx-auto mb-5">
          <span class="text-cavitur-orange text-uppercase fw-bold letter-spacing-2 small">Portafolio de Soluciones</span>
          <h2 class="display-6 fw-bold text-dark-green mt-2">Herramientas que impulsan tus ventas</h2>
          <p class="text-muted">Todo lo que necesitas para operar tu negocio de viajes con nivel mayorista.</p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="service-card p-4 rounded-4 border h-100">
              <div class="service-icon mb-3">
                <i class="bi bi-ticket-perforated-fill"></i>
              </div>
              <h5 class="fw-bold text-dark-green mb-2">Consolidación Aérea</h5>
              <p class="text-muted small mb-3">Emisión inmediata y soporte en cambios, cancelaciones y reemisiones con las principales aerolíneas del mundo.</p>
              <span class="badge bg-cream text-dark-green border fw-semibold">GDS & NDC Ready</span>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="service-card p-4 rounded-4 border h-100">
              <div class="service-icon mb-3">
                <i class="bi bi-building"></i>
              </div>
              <h5 class="fw-bold text-dark-green mb-2">Hotelería & Circuitos</h5>
              <p class="text-muted small mb-3">Inventario directo en más de 300,000 hoteles globales y paquetes turísticos organizados con operadores de primer nivel.</p>
              <span class="badge bg-cream text-dark-green border fw-semibold">Tarifas Netas B2B</span>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="service-card p-4 rounded-4 border h-100">
              <div class="service-icon mb-3">
                <i class="bi bi-shield-check"></i>
              </div>
              <h5 class="fw-bold text-dark-green mb-2">Asistencia al Viajero</h5>
              <p class="text-muted small mb-3">Planes de cobertura médica internacional con comisiones preferenciales y emisión al instante para tus pasajeros.</p>
              <span class="badge bg-cream text-dark-green border fw-semibold">Cobertura Global</span>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="service-card p-4 rounded-4 border h-100">
              <div class="service-icon mb-3">
                <i class="bi bi-mortarboard-fill"></i>
              </div>
              <h5 class="fw-bold text-dark-green mb-2">Academia CAVITUR</h5>
              <p class="text-muted small mb-3">Webinars semanales, certificaciones de destino y talleres prácticos de ventas digitales para agentes de viajes.</p>
              <span class="badge bg-cream text-dark-green border fw-semibold">Capacitación Continua</span>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="service-card p-4 rounded-4 border h-100">
              <div class="service-icon mb-3">
                <i class="bi bi-laptop"></i>
              </div>
              <h5 class="fw-bold text-dark-green mb-2">Herramientas Digitales</h5>
              <p class="text-muted small mb-3">Acceso a cotizadores rápidos, plantillas de itinerarios y recursos de marketing listos para personalizar con tu marca.</p>
              <span class="badge bg-cream text-dark-green border fw-semibold">Marketing Kit</span>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="service-card p-4 rounded-4 border h-100">
              <div class="service-icon mb-3">
                <i class="bi bi-headset"></i>
              </div>
              <h5 class="fw-bold text-dark-green mb-2">Mesa de Ayuda B2B</h5>
              <p class="text-muted small mb-3">Un equipo de ejecutivos expertos listo para resolver cotizaciones de grupos, charters y requerimientos especiales.</p>
              <span class="badge bg-cream text-dark-green border fw-semibold">Atención Personalizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN DE BLOG -->
    <section id="blog" class="py-5 bg-cream">
      <div class="container py-lg-4">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
          <div>
            <span class="text-cavitur-orange text-uppercase fw-bold letter-spacing-2 small">ACTUALIDAD & CONSEJOS</span>
            <h2 class="display-6 fw-bold text-dark-green mt-1 mb-0">Blog del Agente Turístico</h2>
          </div>
          
          <!-- Filtro por categoría -->
          <div class="d-flex flex-wrap gap-2 mt-3 mt-md-0">
            <button 
              v-for="cat in categoriasBlog" 
              :key="cat"
              class="btn btn-sm rounded-pill px-3 fw-semibold"
              :class="selectedCategory === cat ? 'btn-cavitur-green' : 'btn-outline-secondary bg-white'"
              @click="selectedCategory = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div class="row g-4">
          <div v-for="post in filteredPosts" :key="post.id" class="col-md-6 col-lg-4">
            <article class="card border-0 shadow-sm rounded-4 overflow-hidden h-100 blog-card">
              <div class="blog-img-box">
                <img :src="post.imagen" :alt="post.titulo" class="w-100 h-100 object-fit-cover" />
                <span class="badge bg-cavitur-orange position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">
                  {{ post.categoria }}
                </span>
              </div>
              <div class="card-body p-4 d-flex flex-column">
                <div class="d-flex justify-content-between text-muted small mb-2">
                  <span><i class="bi bi-calendar3 me-1"></i> {{ post.fecha }}</span>
                  <span><i class="bi bi-clock me-1"></i> {{ post.tiempoLectura }}</span>
                </div>
                <h5 class="fw-bold text-dark-green mb-2">{{ post.titulo }}</h5>
                <p class="text-muted small mb-4 flex-grow-1">{{ post.resumen }}</p>
                <a href="#contacto" class="text-cavitur-green fw-bold text-decoration-none small hover-orange mt-auto">
                  Leer Artículo Completo <i class="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- FORMULARIO DE CONTACTO / AFILIACIÓN -->
    <section id="contacto" class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="row gy-5 align-items-center">
          
          <div class="col-lg-5">
            <span class="badge bg-cavitur-orange text-white px-3 py-2 rounded-pill mb-3">CONTÁCTANOS</span>
            <h2 class="display-6 fw-bold text-dark-green mb-3">Da el siguiente paso junto a CAVITUR</h2>
            <p class="text-muted mb-4">
              Completa tus datos para recibir la propuesta de afiliación, catálogo de servicios y comenzar a operar con las mejores condiciones del sector.
            </p>

            <div class="d-flex flex-column gap-3 mb-4">
              <div class="d-flex align-items-center gap-3 p-3 bg-cream rounded-3 border">
                <div class="icon-circle bg-cavitur-green text-white">
                  <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h6 class="fw-bold text-dark-green mb-0">Sede Principal</h6>
                  <small class="text-muted">Centro Corporativo Turístico, Piso 4</small>
                </div>
              </div>

              <div class="d-flex align-items-center gap-3 p-3 bg-cream rounded-3 border">
                <div class="icon-circle bg-cavitur-green text-white">
                  <i class="bi bi-whatsapp"></i>
                </div>
                <div>
                  <h6 class="fw-bold text-dark-green mb-0">Atención Directa</h6>
                  <small class="text-muted">+58 (412) 000-0000 / contacto@cavitur.com</small>
                </div>
              </div>

              <div class="d-flex align-items-center gap-3 p-3 bg-cream rounded-3 border">
                <div class="icon-circle bg-cavitur-green text-white">
                  <i class="bi bi-clock-history"></i>
                </div>
                <div>
                  <h6 class="fw-bold text-dark-green mb-0">Horario de Soporte B2B</h6>
                  <small class="text-muted">Lunes a Viernes: 8:30 AM – 6:00 PM</small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="card border-0 shadow-lg p-4 p-md-5 rounded-4 bg-cream">
              <h3 class="h4 fw-bold text-dark-green mb-2">Solicitud de Afiliación & Alianza</h3>
              <p class="text-muted small mb-4">Completa el formulario y un asesor B2B se comunicará contigo.</p>

              <!-- Alerta de éxito -->
              <div v-if="formSubmitted" class="alert alert-success d-flex align-items-center gap-2 rounded-3 mb-4" role="alert">
                <i class="bi bi-check-circle-fill fs-5"></i>
                <div>¡Gracias por tu interés! Hemos recibido tus datos y te contactaremos en breve por WhatsApp o Correo.</div>
              </div>

              <form @submit.prevent="handleSubmit">
                <div class="row g-3">
                  
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-dark-green">Nombre Completo</label>
                    <input 
                      v-model="formData.nombre" 
                      type="text" 
                      class="form-control bg-white rounded-3 py-2" 
                      placeholder="Ej. Carlos Mendoza" 
                      required 
                    />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-dark-green">Correo Electrónico</label>
                    <input 
                      v-model="formData.email" 
                      type="email" 
                      class="form-control bg-white rounded-3 py-2" 
                      placeholder="carlos@agenciadeviajes.com" 
                      required 
                    />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-dark-green">Teléfono / WhatsApp</label>
                    <input 
                      v-model="formData.telefono" 
                      type="tel" 
                      class="form-control bg-white rounded-3 py-2" 
                      placeholder="+58 412 1234567" 
                      required 
                    />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-dark-green">Tipo de Perfil</label>
                    <select v-model="formData.tipoPerfil" class="form-select bg-white rounded-3 py-2">
                      <option>Freelance de Viajes</option>
                      <option>Agencia de Viajes Establecida</option>
                      <option>Operador Turístico</option>
                      <option>Asesor Independiente en Formación</option>
                    </select>
                  </div>

                  <div class="col-12">
                    <label class="form-label small fw-bold text-dark-green">¿Cómo te gustaría colaborar con Cavitur?</label>
                    <textarea 
                      v-model="formData.mensaje" 
                      rows="3" 
                      class="form-control bg-white rounded-3" 
                      placeholder="Cuéntanos sobre tu volumen de ventas o qué servicios requieres consolidar..."
                      required
                    ></textarea>
                  </div>

                  <div class="col-12 mt-4">
                    <button type="submit" class="btn btn-cavitur-orange w-100 py-3 rounded-pill fw-bold fs-6 shadow-sm">
                      Enviar Solicitud de Alianza <i class="bi bi-send ms-2"></i>
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-cavitur-dark-green text-white pt-5 pb-3">
      <div class="container">
        <div class="row gy-4 mb-4">
          <div class="col-lg-4">
            <div class="logo-wrapper mb-3">
              <span class="logo-text-c text-white">C</span>
              <span class="logo-text-a text-white">A</span>
              <span class="logo-text-v">V<span class="plane-tail"><i class="bi bi-airplane-fill"></i></span></span>
              <span class="logo-text-rest text-white">ITUR</span>
            </div>
            <p class="text-white-50 small mb-3">
              Centro aliado para agencias de viajes y asesores turísticos independientes. Impulsamos tu conectividad, alianzas comerciales y rentabilidad.
            </p>
            <div class="d-flex gap-3">
              <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
              <a href="#" class="social-link"><i class="bi bi-facebook"></i></a>
              <a href="#" class="social-link"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="social-link"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>

          <div class="col-6 col-lg-2 offset-lg-1">
            <h6 class="fw-bold mb-3 text-cavitur-orange">Navegación</h6>
            <ul class="list-unstyled d-flex flex-column gap-2 small">
              <li><a href="#inicio" class="footer-link">Inicio</a></li>
              <li><a href="#nosotros" class="footer-link">Misión & Visión</a></li>
              <li><a href="#pilares" class="footer-link">Beneficios</a></li>
              <li><a href="#servicios" class="footer-link">Servicios</a></li>
              <li><a href="#blog" class="footer-link">Blog</a></li>
            </ul>
          </div>

          <div class="col-6 col-lg-2">
            <h6 class="fw-bold mb-3 text-cavitur-orange">Soluciones</h6>
            <ul class="list-unstyled d-flex flex-column gap-2 small">
              <li><a href="#servicios" class="footer-link">Consolidación Aérea</a></li>
              <li><a href="#servicios" class="footer-link">Hoteles & Paquetes</a></li>
              <li><a href="#servicios" class="footer-link">Seguros de Viaje</a></li>
              <li><a href="#servicios" class="footer-link">Academia CAVITUR</a></li>
            </ul>
          </div>

          <div class="col-lg-3">
            <h6 class="fw-bold mb-3 text-cavitur-orange">Comunidad</h6>
            <p class="text-white-50 small mb-2">Conéctate. Colabora. Crece con CAVITUR.</p>
            <span class="badge bg-cavitur-orange text-white px-3 py-2 rounded-pill">
              #RedCavitur2026
            </span>
          </div>
        </div>

        <hr class="border-secondary opacity-25" />

        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50 pt-2">
          <p class="mb-2 mb-md-0">&copy; 2026 CAVITUR. Todos los derechos reservados.</p>
          <div>
            <a href="#" class="footer-link me-3">Términos B2B</a>
            <a href="#" class="footer-link">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* VARIABLES DE COLOR Y MARCA */
:root {
  --cavitur-green: #48562B;
  --cavitur-dark-green: #1F2613;
  --cavitur-light-green: #60713A;
  --cavitur-orange: #E55920;
  --cavitur-cream: #F8F6F0;
}

.cavitur-app {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #1F2613;
  background-color: #FFFFFF;
}

/* COLORES PERSONALIZADOS */
.bg-cavitur-green { background-color: #48562B !important; }
.bg-cavitur-dark-green { background-color: #1F2613 !important; }
.bg-cavitur-orange { background-color: #E55920 !important; }
.bg-cream { background-color: #F8F6F0 !important; }
.bg-cavitur-green-subtle { background-color: #EBF0E1 !important; }
.bg-cavitur-orange-subtle { background-color: #FDF0E9 !important; }

.text-dark-green { color: #1F2613 !important; }
.text-cavitur-green { color: #48562B !important; }
.text-cavitur-orange { color: #E55920 !important; }

.border-cavitur-green-subtle { border-color: rgba(72, 86, 43, 0.2) !important; }
.letter-spacing-2 { letter-spacing: 2px; }
.fw-extrabold { font-weight: 800; }
.max-w-700 { max-width: 700px; }

/* LOGO VECTORIAL CAVITUR */
.logo-wrapper {
  font-family: 'Syne', sans-serif;
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
}

.logo-text-c, .logo-text-a, .logo-text-rest {
  color: #48562B;
}

.logo-text-v {
  color: #E55920;
  position: relative;
  display: inline-block;
  margin: 0 1px;
}

.plane-tail {
  position: absolute;
  top: -10px;
  right: -8px;
  font-size: 0.75rem;
  color: #48562B;
  transform: rotate(45deg);
}

/* BOTONES */
.btn-cavitur-green {
  background-color: #48562B;
  color: #FFFFFF;
  border: none;
  transition: all 0.3s ease;
}
.btn-cavitur-green:hover {
  background-color: #384321;
  color: #FFFFFF;
  transform: translateY(-2px);
}

.btn-outline-cavitur-green {
  border: 2px solid #48562B;
  color: #48562B;
  background: transparent;
  transition: all 0.3s ease;
}
.btn-outline-cavitur-green:hover {
  background-color: #48562B;
  color: #FFFFFF;
}

.btn-cavitur-orange {
  background-color: #E55920;
  color: #FFFFFF;
  border: none;
  transition: all 0.3s ease;
}
.btn-cavitur-orange:hover {
  background-color: #CC4D17;
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(229, 89, 32, 0.3);
}

/* HERO BANNER CARD */
.hero-banner-card {
  background-color: #1F2613;
  min-height: 380px;
  display: flex;
  align-items: center;
}

.banner-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at top right, rgba(229, 89, 32, 0.25), transparent 60%);
}

.bg-dark-glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}

.border-white-10 {
  border-color: rgba(255, 255, 255, 0.1) !important;
}

/* PILARES */
.pilar-card {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
.pilar-card:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
  border-color: #E55920;
}

.pilar-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #48562B;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

/* SERVICIOS */
.service-card {
  background-color: #FFFFFF;
  transition: all 0.3s ease;
}
.service-card:hover {
  border-color: #48562B !important;
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(31, 38, 19, 0.06);
}

.service-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background-color: #F8F6F0;
  color: #E55920;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

/* BLOG */
.blog-card {
  transition: all 0.3s ease;
}
.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08) !important;
}

.blog-img-box {
  height: 200px;
  position: relative;
  overflow: hidden;
}

/* ICON CIRCLE & BOX */
.icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.icon-box-large {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ANIMACIONES */
.tab-fade {
  animation: fadeIn 0.35s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* FOOTER LINKS */
.footer-link {
  color: #A4B296;
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-link:hover, .hover-orange:hover {
  color: #E55920 !important;
}

.social-link {
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.1);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
}
.social-link:hover {
  background-color: #E55920;
  color: #FFFFFF;
}
</style>