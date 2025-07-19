<script setup>
import LanguageSelector from '@/components/LanguageSelector.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="about">
    <LanguageSelector />
    <img class="selfie" src="@/assets/images/about/selfie.jpg" alt="selfie" />
    <div class="title">
      <span>Nelly</span>
      <span class="last-name">Mure</span>
    </div>
    <div>
      {{ t('about') }}
    </div>
  </div>
  <!-- <HeaderOutline class="test">
      <template v-slot:content>
        <h1>une suite de mots sans signification utilisye à titre provisoire</h1>
      </template>
    </HeaderOutline>
    <HeaderOutline class="test">
      <template v-slot:content>
        <h6>une suite de mots sans signification utilisye à titre provisoire</h6>
      </template>
    </HeaderOutline> -->
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
    },
    "en": {
      "about": "With a degree in cultural exhibition and brand design, I have developed a
      multidisciplinary practice at the crossroads of scenography, events and artistic creation.
      Curious and passionate about spatial design, I like to create evocative and sensitive
      experiences. Whether I'm working on exhibitions, events or mediation systems, I'm always
      committed to revealing and highlighting a place, a theme or a work with accuracy and
      creativity."
    }
  }
</i18n>

<style>
.about {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(233, 229, 229);
}
.title {
  display: flex;
  flex-direction: row;
  color: var(--color-hex-text-orange);
  font-family: var(--font-family-le-murmure);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: 10vw;
  line-height: 1;
}
.last-name {
  margin-top: 0.5em;
  margin-left: 0.1em;
  align-self: flex-end;
}
.selfie {
  width: auto;
  height: 25vh;
}
</style>
