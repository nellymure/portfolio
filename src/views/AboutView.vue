<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import NavBar from '@/components/navbars/NavBar.vue'
import { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <div class="about">
    <NavBar class="section-navbar">
      <template #left>
        <router-link :to="{ name: getRouteName(routes.HUB) }">{{ t('buttons.back') }}</router-link>
      </template>
    </NavBar>
    <div class="content">
      <p class="text-indent">
        {{ t('about') }}
      </p>
      <img class="selfie" src="@/assets/images/about/selfie.jpg" alt="selfie" />
      <div class="asterisks">
        <div>*</div>
        <div>*</div>
        <div>*</div>
      </div>
      <!-- <div class="asterisk">*</div> -->
      <!-- <div class="asterisk">*</div> -->
    </div>
  </div>
</template>

<i18n>
  {
    "fr": {
      "about": "Formée en design d'exposition culturelle et de marque, j'ai développé une pratique
      pluridisciplinaire à la croisée de la scénographie, de l'événementiel et de la création
      artistique. Curieuse et passionnée par la mise en espace, j'aime concevoir des expériences
      sensibles évocatrices. Qu'il s'agisse d'expositions, d'événements ou de dispositifs de
      médiation, je m'engage toujours à révéler et mettre en avant un lieu, un propos, ou une œuvre
      avec justesse et créativité.",
      "buttons": {
        "back": "Menu"
      }
    },
    "en": {
      "about": "With a degree in cultural exhibition and brand design, I have developed a
      multidisciplinary practice at the crossroads of scenography, events and artistic creation.
      Curious and passionate about spatial design, I like to create evocative and sensitive
      experiences. Whether I'm working on exhibitions, events or mediation systems, I'm always
      committed to revealing and highlighting a place, a theme or a work with accuracy and
      creativity.",
      "buttons": {
        "back": "Menu"
      }
    }
  }
</i18n>

<style lang="css" scoped>
.about {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: var(--navbar-height) 0 0 0;
}
.navbar {
  color: var(--color-hex-orange);
}
.content {
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: var(--navbar-height) 20vw 20vh 20vw;
}
.content p {
  padding-right: var(--half-padding-x);
  padding-bottom: var(--half-padding-x);
}
.selfie {
  height: auto;
  width: 20vw;
}
.asterisks {
  font-family: var(--font-family-minion-pro);
  font-size: 20rem;
}
.asterisks > div {
  position: absolute;
  width: 9rem;
  height: 9rem;
  animation: swirl-in-bottom-fwd 0.6s ease-out both;
}
.asterisks :nth-child(1) {
  bottom: 60vh;
  left: 14vw;
  color: var(--color-hex-salmon-dark);
}
.asterisks :nth-child(2) {
  bottom: 70vh;
  right: 17vw;
  color: var(--color-hex-violet2);
}
.asterisks :nth-child(3) {
  bottom: 30vh;
  right: 38vw;
  color: var(--color-hex-orange);
}
@keyframes swirl-in-bottom-fwd {
  0% {
    transform: rotate(-540deg) scale(0);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    transform-origin: 50% 100%;
    opacity: 1;
  }
}
</style>
