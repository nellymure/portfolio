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
        <ColorPalette :colors="['#EDD7BC', '#C8CED3', '#D4939D', '#979964', '#4C5340']" />
      </div>
      <div class="img-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/cultural-mediation/livret-villa-5.jpg" />
        </FadeInViewport>
      </div>
    </header>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/cultural-mediation/livret-villa-1.jpg" />
    </FadeInViewport>
    <div class="carousel-arrow">
      <FadeInViewport delay="0.5s">
        <CarouselWithTranslate enableArrows>
          <img src="@/assets/images/sections/cultural-mediation/livret-villa-2.jpg" />
          <img src="@/assets/images/sections/cultural-mediation/livret-villa-3.jpg" />
          <img src="@/assets/images/sections/cultural-mediation/livret-villa-4.jpg" />
        </CarouselWithTranslate>
      </FadeInViewport>
    </div>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title": "Livret de\nmédiation",
      "paragraphs": [
        "Afin de rendre accessible l'histoire de la villa Noailles au jeune public, j'ai conçu un
        livret de médiation à destination des enfants. Pensé comme un parcours ludique et narratif,
        le livre invite le lecteur à traverser les époques en découvrant les personnages clé du
        lieu. L'ensemble des illustrations ainsi que la mise en page ont été réalisés par mes soins."
      ]
    },
    "en": {
      "title": "Mediation\nBooklet",
      "paragraphs": [
        "In order to make the history of Villa Noailles accessible to young audiences, I designed
        an educational booklet for children. Conceived as a fun and narrative journey, the book
        invites readers to travel through time and discover the key figures associated with the
        place. All of the illustrations and the layout were created by me."
      ]
    }
  }
</i18n>

<style lang="css" scoped>
header {
  display: flex;
  padding-left: var(--padding-0);
  padding-right: var(--padding-0);
}
.text-part {
  max-width: 35vw;
  margin-right: var(--padding--1);
}
header img {
  width: 100%;
  height: 90vh;
  object-fit: cover;
}
.full-img {
  width: 100vw;
  height: auto;
}
.carousel-arrow {
  padding-left: var(--padding-0);
  padding-right: var(--padding-0);
}
.carousel-arrow img {
  width: 100%;
  height: auto;
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
    width: 100%;
  }
  header img {
    height: auto;
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
