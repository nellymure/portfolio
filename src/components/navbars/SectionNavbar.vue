<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSelector from '@/components/LanguageSelector.vue'
import NavBar from './NavBar.vue'
import { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <NavBar class="section-navbar">
    <template #left>
      <router-link :to="{ name: getRouteName(routes.HUB) }">{{ t('buttons.back') }}</router-link>
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
        "back": "Menu",
      }
    },
    "en": {
      "buttons": {
        "about": "About",
        "back": "Menu",
      }
    }
  }
</i18n>

<style lang="css" scoped>
a:link,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}
.section-navbar {
  font-family: var(--font-family-montserrat);
  font-weight: var(--font-weight-semi-bold);
  text-transform: uppercase;
}
.language-selector {
  width: 1.783rem;
}
.btn-about {
  margin-left: 1em;
}
</style>
