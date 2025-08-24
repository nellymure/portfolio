<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'
import NavBar from './NavBar.vue'

const { t } = useI18n()
</script>

<template>
  <NavBar class="section-navbar">
    <template #left>
      <div class="arrow">←</div>
      <div>{{ t('buttons.back') }}</div>
    </template>
    <template #right>
      <LanguageSelector class="language-selector" />
      <div class="btn-about">{{ t('buttons.about') }}</div>
    </template>
  </NavBar>
</template>

<i18n>
  {
    "fr": {
      "buttons": {
        "about": "A propos",
        "back": "Retour",
      }
    },
    "en": {
      "buttons": {
        "about": "About",
        "back": "Back",
      }
    }
  }
</i18n>

<style scoped>
.section-navbar {
  font-family: var(--font-family-montserrat);
  font-weight: var(--font-weight-semi-bold);
  text-transform: uppercase;
}
.arrow {
  padding-right: 1rem;
  margin-bottom: 0.2em;
}
.language-selector {
  width: 1.783rem;
}
.btn-about {
  margin-left: 1em;
}
</style>
