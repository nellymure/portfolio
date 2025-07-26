<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'

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
      <FadeInViewport delay="0.5s">
        <img
          class="page-first-image"
          src="@/assets/images/sections/exhibition/partie-1-entree.jpg"
        />
      </FadeInViewport>
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
      <FadeInViewport delay="0.5s">
        <img
          class="page-first-image"
          src="@/assets/images/sections/exhibition/partie-1-sortie.jpg"
        />
      </FadeInViewport>
      <FadeInViewport delay="0.5s">
        <img class="page-second-image" src="@/assets/images/sections/exhibition/partie-2.jpg" />
      </FadeInViewport>
    </div>
    <!-- <FadeInViewport delay="0.5s">
      <img src="@/assets/images/sections/exhibition/partie-2.jpg" />
    </FadeInViewport>
    <FadeInViewport delay="0.5s">
      <slot>
        <img
          src="@/assets/images/sections/exhibition/partie-3.jpg"
        />
      </slot>
    </FadeInViewport>
    <FadeInViewport delay="0.5s">
      <slot>
        <img
          src="@/assets/images/sections/exhibition/partie-4-mapping2.jpg"
        />
      </slot>
    </FadeInViewport>
    <FadeInViewport delay="0.5s">
      <slot>
        <img
          src="@/assets/images/sections/exhibition/zoning-musee-camargue.jpg"
        />
      </slot>
    </FadeInViewport> -->
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
  padding-left: var(--padding-x);
}
.header-image {
  width: 100%;
}
.page {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.page .right-part {
  width: 40vw;
  padding-left: var(--padding-x);
}
.page-first-image {
  width: 60vw;
}
.page-second-image {
  width: 100%;
  padding-left: var(--padding-x);
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
</style>
