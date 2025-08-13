<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'
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
          <h1>{{ t('title') }}</h1>
        </div>
        <p class="text-indent">
          {{ t('paragraphs[0]') }}
          <ColorPalette :colors="['#382422', '#66544D', '#988068', '#EBD8BC', '#50522D']" />
        </p>
      </div>
      <div class="img-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/model-making/capture-ecran-2025-07-25-181538.png" />
        </FadeInViewport>
      </div>
    </header>
    <div class="container-1 no-gap">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/model-making/IMG_4595-1.png" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <p>{{ t('paragraphs[1]') }}</p>
      </div>
    </div>
    <FadeInViewport delay="0.5s">
      <img class="full-img no-gap" src="@/assets/images/sections/model-making/IMG_4620-2.jpg" />
    </FadeInViewport>
    <div class="container-2">
      <FadeInViewport delay="0.5s">
        <img src="@/assets/images/sections/model-making/IMG_5957.png" />
      </FadeInViewport>
      <FadeInViewport delay="0.5s">
        <img class="big-one" src="@/assets/images/sections/model-making/IMG_5956.png" />
      </FadeInViewport>
      <FadeInViewport delay="0.5s">
        <img src="@/assets/images/sections/model-making/IMG_5948_2.png" />
      </FadeInViewport>
    </div>
    <p class="text-indent no-gap pt-half">
      {{ t('paragraphs[2]') }}
    </p>
    <FadeInViewport delay="0.5s">
      <img class="img-80" src="@/assets/images/sections/model-making/IMG_5965.png" />
    </FadeInViewport>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/model-making/IMG_5964.png" />
    </FadeInViewport>
    <p class="text-indent">
      {{ t('paragraphs[3]') }}
    </p>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title": "Maquettes",
      "paragraphs": [
        "La maquette est un outil de communication qu'il me plaît d'utiliser dans mes projets. Elle
        permet de se projeter plus facilement dans le projet et de saisir l'intérêt et la complexité
        de certains principes.",
        "Maquette de contexte d'étude - Grand Nord Grand Sud",
        "Maquette de contexte d'étude - Avec ou sans sel",
        "Maquette salle d'exposition - Grand Nord Grand Sud"
      ]
    },
    "en": {
      "title": "Model making",
      "paragraphs": [
        "Models are a communication tool that I enjoy using in my projects. They make it easier to
        visualise the project and grasp the significance and complexity of certain principles.",
        "Study context model - Far North Far South",
        "Study context model - With or without salt",
        "Exhibition room model - Far North Far South"
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
.pt-half {
  padding-top: var(--half-padding-x);
}
header {
  display: flex;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.text-part {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 80vh;
  max-width: 35vw;
  margin-right: var(--half-padding-x);
  padding-bottom: var(--half-padding-x);
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
.full-img {
  width: 100vw;
  height: auto;
}
.container-1 {
  display: flex;
  justify-content: flex-start;
  padding-left: 0;
  padding-right: 0;
}
.container-1 .left-part img {
  display: flex;
  width: calc(50vw - var(--half-padding-x));
  height: 100vh;
  padding-right: var(--half-padding-x);
  object-fit: cover;
}
.container-1 .right-part {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: var(--half-padding-x);
}
.full-img {
  width: 100vw;
  height: auto;
}
.container-2 {
  height: 50vh;
  display: flex;
}
.container-2 > div :deep(.content) {
  display: flex;
  align-items: flex-end;
}
.container-2 img {
  height: 50vh;
  display: flex;
  padding-left: calc(var(--half-padding-x) / 4);
  padding-right: calc(var(--half-padding-x) / 4);
  object-fit: cover;
}
.container-2 .big-one {
  width: 45vw;
}
.img-80 {
  width: 80vw;
  height: auto;
  margin-left: 10vw;
}
</style>
