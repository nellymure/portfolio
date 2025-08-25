<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'
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
          <img class="header-image" src="@/assets/images/sections/exhibition/2.jpg" />
        </FadeInViewport>
      </div>
    </header>
    <div class="container">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/exhibition/plan-cote-GNGS.jpg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <p>{{ t('paragraphs[1]') }}</p>
        <ColorPalette :colors="['#EEEDED', '#A1BDCA', '#D0B293', '#654D35', '#BF5435']" />
      </div>
    </div>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/exhibition/13.jpg" />
    </FadeInViewport>
    <div class="carousel-interval">
      <FadeInViewport delay="0.5s">
        <CarouselWithFade :intervalTimer="2000">
          <img src="@/assets/images/sections/exhibition/axonometrie-P1.jpg" />
          <img src="@/assets/images/sections/exhibition/axonometrie-P2.jpg" />
          <img src="@/assets/images/sections/exhibition/axonometrie-P3.jpg" />
          <img src="@/assets/images/sections/exhibition/axonometrie-P4.jpg" />
        </CarouselWithFade>
      </FadeInViewport>
    </div>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/exhibition/4.jpg" />
    </FadeInViewport>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title": "Grand Nord\nGrand Sud",
      "paragraphs": [
        "Le projet d'exposition Grand Nord Grand Sud est le projet de diplôme que j'ai mené en
        dernière année de licence. Il explore les liens entre deux arts autochtones antipodiques :
        l'art inuit et l'art aborigène. Ces deux arts, qu'en apparence tout oppose, sont reliés par
        leur fonction spirituelle : ils ne sont pas destinés à être vus par une communauté mais par
        les esprits.
        La scénographie doit donc pousser le visiteur à se questionner et adapter sa position pour
        mériter l'accès à ces objets. Au travers d'un parcours initiatique, il est conduit à
        questionner sa position dominatrice pour communiquer avec le divin.",
        "Un contraste chaud froid permet au visiteur de saisir la nature des pôles géographiques
        qu'il explore. Ces derniers seront par la suite réunis dans la thématique du céleste :
        on s'ouvre à une autre cosmologie."
      ]
    },
    "en": {
      "title": "Big North\nBig South",
      "paragraphs": [
        "The Grand Nord Grand Sud exhibition project was my final-year degree project. It explores
        the links between two indigenous arts from opposite sides of the globe: Inuit art and
        Aboriginal art. These two arts, which appear to be polar opposites, are connected by their
        spiritual function: they are not intended to be seen by a community but by spirits.",
        "The scenography must therefore encourage visitors to question themselves and adapt their
        position in order to merit access to these objects. Through an initiatory journey, they are
        led to question their dominant position in order to communicate with the divine.",
        "A hot-cold contrast allows visitors to grasp the nature of the geographical poles they are
        exploring. These will then be brought together under the theme of the celestial: we open
        ourselves up to another cosmology."
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
  align-items: flex-end;
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
.img-part {
  height: 80vh;
}
.header-image {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
.container {
  display: flex;
  align-items: flex-end;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.container .left-part {
  min-width: 60vw;
  width: 60vw;
  display: flex;
  align-items: flex-end;
  padding-right: var(--half-padding-x);
}
.container .right-part {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 3em;
}
.container img {
  width: 100%;
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
    height: 50vh;
  }
  header img {
    max-height: 50vh;
    object-fit: contain;
  }
  .container {
    flex-direction: column;
    padding-left: var(--half-padding-x);
    padding-right: var(--half-padding-x);
    margin-bottom: -7vh;
  }
  .container .left-part {
    width: calc(100vw - var(--padding-x));
  }
  .container .right-part {
    padding-top: 5vh;
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
