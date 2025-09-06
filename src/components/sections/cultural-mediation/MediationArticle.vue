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
          <img src="@/assets/images/sections/cultural-mediation/IMG_4341.jpg" />
        </FadeInViewport>
      </div>
    </header>
    <div class="container">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/cultural-mediation/screenshot2025-05-06-154419.png" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <p>{{ t('paragraphs[1]') }}</p>
        <ColorPalette :colors="['#EDD7BC', '#C8CED3', '#D4939D', '#979964', '#4C5340']" />
      </div>
    </div>
    <div class="carousel-arrow">
      <FadeInViewport delay="0.5s">
        <CarouselWithTranslate enableArrows>
          <img src="@/assets/images/sections/cultural-mediation/IMG_0709.jpg" />
          <img src="@/assets/images/sections/cultural-mediation/IMG_4347.jpg" />
          <img src="@/assets/images/sections/cultural-mediation/IMG_4345.jpg" />
        </CarouselWithTranslate>
      </FadeInViewport>
    </div>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/cultural-mediation/IMG_2013.jpg" />
    </FadeInViewport>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title": "Médiation",
      "paragraphs": [
        "Durant mon service civique de six mois au sein de la villa Noailles (Hyères), j'ai assuré
        les visites guidées quotidiennes à destination de publics variés. D'une durée de 45min, ces
        visites permettaient de retracer l'histoire de ce lieu emblématique, conçu par l'architecte
        Robert Mallet Stevens pour les mécènes Charles et Marie-Laure de Noailles, figures majeures
        du soutien à la création artistique du XXe siècle.",
        "Que le public soit averti ou scolaire, l'adaptabilité est essentielle. Le parcours de la
        maison, des jardins jusqu'au plateau sportif, permettait une lecture sensible de
        l'architecture novatrice de la villa Noailles. Les expositions présentées dans le cadre du
        Festival International de Mode et de la Design Parade inscrivent le lieu dans une dynamique
        résolument contemporaine."
      ]
    },
    "en": {
      "title": "Mediation",
      "paragraphs": [
        "During my six-month civic service at Villa Noailles (Hyères), I led daily guided tours for
        a variety of audiences. These 45-minute tours traced the history of this iconic location,
        designed by architect Robert Mallet Stevens for patrons Charles and Marie-Laure de Noailles,
        major figures in the support of 20th-century artistic creation.",
        "Whether the audience was knowledgeable or schoolchildren, adaptability was essential. The
        tour of the house, from the gardens to the sports area, provided a sensitive interpretation
        of the innovative architecture of the Villa Noailles. The exhibitions presented as part of
        the International Fashion Festival and the Design Parade give the venue a resolutely
        contemporary feel."
      ]
    }
  }
</i18n>

<style lang="css" scoped>
article {
  display: flex;
  flex-direction: column;
  row-gap: var(--article-row-gap);
}
header {
  display: flex;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.text-part {
  max-width: 35vw;
  margin-right: var(--half-padding-x);
}
h1 {
  font-size: 7em;
  font-family: var(--font-family-antic-didone);
  font-weight: var(--font-weight-light);
  line-height: 1;
  text-align: left;
  margin-bottom: 1em;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.container .left-part {
  width: 40vw;
  height: 100vh;
}
.container .left-part img {
  width: 40vw;
  height: 100vh;
  padding-right: var(--half-padding-x);
  object-fit: cover;
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
.carousel-arrow {
  width: 80vw;
  align-self: center;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.carousel-arrow img {
  width: 100%;
}
@media (max-aspect-ratio: 5/4) {
  header {
    flex-direction: column;
  }
  header .text-part {
    height: auto;
    max-width: 100%;
    width: 100%;
    align-items: center;
  }
  header .text-part .title {
    text-align: center;
  }
  header .img-part {
    margin-top: 3vh;
    height: auto;
    width: 100%;
  }
  header img {
    height: auto;
    object-fit: contain;
  }
  h1 {
    font-size: 5em;
    text-align: center;
  }
  .container {
    flex-direction: column;
    justify-content: center;
  }
  .container .left-part {
    width: 100%;
    max-height: 50vh;
  }
  .container .left-part img {
    width: 100%;
    height: auto;
    max-height: 50vh;
    object-fit: cover;
    padding-right: 0;
  }
  .container .right-part {
    margin-top: 3vh;
  }
  .carousel-arrow {
    margin-top: -2vh;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
