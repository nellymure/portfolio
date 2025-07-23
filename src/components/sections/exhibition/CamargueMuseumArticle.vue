<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeIn from '@/components/FadeIn.vue'

const { t } = useI18n()
</script>

<template>
  <article>
    <img
      class="folder-image"
      ref="folderSeparator"
      src="@/assets/images/sections/exhibition/coupe-concept.jpg"
      alt="Exhibition main image"
    />
    <header>
      <h3>01</h3>
      <!-- <h1>{{ t('title') }}</h1> -->
    </header>
    <!-- <p class="first-paragraph">{{ t('paragraphs[0]') }}</p>
    <p>{{ t('paragraphs[1]') }}</p>
    <p>{{ t('paragraphs[2]') }}</p> -->
    <FadeIn delay="0.5s">
      <slot>
        <img
          src="@/assets/images/sections/exhibition/coupe-partie-3.png"
          alt="Project 3d elevation"
        />
        <!-- <div class="comments text-center">{{ t('image.elevation') }}</div> -->
      </slot>
    </FadeIn>
    <FadeIn delay="0.5s">
      <slot>
        <img
          src="@/assets/images/sections/exhibition/partie-3.jpg"
          alt="Immersive view 1 of the project"
        />
      </slot>
    </FadeIn>
    <FadeIn delay="0.5s">
      <slot>
        <img
          src="@/assets/images/sections/exhibition/partie-4-mapping2.jpg"
          alt="Immersive view 2 of the project"
        />
        <!-- <div class="comments text-center">{{ t('image.immersiveViews') }}</div> -->
      </slot>
    </FadeIn>
    <FadeIn delay="0.5s">
      <slot>
        <img
          src="@/assets/images/sections/exhibition/zoning-musee-camargue.jpg"
          alt="Zoning of the project"
        />
        <!-- <div class="comments text-center">{{ t('image.zoning') }}</div> -->
      </slot>
    </FadeIn>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title": "Avec ou sans sel",
      "paragraphs": [
        "Ce projet est mon macro projet de fin d'étude. Il prend la forme d'une scénographie
        d'exposition au musée de la Camargue situé près d'Arles. Les changements climatiques
        conditionnent la pérennité de la Camargue, le sel est un acteur majeur de dégradation de la
        région.",
        "L'exposition se doit d'être impactante au vu de l'urgence de la situation. Elle
        doit faire sentir grandir, subtilement et par un travail entre matière et lumière, une
        menace permanente autour du visiteur.",
        "Au sein de ce projet la scénographie peut dialoguer avec le paysage par l'utilisation
        de la matière. Cette plasticité permet d'évoquer matériellement la prolifération du sel
        au sein de l'exposition."
      ],
      "comments": [
      ],
      "image": {
        "zoning": "Moodboard conceptuel du projet",
        "elevation": "Élévation sensible du projet",
        "immersiveViews": "Vues immersives du projet"
      }
    },
    "en": {
    }
  }
</i18n>

<style scoped>
@import '@/assets/sections-view.css';
</style>
