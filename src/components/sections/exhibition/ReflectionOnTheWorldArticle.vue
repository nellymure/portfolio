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
          <img
            class="header-image"
            src="@/assets/images/sections/exhibition/vue-globale-geographie.jpg"
          />
        </FadeInViewport>
      </div>
    </header>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/exhibition/dispositif-miroir.jpg" />
    </FadeInViewport>
    <div class="container">
      <div class="left-part">
        <p>{{ t('paragraphs[1]') }}</p>
        <ColorPalette :colors="['#A2ADB8', '#CCBEA9', '#988069', '#7F796E', '#363530']" />
      </div>
      <div class="right-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/exhibition/projet-albert-kahn-xmusee.png" />
        </FadeInViewport>
      </div>
    </div>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/exhibition/ethnologie.jpg" />
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
  max-width: 30vw;
  margin-right: var(--half-padding-x);
}
.img-part {
  min-height: 100%;
  object-fit: contain;
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
  row-gap: 20vh;
}
header {
  display: flex;
  align-items: flex-end;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.header-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.container .left-part {
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding-right: var(--half-padding-x);
}
.container img {
  width: 40vw;
}
.full-img {
  width: 100vw;
  height: auto;
}
@media (orientation: portrait) {
  article {
    row-gap: 5vh;
  }
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
  .container .left-part {
    width: calc(100vw - var(--padding-x));
    padding-left: 0;
    padding-right: 0;
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
  .container .right-part img {
    width: 100%;
  }
}
</style>
