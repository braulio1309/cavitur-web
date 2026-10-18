<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import AboutSection from './components/AboutSection.vue'
import CourseDetail from './components/CourseDetail.vue'
import CoursesPage from './components/CoursesPage.vue'
import BlogPostDetail from './components/BlogPostDetail.vue'
import BlogSection from './components/BlogSection.vue'
import ContactSection from './components/ContactSection.vue'
import HomeSections from './components/HomeSections.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'

const currentPostSlug = ref<string | null>(null)
const currentCourseId = ref<string | null>(null)
const isCoursesPage = ref(false)

function syncRoute() {
  const match = window.location.hash.match(/^#\/blog\/([^/]+)$/)
  currentPostSlug.value = match?.[1] ? decodeURIComponent(match[1]) : null
  const courseMatch = window.location.hash.match(/^#\/cursos(?:\/([^/]+))?$/)
  isCoursesPage.value = Boolean(courseMatch)
  currentCourseId.value = courseMatch?.[1] ? decodeURIComponent(courseMatch[1]) : null
  if (courseMatch) window.scrollTo(0, 0)
}

function openPost(slug: string) {
  window.location.hash = `/blog/${encodeURIComponent(slug)}`
}

function closePost() {
  window.location.hash = 'blog'
}

function openCourse(id: string) {
  window.location.hash = `/cursos/${encodeURIComponent(id)}`
}

function closeCourse() {
  window.location.hash = '/cursos'
}

onMounted(() => {
  syncRoute()
  window.addEventListener('hashchange', syncRoute)
})

onUnmounted(() => window.removeEventListener('hashchange', syncRoute))
</script>

<template>
  <BlogPostDetail v-if="currentPostSlug" :slug="currentPostSlug" @close="closePost" />
  <div v-else-if="isCoursesPage" class="cavitur-app">
    <SiteHeader />
    <CourseDetail v-if="currentCourseId" :id="currentCourseId" @close="closeCourse" />
    <CoursesPage v-else @open-course="openCourse" />
    <SiteFooter />
  </div>
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