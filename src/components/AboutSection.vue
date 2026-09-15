<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'mision' | 'vision' | 'valores'>('mision')
</script>

<template>
  <section id="nosotros" class="py-5 bg-cream">
    <div class="container py-lg-4">
      <div class="row align-items-center gy-5">
        <div class="col-lg-5">
          <span class="badge bg-cavitur-green text-white px-3 py-2 rounded-pill mb-3">QUIÉNES SOMOS</span>
          <h2 class="display-6 fw-bold text-dark-green mb-4">El aliado estratégico que transforma el negocio turístico</h2>
          <p class="text-muted mb-4">En <strong>CAVITUR</strong> nacemos de la convicción de que las agencias y los agentes freelance alcanzan su máximo potencial cuando cuentan con una infraestructura sólida, respaldo operativo y acceso directo a las mejores condiciones del mercado.</p>
          <div class="d-flex gap-2 p-1 bg-white rounded-pill shadow-sm border mb-4">
            <button v-for="tab in ['mision', 'vision', 'valores'] as const" :key="tab" class="btn rounded-pill flex-fill fw-bold btn-sm py-2 text-capitalize" :class="activeTab === tab ? 'btn-cavitur-green' : 'btn-light text-muted'" @click="activeTab = tab">{{ tab }}</button>
          </div>
          <a href="#contacto" class="btn btn-cavitur-orange px-4 py-2 rounded-pill fw-bold">Quiero afiliarme ahora</a>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <div class="card border-0 shadow-sm p-4 p-md-5 rounded-4 bg-white position-relative tab-fade">
            <template v-if="activeTab === 'mision'">
              <div class="icon-box-large bg-cavitur-green-subtle text-cavitur-green mb-3"><i class="bi bi-bullseye fs-2"></i></div>
              <h3 class="h4 fw-bold text-dark-green mb-3">Nuestra Misión</h3>
              <p class="text-muted leading-relaxed mb-3 text-justify">Fortalecer y transformar el sector de agencias de viajes y asesores turísticos independientes, brindándoles un ecosistema integral que combine conectividad global, soluciones comerciales, formación especializada, acreditación de confianza y acompañamiento profesional.</p>
              <p class="text-muted leading-relaxed mb-0 text-justify">En CAVITUR facilitamos el acceso a productos, herramientas y oportunidades de negocio, promoviendo la profesionalización, la transparencia y la generación de valor, para que nuestros aliados puedan operar con mayor eficiencia, fortalecer su posicionamiento y alcanzar un crecimiento rentable y sostenible en un mercado turístico cada vez más competitivo y globalizado.</p>
            </template>
            <template v-else-if="activeTab === 'vision'">
              <div class="icon-box-large bg-cavitur-orange-subtle text-cavitur-orange mb-3"><i class="bi bi-eye-fill fs-2"></i></div>
              <h3 class="h4 fw-bold text-dark-green mb-3">Nuestra Visión</h3>
              <p class="text-muted leading-relaxed mb-3 text-justify">Consolidarnos como una organización referente en el sector turístico, reconocida por integrar conectividad, innovación, formación y confianza para fortalecer y transformar la actividad de agencias de viajes y asesores turísticos independientes.</p>
              <p class="text-muted leading-relaxed mb-4 text-justify">Buscamos construir una red sólida y competitiva, respaldada por alianzas estratégicas nacionales e internacionales, soluciones tecnológicas y estándares de profesionalización que generen nuevas oportunidades de negocio y contribuyan al crecimiento sostenible de nuestros aliados.</p>
              <ul class="vision-goals text-muted small mb-0"><li>Ampliar continuamente nuestra red de alianzas y acuerdos B2B a nivel nacional e internacional.</li><li>Desarrollar soluciones tecnológicas y de formación que impulsen la evolución profesional del sector.</li><li>Ser un referente de confianza, respaldo y excelencia en la industria turística.</li></ul>
            </template>
            <template v-else>
              <div class="icon-box-large bg-cavitur-green-subtle text-cavitur-green mb-3"><i class="bi bi-shield-shaded fs-2"></i></div>
              <h3 class="h4 fw-bold text-dark-green mb-3">Nuestros Valores</h3>
              <div class="row g-3 text-muted small"><div class="col-sm-6"><strong class="text-dark-green">Sinergia</strong><p class="mb-0">Crecemos juntos sumando esfuerzos.</p></div><div class="col-sm-6"><strong class="text-dark-green">Transparencia</strong><p class="mb-0">Claridad en acuerdos comerciales.</p></div><div class="col-sm-6"><strong class="text-dark-green">Innovación</strong><p class="mb-0">Tecnología ágil al servicio del asesor.</p></div><div class="col-sm-6"><strong class="text-dark-green">Compromiso</strong><p class="mb-0">Dedicación total al éxito de cada aliado.</p></div></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
