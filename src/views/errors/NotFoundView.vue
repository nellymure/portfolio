<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { getRouteName, routes } from '@/router'
const { t } = useI18n()
</script>

<template>
  <div class="container">
    <h1>404</h1>
    <p>
      {{ t('description') }}
    </p>
    <p>
      {{ t('check url or') }}
      <router-link :to="{ name: getRouteName(routes.HOME) }">{{ t('click here') }}</router-link>
      {{ t('to return home') }}
    </p>
  </div>
</template>

<i18n>
  {
    "fr": {
      "description": "Cette page n'existe pas ou plus.",
      "check url or": "Vérifiez l'URL ou",
      "click here": "cliquez ici",
      "to return home": "pour retourner à l'accueil",
    },
    "en": {
      "description": "This page does not exist or no longer exists.",
      "check url or": "Check the URL or",
      "click here": "click here",
      "to return home": "to return to the homepage",
    }
  }
</i18n>

<style lang="css" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
}
</style>
