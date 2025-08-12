<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'
import CarouselWithTranslate from '@/components/CarouselWithTranslate.vue'
import ColorPalette from '@/components/ColorPalette.vue'

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
      <div class="text-part">
        <div>
          <h3>{{ articleId }}</h3>
          <h1>{{ t('title-1') }}<br />{{ t('title-2') }}</h1>
        </div>
        <p class="text-indent">
          {{ t('paragraphs[0]') }}
        </p>
        <p>
          {{ t('paragraphs[1]') }}
        </p>
      </div>
      <div class="img-part">
        <FadeInViewport delay="0.5s">
          <img
            src="@/assets/images/sections/cultural-mediation/52B08C58-A3B6-4CCF-BA03-109CA5140C28.JPG"
          />
        </FadeInViewport>
      </div>
    </header>
    <div class="container container-1">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/cultural-mediation/IMG_2834.jpg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <FadeInViewport delay="0.5s">
          <div class="img-container">
            <img src="@/assets/images/sections/cultural-mediation/IMG_2768.jpg" />
          </div>
        </FadeInViewport>
        <div>
          <p>{{ t('paragraphs[2]') }}</p>
          <p>{{ t('paragraphs[3]') }}</p>
          <ColorPalette :colors="['#000D20', '#67645B', '#7B8383', '#B0B8B0', '#E7EDEC']" />
        </div>
      </div>
    </div>
    <FadeInViewport delay="0.5s">
      <img class="full-img no-gap" src="@/assets/images/sections/cultural-mediation/IMG_2914.jpg" />
    </FadeInViewport>
    <div class="container-2">
      <FadeInViewport delay="0.5s">
        <img src="@/assets/images/sections/cultural-mediation/IMG_2663.jpg" />
        <img src="@/assets/images/sections/cultural-mediation/IMG_2559.jpg" />
        <img src="@/assets/images/sections/cultural-mediation/IMG_2825.jpg" />
      </FadeInViewport>
    </div>
    <div class="container container-3">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/cultural-mediation/IMG_2732.jpg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <FadeInViewport delay="0.5s">
          <div class="img-container">
            <img src="@/assets/images/sections/cultural-mediation/IMG_2325.jpg" />
          </div>
        </FadeInViewport>
      </div>
    </div>
    <div class="container-4">
      <FadeInViewport delay="0.5s">
        <img src="@/assets/images/sections/cultural-mediation/IMG_3139-1.jpg" />
      </FadeInViewport>
      <FadeInViewport delay="0.5s">
        <img class="big-one" src="@/assets/images/sections/cultural-mediation/IMG_3092-1.jpg" />
      </FadeInViewport>
      <FadeInViewport delay="0.5s">
        <img src="@/assets/images/sections/cultural-mediation/IMG_3089-1.jpg" />
      </FadeInViewport>
    </div>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/cultural-mediation/IMG_3096-1.jpg" />
    </FadeInViewport>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title-1": "1 Matériau",
      "title-2": "100 Expériences",
      "paragraphs": [
        "A l'occasion de notre projet de diplôme, nous avons dû explorer la plasticité d'un matériau
        en lien avec notre projet au travers de cent expérimentations.",
        "L'étude du sel m'a permis de
        découvrir ses différents états, le tout en jouant avec la lumière. Ce travail a été le point
        d'amorce d'un book de direction artistique afin d'axer des principes scénographiques dans le
        cadre du projet.",
        "Vendu sous différents états, le sel peut surprendre lorsqu'on commence à jouer de sa
        matière. Il se transforme et raconte une histoire insoupçonnée, parfois poétique, parfois
        hostile.",
        "Les jeux colorimétriques, entre contrastes marquants et camaïeux de blanc donnent des clés
        de lectures différentes et pertinentes dans un cadre scénographique."
      ]
    },
    "en": {
      "title-1": "1 Material",
      "title-2": "100 Experiments",
      "paragraphs": [
        "For our degree project, we had to explore the plasticity of a material related to our
        project through a hundred experiments.",
        "Studying salt allowed me to discover its different states, all while playing with light.
        This work was the starting point for an art direction book to focus on scenographic
        principles within the framework of the project.",
        "Sold in different states, salt can be surprising when you start playing with its material
        properties. It transforms and tells an unexpected story, sometimes poetic, sometimes
        hostile.",
        "The play of colours, between striking contrasts and shades of white, provides
        different and relevant interpretations in a scenographic setting."
      ]
    }
  }
</i18n>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  row-gap: 20vh;
}
.no-gap {
  margin-top: -20vh;
}
header {
  display: flex;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.text-part {
  max-width: 50vw;
  margin-right: var(--half-padding-x);
}
h1 {
  font-size: 7em;
  font-family: var(--font-family-adobe-song);
  font-weight: var(--font-weight-light);
  line-height: 1;
  text-align: left;
  margin-bottom: 1em;
}
.img-part {
  width: 50vw;
}
header img {
  height: 80vh;
  object-fit: cover;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.container img {
  width: 100%;
  display: flex;
}
.container-1 {
  justify-content: flex-start;
  padding-left: 0;
  padding-right: 0;
}
.container-1 .left-part img {
  width: calc(50vw - var(--half-padding-x));
  height: 100vh;
  padding-right: var(--half-padding-x);
  object-fit: cover;
}
.container-1 .right-part {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 40vw;
  padding-bottom: var(--half-padding-x);
}
.container-1 .right-part .img-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: var(--half-padding-x);
}
.container-1 .right-part img {
  width: 50%;
}
.full-img {
  width: 100vw;
  height: auto;
}
.container-2 {
  height: 70vh;
  display: flex;
  justify-content: center;
}
.container-2 img {
  width: 30vw;
  padding-left: calc(var(--half-padding-x) / 4);
  padding-right: calc(var(--half-padding-x) / 4);
  object-fit: cover;
}
.container-3 {
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;
}
.container-3 .left-part {
  width: 50vw;
}
.container-3 .right-part {
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-3 .right-part :deep(.content) {
  display: flex;
  justify-content: center;
}
.container-3 .right-part .img-container {
  width: 50%;
}
.container-4 {
  height: 70vh;
  display: flex;
  justify-content: center;
}
.container-4 img {
  width: 25vw;
  padding-left: calc(var(--half-padding-x) / 4);
  padding-right: calc(var(--half-padding-x) / 4);
  object-fit: cover;
}
.container-4 .big-one {
  width: 40vw;
}
</style>
