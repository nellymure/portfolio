<script setup lang="ts">
import LanguageSelector from '@/components/LanguageSelector.vue'
import NellyMure from '@/components/NellyMure.vue'
import NavBar from './NavBar.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <NavBar class="hub-navbar">
    <template #left>
      <NellyMure class="nelly-mure" />
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
        "about": "A propos"
      }
    },
    "en": {
      "buttons": {
        "about": "About"
      }
    }
  }
</i18n>

<style scoped>
.hub-navbar {
  font-family: var(--font-family-montserrat);
  font-weight: var(--font-weight-semi-bold);
}
.nelly-mure {
  font-size: 3rem;
}
.language-selector {
  width: 1.783rem;
}
.btn-about {
  margin-left: 1em;
  text-transform: uppercase;
}
</style>
