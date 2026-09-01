<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import BlogPostDetail from './components/BlogPostDetail.vue'
import BlogSection from './components/BlogSection.vue'
import ContactSection from './components/ContactSection.vue'
import HomeSections from './components/HomeSections.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

const currentPostSlug = ref<string | null>(null)

function syncPostRoute() {
  const match = window.location.hash.match(/^#\/blog\/([^/]+)$/)
  currentPostSlug.value = match?.[1] ? decodeURIComponent(match[1]) : null
}

function openPost(slug: string) {
  window.location.hash = `/blog/${encodeURIComponent(slug)}`
}

function closePost() {
  window.location.hash = 'blog'
}

onMounted(() => {
  syncPostRoute()
  window.addEventListener('hashchange', syncPostRoute)
})

onUnmounted(() => window.removeEventListener('hashchange', syncPostRoute))
</script>

<template>
  <BlogPostDetail v-if="currentPostSlug" :slug="currentPostSlug" @close="closePost" />
  <div v-else class="cavitur-app">
    <SiteHeader />
    <main>
      <HomeSections />
      <AboutSection />
      <BlogSection @open-post="openPost" />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>