<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

function closeMenuOnMobileScroll() {
  if (window.innerWidth >= 992) return

  const menu = document.getElementById('navMenu')
  const toggler = document.querySelector<HTMLElement>('.navbar-toggler')
  if (menu?.classList.contains('show')) toggler?.click()
}

onMounted(() => window.addEventListener('scroll', closeMenuOnMobileScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', closeMenuOnMobileScroll))
</script>

<template>
  <header class="top-announcement py-2 text-white">
    <div class="container d-flex justify-content-end align-items-center small">
      <a href="https://wa.me/584241692148" target="_blank" rel="noopener noreferrer" class="text-white text-decoration-none hover-orange"><i class="bi bi-whatsapp text-success me-1"></i> Soporte Aliados</a>
    </div>
  </header>
  <nav class="navbar navbar-expand-lg sticky-top bg-white border-bottom py-3">
    <div class="container">
      <a class="navbar-brand d-flex flex-column align-items-start gap-0" href="#inicio"><img src="/cavitur-logo1.png" alt="CAVITUR" class="brand-logo" /><span class="brand-subtitle">Centro aliado de viajes y turismo</span></a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto me-lg-4 mb-2 mb-lg-0 gap-lg-3 fw-medium">
          <li class="nav-item"><a class="nav-link text-dark-green" href="#inicio">Inicio</a></li><li class="nav-item"><a class="nav-link text-dark-green" href="#nosotros">Misión & Visión</a></li><li class="nav-item"><a class="nav-link text-dark-green" href="#pilares">Beneficios</a></li><li class="nav-item"><a class="nav-link text-dark-green" href="#servicios">Servicios</a></li><li class="nav-item"><a class="nav-link text-dark-green" href="#blog">Blog</a></li><li class="nav-item"><a class="nav-link text-dark-green" href="#contacto">Contacto</a></li><li class="nav-item"><a class="nav-link text-dark-green" href="https://ovic.cavitur.com" target="_blank" rel="noopener noreferrer">OVIC</a></li>
        </ul>
        <a href="#contacto" class="btn btn-cavitur-orange px-4 py-2 rounded-pill fw-bold"><i class="bi bi-person-plus me-1"></i> Únete como Aliado</a>
      </div>
    </div>
  </nav>
</template>