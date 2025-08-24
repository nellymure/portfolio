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
        <ColorPalette :colors="['#668B71', '#BB5567', '#E9E3E2', '#E1D2D1', '#A1B1D2']" />
      </div>
      <div class="carousel-arrow">
        <FadeInViewport delay="0.5s">
          <CarouselWithTranslate enableArrows>
            <img src="@/assets/images/sections/cultural-mediation/mockup-villa-noailles1-3d.jpg" />
            <img src="@/assets/images/sections/cultural-mediation/mockup-villa-noa2illes-3d.jpg" />
            <img src="@/assets/images/sections/cultural-mediation/mockup-villa-noailles3-3d.jpg" />
          </CarouselWithTranslate>
        </FadeInViewport>
      </div>
    </header>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title": "Outil de\nMédiation",
      "paragraphs": [
        "Réalisée par Robert Mallet Stevens à partir de 1923, la villa Noailles atteint sa forme
        finale en 1932. Sa volumétrie complexe inspirée de celle d'un bateau suscite de nombreuses
        interrogations. Pour aider les enfants à appréhender l'architecture, j'ai imaginé un outil
        de médiation sous forme de jeu de construction. En assemblant les différents volumes,
        l'enfant explore les formes du bâtiment d'origine et devient, le temps d'un instant,
        l'architecte de sa propre villa Noailles."
      ]
    },
    "en": {
      "title": "Mediation\nTool",
      "paragraphs": [
        "Designed by Robert Mallet Stevens beginning in 1923, the Villa Noailles reached its final
        form in 1932. Its complex volume, inspired by that of a ship, raises many questions. To help
        children understand architecture, I designed an educational tool in the form of a
        construction set. By assembling the different volumes, children explore the shapes of the
        original building and, for a moment, become the architects of their own Villa Noailles."
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
.carousel-arrow img {
  height: 95vh;
  width: 100%;
  object-fit: cover;
}
@media (orientation: portrait) {
  header {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
  header .text-part {
    height: auto;
    max-width: 100%;
    width: 100%;
    align-items: center;
    padding-left: var(--padding-x);
    padding-right: var(--padding-x);
  }
  header .text-part .title {
    text-align: center;
  }
  header .img-part {
    width: 100%;
  }
  header img {
    max-height: 50vh;
    object-fit: contain;
    margin-top: 3vh;
  }
  h1 {
    font-size: 5em;
    text-align: center;
  }
  .carousel-arrow {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
