<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeIn from '@/components/FadeIn.vue'

const { t } = useI18n()
</script>

<template>
  <article>
    <header>
      <h4>01</h4>
      <h1>{{ t('title') }}</h1>
    </header>
    <section class="section0">
      <div>
        <p>{{ t('paragraphs[0]') }}</p>
        <div class="comments my-2em">{{ t('comments[0]') }}</div>
      </div>
      <div class="color-palette">
        <div style="background-color: #ececeb"></div>
        <div style="background-color: #ecd7b2"></div>
        <div style="background-color: #b19a83"></div>
        <div style="background-color: #60705b"></div>
        <div style="background-color: #6e8661"></div>
      </div>
    </section>
    <section class="section1">
      <div class="half-page">
        <FadeIn delay="0.5s">
          <slot>
            <div class="image-container">
              <img
                class="zoning-museum-image"
                src="@/assets/images/sections/exhibition/zoning-musee-camargue.jpg"
                alt="Zoning of the Camargue museum"
              />
            </div>
            <div class="comments text-center">{{ t('image.zoning') }}</div>
          </slot>
        </FadeIn>
        <FadeIn delay="0.5s">
          <slot>
            <p class="my-2em mb-0-portrait">{{ t('paragraphs[1]') }}</p>
          </slot>
        </FadeIn>
        <FadeIn delay="0.5s">
          <slot>
            <div class="image-container">
              <img
                class="elevation-project-image"
                src="@/assets/images/sections/exhibition/coupe-partie-3.png"
                alt="Project 3d elevation"
              />
            </div>
            <div class="comments text-center">{{ t('image.elevation') }}</div>
          </slot>
        </FadeIn>
      </div>
      <div class="half-page">
        <FadeIn delay="0.5s">
          <slot>
            <img
              class="imersive-view-1-image"
              src="@/assets/images/sections/exhibition/partie-3.jpg"
              alt="Immersive view 1 of the project"
            />
          </slot>
        </FadeIn>
        <FadeIn delay="0.5s">
          <slot>
            <img
              class="imersive-view-2-image"
              src="@/assets/images/sections/exhibition/partie-4-mapping2.jpg"
              alt="Immersive view 2 of the project"
            />
            <div class="comments text-center">{{ t('image.immersiveViews') }}</div>
          </slot>
        </FadeIn>
      </div>
    </section>
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
        région.\n L'exposition se doit d'être impactante au vu de l'urgence de la situation. Elle
        doit faire sentir grandir, subtilement et par un travail entre matière et lumière, une
        menace permanente autour du visiteur.",
        "Au sein de ce projet la scénographie peut dialoguer avec le paysage par l'utilisation
        de la matière. Cette plasticité permet d'évoquer matériellement la prolifération du sel
        au sein de l'exposition."
      ],
      "comments": [
        "Projet	individuel - projet en cours",
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

.color-palette {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: auto;
  margin-left: 2em;
}
.color-palette div {
  width: 2em;
  height: 2em;
  margin: 0.2em;
  border-radius: 50%;
}
.section1 {
  justify-content: space-between;
}
.half-page {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
img {
  width: 100%;
  object-fit: cover;
}
.image-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container:has(.zoning-museum-image) {
  height: 20vw;
}
.zoning-museum-image {
  position: absolute;
  width: 100%;
}
.image-container:has(.elevation-project-image) {
  height: 25vw;
}
.elevation-project-image {
  position: absolute;
  width: 150%;
}
@media (orientation: portrait) {
  .section1 {
    flex-direction: column;
    row-gap: 2em;
  }
  .half-page {
    width: 100%;
  }
  .image-container:has(.zoning-museum-image) {
    height: 20vh;
  }
  .image-container:has(.elevation-project-image) {
    height: 25vh;
  }
}
</style>
