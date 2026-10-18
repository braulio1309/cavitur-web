<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCourses, type Course } from '../services/courses'

const emit = defineEmits<{ openCourse: [id: string] }>()

const courses = ref<Course[]>([])
const isLoading = ref(true)
const error = ref('')

async function loadCourses() {
  isLoading.value = true
  error.value = ''

  try {
    courses.value = await getCourses()
  } catch (requestError) {
    courses.value = []
    error.value = requestError instanceof Error ? requestError.message : 'No fue posible cargar los cursos.'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => void loadCourses())
</script>

<template>
  <main class="courses-page">
    <section class="courses-hero">
      <div class="container py-5">
        <a href="#inicio" class="courses-back-link"><i class="bi bi-arrow-left me-2"></i>Inicio</a>
        <div class="courses-hero-copy">
          <span class="courses-eyebrow">FORMACIÓN CAVITUR</span>
          <h1>Aprende. Crece.<br /><span>Avanza.</span></h1>
          <p>Conocimiento práctico para impulsar tu camino en el turismo.</p>
        </div>
        <div class="courses-hero-mark" aria-hidden="true"><i class="bi bi-play-circle"></i></div>
      </div>
    </section>

    <section class="container courses-content">
      <div class="courses-heading">
        <div>
          <span class="courses-eyebrow">A TU RITMO</span>
          <h2>Explora nuestros cursos</h2>
        </div>
        <span v-if="!isLoading && !error" class="courses-count">{{ courses.length }} {{ courses.length === 1 ? 'curso' : 'cursos' }}</span>
      </div>

      <div v-if="isLoading" class="courses-state" role="status">
        <span class="spinner-border spinner-border-sm me-2"></span>Cargando cursos...
      </div>
      <div v-else-if="error" class="alert alert-warning courses-alert" role="alert">
        {{ error }}
        <button class="btn btn-sm btn-outline-cavitur-green ms-2" @click="loadCourses">Reintentar</button>
      </div>
      <div v-else-if="!courses.length" class="courses-state">
        <i class="bi bi-journal-bookmark courses-empty-icon"></i>
        <p class="mb-0">Pronto encontrarás nuevos cursos aquí.</p>
      </div>
      <div v-else class="row g-4">
        <div v-for="course in courses" :key="course.id" class="col-md-6 col-lg-4">
          <article class="card course-card border-0 h-100">
            <div class="course-card-image">
              <img v-if="course.imageUrl" :src="course.imageUrl" :alt="course.title" loading="lazy" />
              <div v-else class="course-image-placeholder"><i class="bi bi-play-circle"></i></div>
              <span class="course-image-label"><i class="bi bi-play-fill me-1"></i>Curso</span>
            </div>
            <div class="card-body p-4 d-flex flex-column">
              <h3>{{ course.title }}</h3>
              <p class="course-card-description">{{ course.description }}</p>
              <button class="course-open-link mt-auto" @click="emit('openCourse', String(course.id))">
                Ver curso <i class="bi bi-arrow-up-right ms-2"></i>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
