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
header {
  display: flex;
  align-items: center;
  padding-left: var(--padding-2);
  padding-right: var(--padding-2);
}
.text-part {
  max-width: 35%;
  margin-right: var(--padding-0);
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: var(--padding-2);
  padding-right: var(--padding-2);
}
.container .left-part {
  width: 40vw;
  height: 100vh;
}
.container .left-part img {
  width: 40vw;
  height: 100vh;
  padding-right: var(--padding-0);
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
  padding-left: var(--padding-2);
  padding-right: var(--padding-2);
}
.carousel-arrow img {
  width: 100%;
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
    align-items: flex-start;
    margin-right: 0;
  }
  .text-part .title {
    text-align: center;
  }
  header .img-part {
    width: 100%;
  }
  header img {
    height: auto;
    object-fit: contain;
    margin-top: var(--padding-0);
  }
}
/** small landscape layout */
@media (orientation: landscape) and (max-height: 430px) {
  .container {
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .carousel-arrow {
    width: 100%;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
}
/** portrait layout */
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) {
  .container {
    flex-direction: column;
    justify-content: center;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
    margin-bottom: var(--color-palette-bottom-margin);
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
    padding-top: var(--padding-0);
  }
  .carousel-arrow {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
