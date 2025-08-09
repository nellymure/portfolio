<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'

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
        </p>
      </div>
      <div class="img-part">
        <FadeInViewport delay="0.5s">
          <img
            class="header-image"
            src="@/assets/images/sections/exhibition/vue-globale-geographie.jpg"
          />
        </FadeInViewport>
      </div>
    </header>
    <FadeInViewport delay="0.5s">
      <img src="@/assets/images/sections/exhibition/dispositif-miroir.jpg" />
    </FadeInViewport>
    <div class="page">
      <div class="left-part">
        <p>{{ t('paragraphs[1]') }}</p>
      </div>
      <div class="right-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/exhibition/projet-albert-kahn-xmusee.png" />
        </FadeInViewport>
      </div>
    </div>
    <FadeInViewport delay="0.5s">
      <img src="@/assets/images/sections/exhibition/ethnologie.jpg" />
    </FadeInViewport>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title": "Reflets du\nmonde",
      "paragraphs": [
        "L’exposition Les Reflets du Monde présente les autochromes collectés par le philanthrope
        Albert Kahn par le biais d'un paysage onirique et fantasmé, celui des Archives de la
        Planète. Les autochromes expriment une dimension poétique par leur expression narrative.
        Transposés sur du verre et rétro-éclairés, ils génèrent des reflets et jeux de lumière pour
        raconter le monde et ses secrets . L’idée du paysage imaginaire complète l’idée du voyage et
        de la découverte dans une mise en scène aux limites floues propices à l'évasion du
        visiteur.",
        "Le parcours d’exposition s’articule autour de différentes thématiques : ethnologie,
        actualités, géographie, voyage. Le visiteur les traverse en adoptant différents points de
        vue et postures comme la contemplation ou encore le surplombement d’un paysage nouveau."
      ]
    },
    "en": {
    }
  }
</i18n>

<style scoped>
.text-part {
  max-width: 35vw;
  margin-right: var(--half-padding-x);
}
.img-part {
  width: 100%;
}
h1 {
  font-size: 7em;
  font-family: var(--font-family-adobe-song);
  font-weight: var(--font-weight-light);
  line-height: 1;
  text-align: left;
  margin-bottom: 1em;
}
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
  justify-content: space-between;
  align-items: center;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.page .left-part {
  display: flex;
  width: 40vw;
  padding-right: var(--half-padding-x);
}
.page .right-part {
  width: 40vw;
  display: flex;
  align-items: flex-end;
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
