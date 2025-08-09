<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import CarouselWithTranslate from '@/components/CarouselWithTranslate.vue'
import CarouselWithFade from '@/components/CarouselWithFade.vue'

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
          <img class="header-image" src="@/assets/images/sections/exhibition/2.jpg" />
        </template>
      </ArticleHeader>
    </header>
    <div class="page">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/exhibition/plan-cote-GNGS.jpg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <p>{{ t('paragraphs[1]') }}</p>
      </div>
    </div>
    <FadeInViewport delay="0.5s">
      <img src="@/assets/images/sections/exhibition/13.jpg" />
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
      <img src="@/assets/images/sections/exhibition/4.jpg" />
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
  align-items: flex-end;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
  height: calc(100vh - var(--padding-x) * 2);
}
.header-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.page {
  display: flex;
  align-items: flex-end;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.page .left-part {
  min-width: 60vw;
  width: 60vw;
  display: flex;
  align-items: flex-end;
  padding-right: var(--half-padding-x);
}
.page .right-part {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 3em;
}
.page img {
  width: 100%;
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
</style>
