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
        raconter le monde et ses secrets. L’idée du paysage imaginaire complète l’idée du voyage et
        de la découverte dans une mise en scène aux limites floues propices à l'évasion du
        visiteur.",
        "Le parcours d’exposition s’articule autour de différentes thématiques : ethnologie,
        actualités, géographie, voyage. Le visiteur les traverse en adoptant différents points de
        vue et postures comme la contemplation ou encore le surplombement d’un paysage nouveau."
      ]
    },
    "en": {
      "title": "Reflections on the\nWorld",
      "paragraphs": [
        "The exhibition Les Reflets du Monde (Reflections of the World) presents the autochromes
        collected by philanthropist Albert Kahn through a dreamlike and fantastical landscape, that
        of the Archives de la Planète (Archives of the Planet). The autochromes express a poetic
        dimension through their narrative expression. Transposed onto glass and backlit, they
        generate reflections and plays of light to tell the story of the world and its secrets. The
        idea of the imaginary landscape complements the idea of travel and discovery in a setting
        with blurred boundaries that encourage visitors to escape.",
        "The exhibition is structured around different themes: ethnology, current events, geography,
        and travel. Visitors experience them by adopting different points of view and postures, such
        as contemplation or overlooking a new landscape."
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
  max-width: 40%;
  margin-right: var(--padding-1);
}
.img-part {
  min-height: 100%;
  object-fit: contain;
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
  padding-left: var(--padding-2);
  padding-right: var(--padding-2);
}
.container .left-part {
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding-right: var(--padding-1);
}
.container img {
  width: 40vw;
}
.full-img {
  width: 100vw;
  height: auto;
}
/** portrait layout and small landscape layout */
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) or (max-height: 430px) {
  header {
    flex-direction: column;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  header .img-part {
    margin-top: var(--padding-1);
    width: 100%;
  }
  header img {
    height: auto;
    object-fit: contain;
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
  .container {
    hyphens: auto;
  }
}
/** small landscape layout */
@media (orientation: landscape) and (max-height: 430px) {
  .container {
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .container .left-part {
    width: 50vw;
    padding-right: var(--padding-0);
  }
}
/** portrait layout */
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) {
  .container {
    width: 100vw;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: calc(-1 * var(--article-row-gap));
  }
  .container .right-part {
    width: calc(100vw - var(--padding-0));
    padding-left: var(--padding--1);
    padding-right: var(--padding--1);
  }
  .container .right-part img {
    width: 100%;
    height: 50vh;
    object-fit: contain;
  }
  .container .left-part {
    width: 100%;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
}
</style>
