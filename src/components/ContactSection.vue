<script setup lang="ts">
import { reactive, ref } from 'vue'
import { submitContact } from '../services/contact'

const form = reactive({ full_name: '', email: '', phone: '', profile_type: 'Agencia de Viajes Establecida', interests: [] as string[], message: '' })
const interestOptions = ['Academia', 'Cursos y certificaciones', 'Asistencia al viajero', 'Consolidación aérea', 'Hotelería y circuitos', 'Herramientas digitales', 'Soporte estratégico B2B']
const formTabs = [
  { key: 'agencias', label: 'Agencias', profile: 'Agencia de Viajes Establecida' },
  { key: 'profesionales', label: 'Profesionales independientes', profile: 'Profesional Independiente' },
  { key: 'travel-assistance', label: 'Travel Assistance Awards', profile: 'Travel Assistance Awards' },
] as const
const activeTab = ref<(typeof formTabs)[number]['key']>('agencias')
const isSubmitting = ref(false)
const success = ref('')
const error = ref('')

function selectTab(tab: (typeof formTabs)[number]) {
  activeTab.value = tab.key
  form.profile_type = tab.profile
}

async function handleSubmit() {
  isSubmitting.value = true; success.value = ''; error.value = ''
  try { const result = await submitContact(form); success.value = result.message; form.full_name = ''; form.email = ''; form.phone = ''; form.interests = []; form.message = '' }
  catch (requestError) { error.value = requestError instanceof Error ? requestError.message : 'No fue posible enviar tu solicitud. Inténtalo nuevamente.' }
  finally { isSubmitting.value = false }
}
</script>

<template>
  <section id="contacto" class="py-5 bg-white">
    <div class="container py-lg-4">
      <div class="row gy-5 align-items-center">
        <div class="col-lg-5">
          <span class="badge bg-cavitur-orange text-white px-3 py-2 rounded-pill mb-3">CONTÁCTANOS</span>
          <h2 class="display-6 fw-bold text-dark-green mb-3">Da el siguiente paso junto a CAVITUR</h2>
          <p class="text-muted mb-4 text-justify">Completa tus datos para recibir la propuesta de afiliación, catálogo de servicios y comenzar a operar con las mejores condiciones del sector.</p>
          <div class="d-flex flex-column gap-3">
            <div class="d-flex align-items-center gap-3 p-3 bg-cream rounded-3 border"><div class="icon-circle bg-cavitur-green text-white"><i class="bi bi-geo-alt-fill"></i></div><div><h6 class="fw-bold text-dark-green mb-0">Sede Principal</h6><small class="text-muted">Centro Corporativo Turístico, Piso 4</small></div></div>
            <div class="d-flex align-items-center gap-3 p-3 bg-cream rounded-3 border"><div class="icon-circle bg-cavitur-green text-white"><i class="bi bi-whatsapp"></i></div><div><h6 class="fw-bold text-dark-green mb-0">Atención Directa</h6><a href="https://wa.me/584241692148" target="_blank" rel="noopener noreferrer" class="text-muted text-decoration-none">+58 424-1692148</a><small class="text-muted d-block">contacto@cavitur.com</small></div></div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="card border-0 shadow-lg p-4 p-md-5 rounded-4 bg-cream">
            <h3 class="h4 fw-bold text-dark-green mb-2">Solicitud de Afiliación & Alianza</h3>
            <p class="text-muted small mb-4">Completa el formulario y un asesor B2B se comunicará contigo.</p>
            <div class="d-flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Tipo de solicitud">
              <button v-for="tab in formTabs" :key="tab.key" type="button" class="btn rounded-pill fw-bold btn-sm py-2" :class="activeTab === tab.key ? 'btn-cavitur-green' : 'btn-light text-muted'" role="tab" :aria-selected="activeTab === tab.key" @click="selectTab(tab)">{{ tab.label }}</button>
            </div>
            <div v-if="success" class="alert alert-success"><i class="bi bi-check-circle-fill me-2"></i>{{ success }}</div>
            <div v-if="error" class="alert alert-danger"><i class="bi bi-exclamation-circle-fill me-2"></i>{{ error }}</div>
            <form @submit.prevent="handleSubmit">
              <div class="row g-3">
                <div class="col-md-6"><label class="form-label small fw-bold text-dark-green">Nombre Completo</label><input v-model="form.full_name" type="text" class="form-control bg-white rounded-3 py-2" required /></div>
                <div class="col-md-6"><label class="form-label small fw-bold text-dark-green">Correo Electrónico</label><input v-model="form.email" type="email" class="form-control bg-white rounded-3 py-2" required /></div>
                <div class="col-md-6"><label class="form-label small fw-bold text-dark-green">Teléfono / WhatsApp</label><input v-model="form.phone" type="tel" class="form-control bg-white rounded-3 py-2" required /></div>
                <div class="col-md-6"><label class="form-label small fw-bold text-dark-green">Tipo de Perfil</label><input v-model="form.profile_type" type="text" class="form-control bg-white rounded-3 py-2" readonly /></div>
                <div class="col-12"><fieldset><legend class="form-label small fw-bold text-dark-green mb-2">¿En qué estás interesado?</legend><div class="row g-2"> <div v-for="interest in interestOptions" :key="interest" class="col-sm-6 col-lg-4"><label class="form-check d-flex align-items-center gap-2 mb-0"><input v-model="form.interests" class="form-check-input mt-0" type="checkbox" :value="interest" /><span class="form-check-label small">{{ interest }}</span></label></div></div></fieldset></div>
                <div class="col-12"><label class="form-label small fw-bold text-dark-green">¿Cómo te gustaría colaborar con Cavitur?</label><textarea v-model="form.message" rows="3" class="form-control bg-white rounded-3 text-justify" required></textarea></div>
                <div class="col-12 mt-4"><button type="submit" class="btn btn-cavitur-orange w-100 py-3 rounded-pill fw-bold" :disabled="isSubmitting"><span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>{{ isSubmitting ? 'Enviando solicitud...' : 'Enviar Solicitud de Alianza' }}</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>