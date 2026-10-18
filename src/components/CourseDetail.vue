<script setup lang="ts">
import { ref, watch } from 'vue'
import { getCourse, type Course } from '../services/courses'

const props = defineProps<{ id: string }>()
const emit = defineEmits<{ close: [] }>()

const course = ref<Course | null>(null)
const isLoading = ref(true)
const error = ref('')

async function loadCourse(id: string) {
  isLoading.value = true
  error.value = ''
  course.value = null

  try {
    course.value = await getCourse(id)
  } catch (requestError) {
    error.value = requestError instanceof Error ? requestError.message : 'No fue posible cargar el curso.'
  } finally {
    isLoading.value = false
  }
}

watch(() => props.id, loadCourse, { immediate: true })
</script>

<template>
  <main class="course-detail-page">
    <header class="course-detail-header">
      <div class="container">
        <button class="course-back-button" @click="emit('close')">
          <i class="bi bi-arrow-left me-2"></i>Volver a cursos
        </button>
      </div>
    </header>

    <section v-if="isLoading" class="container course-detail-state" role="status">
      <span class="spinner-border spinner-border-sm me-2"></span>Cargando curso...
    </section>

    <section v-else-if="error" class="container course-detail-state">
      <div class="alert alert-warning" role="alert">
        {{ error }}
        <button class="btn btn-sm btn-outline-secondary ms-2" @click="loadCourse(id)">Reintentar</button>
      </div>
    </section>

    <article v-else-if="course" class="container course-detail-content">
      <span class="courses-eyebrow">CURSO CAVITUR</span>
      <h1>{{ course.title }}</h1>
      <p v-if="course.description" class="course-detail-description">{{ course.description }}</p>

      <div v-if="course.embedUrl" class="course-video-frame">
        <iframe
          :src="course.embedUrl"
          :title="`Video del curso: ${course.title}`"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div v-else class="course-video-missing">
        <i class="bi bi-camera-video"></i>
        <p class="mb-0">El video de este curso no está disponible por el momento.</p>
      </div>

      <a v-if="course.url" :href="course.url" target="_blank" rel="noopener noreferrer" class="course-external-link">
        Abrir video en Google Drive <i class="bi bi-box-arrow-up-right ms-2"></i>
      </a>
    </article>
  </main>
</template>
