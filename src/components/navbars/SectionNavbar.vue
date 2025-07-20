<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'

const { t } = useI18n()
</script>

<template>
  <div class="navbar">
    <div class="left"><span class="arrow">◀</span> {{ t('buttons.back') }}</div>
    <div class="right">
      <LanguageSelector class="language-selector" />
      <div class="btn-about">{{ t('buttons.about') }}</div>
    </div>
  </div>
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
.navbar {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  padding: 2rem 4rem 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family-montserrat);
  font-weight: var(--font-weight-semi-bold);
  text-transform: uppercase;
}
.left {
  display: flex;
  align-items: center;
}
.left .arrow {
  padding-right: 1rem;
  margin-bottom: 0.2em;
}
.right {
  display: flex;
  align-items: center;
}
.language-selector {
  width: 1.783rem;
}
.btn-about {
  margin-left: 1em;
}
</style>
