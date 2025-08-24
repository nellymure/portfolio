<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'
import CarouselWithTranslate from '@/components/CarouselWithTranslate.vue'
import CarouselWithFade from '@/components/CarouselWithFade.vue'
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
        <div class="title">
          <h3>{{ articleId }}</h3>
          <h1>{{ t('title') }}</h1>
        </div>
        <p class="text-indent">
          {{ t('paragraphs[0]') }}
        </p>
      </div>
      <div class="img-part">
        <FadeInViewport delay="0.5s">
          <img class="header-image" src="@/assets/images/sections/exhibition/coupe-concept.jpg" />
        </FadeInViewport>
      </div>
    </header>
    <div class="container">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/exhibition/partie-1-entree.jpg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <p>{{ t('paragraphs[1]') }}</p>
        <ColorPalette :colors="['#ececeb', '#ecd7b2', '#b19a83', '#60705b', '#6e8661']" />
      </div>
    </div>
    <div class="container container-2">
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
      <img class="full-img" src="@/assets/images/sections/exhibition/partie-3.jpg" />
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
      <img class="full-img" src="@/assets/images/sections/exhibition/partie-4-bis.jpg" />
    </FadeInViewport>
    <div class="last-image-container">
      <FadeInViewport delay="0.5s" :debug="true">
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
      ]
    },
    "en": {
    }
  }
</i18n>

<style lang="css" scoped>
.text-part {
  max-width: 35vw;
  margin-right: var(--half-padding-x);
}
.img-part {
  height: 100%;
}
h1 {
  font-size: 7em;
  font-family: var(--font-family-antic-didone);
  font-weight: var(--font-weight-light);
  line-height: 1;
  text-align: left;
  margin-bottom: 1em;
}
article {
  display: flex;
  flex-direction: column;
  row-gap: var(--article-row-gap);
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
.container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.container .left-part img {
  width: 60vw;
  padding-right: var(--half-padding-x);
}
.container .right-part {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.container img {
  width: 100%;
  display: flex;
}
.full-img {
  width: 100vw;
  height: auto;
}
.last-image-container {
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.last-image-container img {
  width: 100%;
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
@media (orientation: portrait) {
  header {
    flex-direction: column;
  }
  header .text-part {
    height: auto;
    max-width: 100%;
    width: 100%;
    align-items: flex-start;
    margin-right: 0;
  }
  header .text-part .title {
    text-align: center;
  }
  h1 {
    font-size: 5em;
    text-align: center;
  }
  header .img-part {
    margin-top: 5vh;
    width: 100%;
  }
  header img {
    height: auto;
    object-fit: contain;
  }
  .container {
    flex-direction: column;
    padding-left: var(--half-padding-x);
    padding-right: var(--half-padding-x);
  }
  .container .left-part img {
    width: calc(100vw - var(--padding-x));
    height: 50vh;
    object-fit: cover;
    padding-left: 0;
    padding-right: 0;
  }
  .container .right-part {
    padding-top: 5vh;
  }
  .container-2 {
    margin-top: -3vh;
  }
  .carousel-arrow {
    padding-left: 0;
    padding-right: 0;
  }
  .carousel-interval img {
    width: 100%;
  }
  .carousel-interval {
    padding-left: var(--half-padding-x);
    padding-right: var(--half-padding-x);
  }
}
</style>
