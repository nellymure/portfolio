<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import CarouselWithTranslate from '@/components/CarouselWithTranslate.vue'
import CarouselWithFade from '@/components/CarouselWithFade.vue'

const { t } = useI18n()
defineProps({
  articleId: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article>
    <header>
      <ArticleHeader :id="articleId">
        <template #title> {{ t('title') }} </template>
        <template #text> {{ t('paragraphs[0]') }} </template>
        <template #image>
          <img class="header-image" src="@/assets/images/sections/exhibition/coupe-concept.jpg" />
        </template>
      </ArticleHeader>
    </header>
    <div class="page">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/exhibition/partie-1-entree.jpg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <p>{{ t('paragraphs[1]') }}</p>
        <div class="color-palette">
          <div style="background-color: #ececeb"></div>
          <div style="background-color: #ecd7b2"></div>
          <div style="background-color: #b19a83"></div>
          <div style="background-color: #60705b"></div>
          <div style="background-color: #6e8661"></div>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/exhibition/partie-1-sortie.jpg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/exhibition/partie-2.jpg" />
        </FadeInViewport>
      </div>
    </div>
    <FadeInViewport delay="0.5s">
      <img src="@/assets/images/sections/exhibition/partie-3.jpg" />
    </FadeInViewport>
    <div class="carousel-arrow">
      <FadeInViewport delay="0.5s">
        <CarouselWithTranslate enableArrows>
          <img src="@/assets/images/sections/exhibition/coupe-partie-3.png" />
          <img src="@/assets/images/sections/exhibition/coupe-partie-4.png" />
          <img src="@/assets/images/sections/exhibition/coupe-partie-2.png" />
          <img src="@/assets/images/sections/exhibition/coupe-partie-1.jpg" />
        </CarouselWithTranslate>
      </FadeInViewport>
    </div>
    <div class="carousel-interval">
      <FadeInViewport delay="0.5s">
        <CarouselWithFade :intervalTimer="2000">
          <img src="@/assets/images/sections/exhibition/partie-4.jpg" />
          <img src="@/assets/images/sections/exhibition/partie-4-mapping1.jpg" />
          <img src="@/assets/images/sections/exhibition/partie-4-mapping2.jpg" />
          <img src="@/assets/images/sections/exhibition/partie-4-mapping3.jpg" />
        </CarouselWithFade>
      </FadeInViewport>
    </div>
    <FadeInViewport delay="0.5s">
      <img src="@/assets/images/sections/exhibition/partie-4-bis.jpg" />
    </FadeInViewport>
    <div class="last-image-container">
      <FadeInViewport delay="0.5s">
        <img src="@/assets/images/sections/exhibition/partie-4-cabane.jpg" />
      </FadeInViewport>
    </div>
    <div class="carousel-interval">
      <FadeInViewport delay="0.5s">
        <CarouselWithFade :intervalTimer="2000">
          <img src="@/assets/images/sections/exhibition/zoning-musee-camargue2.jpg" />
          <img src="@/assets/images/sections/exhibition/zoning-musee-camargue3.jpg" />
        </CarouselWithFade>
      </FadeInViewport>
    </div>
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
        région. L'exposition se doit d'être impactante au vu de l'urgence de la situation. Elle
        doit faire sentir grandir, subtilement et par un travail entre matière et lumière, une
        menace permanente autour du visiteur.",
        "Au sein de ce projet la scénographie peut dialoguer avec le paysage par l'utilisation
        de la matière. Cette plasticité permet d'évoquer matériellement la prolifération du sel
        au sein de l'exposition."
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
article {
  display: flex;
  flex-direction: column;
  row-gap: 20vh;
}
header {
  display: flex;
  align-items: flex-end;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.header-image {
  width: 100%;
}
.page {
  display: flex;
  align-items: flex-end;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.page .left-part {
  min-width: 60vw;
  display: flex;
  align-items: flex-end;
  padding-right: var(--half-padding-x);
}
.page .right-part {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.page img {
  width: 100%;
}
.last-image-container {
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.last-image-container img {
  width: 100%;
}
.color-palette {
  display: flex;
  margin-top: 4em;
}
.color-palette div {
  width: 2em;
  height: 2em;
  margin: 0.2em;
  border-radius: 50%;
}
.carousel-arrow {
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.carousel-arrow img {
  width: 100%;
  height: auto;
}
.carousel-interval {
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.carousel-interval img {
  width: 80%;
  height: auto;
}
</style>
