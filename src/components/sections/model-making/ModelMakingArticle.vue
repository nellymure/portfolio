<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'
import ColorPalette from '@/components/ColorPalette.vue'
import CarouselWithFade from '@/components/CarouselWithFade.vue'
import { useLayout } from '@/utils/screen-utils'

defineProps({
  articleId: {
    type: String,
    required: true,
  },
})
const { t } = useI18n()
const { isPortraitLayout } = useLayout()
</script>

<template>
  <article>
    <header>
      <div class="text-part">
        <div class="title">
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
    <div class="container-1">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/model-making/IMG_4595-1.png" />
        </FadeInViewport>
      </div>
      <div class="right-part description">
        <p>{{ t('paragraphs[1]') }}</p>
      </div>
    </div>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/model-making/IMG_4620-2.jpg" />
    </FadeInViewport>
    <div v-if="isPortraitLayout" class="container-2">
      <FadeInViewport delay="0.5s">
        <CarouselWithFade :intervalTimer="2000" :smoothPercent="0.2">
          <img src="@/assets/images/sections/model-making/IMG_5957.png" />
          <img src="@/assets/images/sections/model-making/IMG_5956.png" />
          <img src="@/assets/images/sections/model-making/IMG_5948_2.png" />
        </CarouselWithFade>
      </FadeInViewport>
    </div>
    <div v-else class="container-2">
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
    <p class="description description-2">
      {{ t('paragraphs[2]') }}
    </p>
    <FadeInViewport delay="0.5s">
      <img class="img-80" src="@/assets/images/sections/model-making/IMG_5965.png" />
    </FadeInViewport>
    <FadeInViewport delay="0.5s">
      <img class="full-img last-img" src="@/assets/images/sections/model-making/IMG_5964.png" />
    </FadeInViewport>
    <p class="description description-3">
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

<style lang="css" scoped>
article {
  row-gap: unset !important;
}
header {
  display: flex;
  align-items: center;
  padding-left: var(--padding-2);
  padding-right: var(--padding-2);
}
.text-part {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 80vh;
  max-width: 40%;
  margin-right: var(--padding-0);
  padding-bottom: var(--padding-0);
}
.img-part {
  width: 100%;
  display: flex;
  align-items: flex-end;
}
.img-part .fade-in-container {
  width: 100%;
}
header img {
  height: 80vh;
  object-fit: cover;
}
.full-img {
  width: 100vw;
  height: auto;
  display: flex;
}
.description {
  padding-top: 1em;
  padding-left: var(--padding-2);
}
.container-1 {
  display: flex;
  justify-content: flex-start;
  margin-top: 20vh;
  margin-bottom: 20vh;
  padding-left: 0;
  padding-right: 0;
}
.container-1 .left-part img {
  display: flex;
  width: calc(50vw - var(--padding-0));
  height: 100vh;
  object-fit: cover;
}
.container-1 .right-part {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: var(--padding-0);
}
.container-1 .description {
  padding-left: var(--padding-0);
}
.container-2 {
  align-self: center;
  display: flex;
  justify-content: space-between;
  margin-top: 20vh;
  height: 80vh;
  padding-left: var(--padding-1);
  padding-right: var(--padding-1);
}
.container-2 img {
  height: 80vh;
  display: flex;
  object-fit: cover;
}
.container-2 .big-one {
  width: 45vw;
  padding-left: var(--padding--1);
  padding-right: var(--padding--1);
}
.description-2 {
  padding-left: var(--padding-1);
}
.img-80 {
  display: flex;
  margin-top: 20vh;
  height: auto;
  padding-left: 10vw;
  padding-right: 10vw;
}
.last-img {
  margin-top: 20vh;
}
/** portrait layout and small landscape layout */
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) or (max-height: 430px) {
  header {
    flex-direction: column;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .text-part {
    height: auto;
    max-width: 100%;
    width: 100%;
    align-items: center;
    margin-right: 0;
  }
  .text-part .title {
    text-align: center;
  }
  .img-part {
    width: 100%;
    align-items: flex-start;
  }
  header img {
    height: auto;
    object-fit: contain;
    margin-top: unset;
  }
}
/** small landscape layout */
@media (orientation: landscape) and (max-height: 430px) {
  header .img-part {
    width: 50%;
  }
  .container-2 {
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .container-2 .big-one {
    width: 45vw;
    padding-left: var(--padding--1);
    padding-right: var(--padding--1);
  }
  .description-2 {
    padding-left: var(--padding-0);
  }
  .description-3 {
    padding-left: var(--padding-0);
  }
}
/** portrait layout */
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) {
  .description {
    text-align: center;
    padding-bottom: 1em;
    padding-left: 0;
  }
  .container-1 {
    flex-direction: column;
    justify-content: center;
    margin-top: var(--padding-1);
    margin-bottom: 5vh;
  }
  .container-1 .left-part img {
    width: 100%;
    height: auto;
    object-fit: contain;
    padding-right: 0;
  }
  .container-1 .description {
    padding-left: 0;
  }
  .container-2 {
    margin-top: 10vh;
    height: 50vh;
    width: 100%;
  }
  .container-2 img {
    height: 50vh;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .img-80 {
    margin-top: var(--padding-1);
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .last-img {
    margin-top: calc(5vh + 2em);
  }
}
</style>
