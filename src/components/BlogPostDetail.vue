<script setup lang="ts">
import { ref, watch } from 'vue'
import { getPost, type BlogPostDetail } from '../services/blog'

const props = defineProps<{ slug: string }>()
const emit = defineEmits<{ close: [] }>()

const post = ref<BlogPostDetail | null>(null)
const isLoading = ref(true)
const error = ref('')

function formatDate(date: string | null) {
  if (!date) return ''
  const parsedDate = new Date(date)
  return Number.isNaN(parsedDate.getTime())
    ? date
    : new Intl.DateTimeFormat('es-VE', { day: 'numeric', month: 'long', year: 'numeric' }).format(parsedDate)
}

async function loadPost(slug: string) {
  isLoading.value = true
  error.value = ''
  post.value = null

  try {
    post.value = await getPost(slug)
  } catch (requestError) {
    error.value = requestError instanceof Error ? requestError.message : 'No fue posible cargar el artículo.'
  } finally {
    isLoading.value = false
  }
}

watch(() => props.slug, loadPost, { immediate: true })
</script>

<template>
  <main class="blog-detail bg-cream min-vh-100">
    <header class="bg-white border-bottom py-3">
      <div class="container">
        <button class="btn btn-outline-cavitur-green" @click="emit('close')">
          <i class="bi bi-arrow-left me-2"></i>Volver al blog
        </button>
      </div>
    </header>

    <section v-if="isLoading" class="container py-5 text-center text-muted">
      <span class="spinner-border me-2" role="status"></span>Cargando artículo...
    </section>

    <section v-else-if="error" class="container py-5">
      <div class="alert alert-warning mb-0" role="alert">
        {{ error }}
        <button class="btn btn-sm btn-outline-secondary ms-2" @click="loadPost(slug)">Reintentar</button>
      </div>
    </section>

    <article v-else-if="post" class="container py-5">
      <div class="detail-content mx-auto">
        <span v-if="post.category" class="badge bg-cavitur-orange px-3 py-2 mb-3">{{ post.category.name }}</span>
        <h1 class="display-5 fw-bold text-dark-green mb-3">{{ post.title }}</h1>
        <div class="d-flex flex-wrap gap-3 text-muted small mb-4">
          <span v-if="post.publishedAt"><i class="bi bi-calendar3 me-1"></i>{{ formatDate(post.publishedAt) }}</span>
          <span v-if="post.readingTime"><i class="bi bi-clock me-1"></i>{{ post.readingTime }}</span>
        </div>
        <img v-if="post.image" :src="post.image" :alt="post.title" class="detail-image w-100 mb-4" />
        <p v-if="post.excerpt" class="lead text-muted mb-4">{{ post.excerpt }}</p>
        <div class="article-html" v-html="post.content"></div>
      </div>
    </article>
  </main>
</template>

