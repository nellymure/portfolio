<script setup lang="ts">
import LanguageSelector from '@/components/LanguageSelector.vue'
import NellyMure from '@/components/NellyMure.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="navbar">
    <NellyMure class="left" />
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
.navbar {
  position: fixed;
  top: 0;
  width: 100vw;
  padding: 2rem 4rem 4rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family-montserrat);
  font-weight: var(--font-weight-semi-bold);
}
.left {
  font-size: 3rem;
}
.right {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}
.language-selector {
  width: 1.783rem;
}
.btn-about {
  margin-left: 1em;
}
</style>
