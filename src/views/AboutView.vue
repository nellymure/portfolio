<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import NavBar from '@/components/navbars/NavBar.vue'
import FadeInViewport from '@/components/FadeInViewport.vue'
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
      <FadeInViewport delay="0.5s">
        <img class="selfie" src="@/assets/images/about/selfie.jpg" alt="selfie" />
      </FadeInViewport>
      <div class="asterisk asterisk-1"><span>✳</span></div>
      <div class="asterisk asterisk-2"><span>✳</span></div>
      <div class="asterisk asterisk-3"><span>✳</span></div>
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
  display: flex;
  align-items: center;
  background-color: white;
}
.navbar {
  color: var(--color-hex-orange);
}
.content {
  display: flex;
  align-items: flex-end;
  padding-right: var(--half-padding-x);
  padding-left: var(--half-padding-x);
  overflow: hidden;
  height: 90vh;
  --asterisk-size: 9rem;
  --asterisk-offset: var(--asterisk-size) / -2;
}
.content p {
  font-size: 1.5rem;
  padding-right: var(--half-padding-x);
  padding-bottom: var(--half-padding-x);
}
.selfie {
  height: 90vh;
  width: auto;
}
.asterisk {
  position: absolute;
  z-index: 1;
  width: var(--asterisk-size);
  height: var(--asterisk-size);
  font-family: var(--font-family-minion-pro);
  font-size: calc(var(--asterisk-size) * 1.6);
  animation: swirl-in-bottom-fwd 0.6s ease-out both;
  animation-delay: 1s;
}
.asterisk span {
  width: var(--asterisk-size);
  height: var(--asterisk-size);
  display: block;
  line-height: 0.5;
  overflow: hidden;
}
.asterisk-1 {
  top: calc(40vh + var(--asterisk-offset));
  left: calc(2rem + var(--asterisk-offset));
  color: var(--color-hex-salmon-dark);
}
.asterisk-2 {
  top: calc(18vh + var(--asterisk-offset));
  left: calc(94vw + var(--asterisk-offset));
  color: var(--color-hex-violet2);
}
.asterisk-3 {
  top: calc(100vh - var(--asterisk-size) * 0.91);
  left: calc(68vw + var(--asterisk-offset));
  height: calc(var(--asterisk-size) * 0.91);
  color: var(--color-hex-orange);
}
.asterisk-3 span {
  height: calc(var(--asterisk-size) * 0.91);
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
@media (orientation: portrait) {
  .about {
    align-items: flex-start;
  }
  .content {
    flex-direction: column;
    padding: var(--navbar-height) var(--padding-x) var(--padding-x) var(--padding-x);
    height: auto;
  }
  .content p {
    padding-right: 0;
    padding-bottom: var(--padding-x);
  }
  .selfie {
    height: auto;
    width: 100%;
  }
  .asterisk-1 {
    top: calc(70vh + var(--asterisk-offset));
    left: calc(2rem + var(--asterisk-offset));
  }
  .asterisk-2 {
    top: calc(2vh + var(--asterisk-offset));
    left: calc(95vw + var(--asterisk-offset));
  }
  .asterisk-3 {
    top: calc(100vh + var(--asterisk-size));
    left: calc(95vw + var(--asterisk-offset));
    height: var(--asterisk-size);
  }
}
</style>
