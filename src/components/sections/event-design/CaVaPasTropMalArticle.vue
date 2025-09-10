<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'
import CarouselWithFade from '@/components/CarouselWithFade.vue'
import CarouselWithTranslate from '@/components/CarouselWithTranslate.vue'
import { useLayout } from '@/utils/screen-utils'

defineProps({
  articleId: {
    type: String,
    required: true,
  },
})
const { t } = useI18n()
const { isLargeLandscapeLayout, isLandscapeLayout, isPortraitLayout } = useLayout()
</script>

<template>
  <article>
    <header>
      <div class="text-part">
        <div class="title">
          <h3>{{ articleId }}</h3>
          <h1>{{ t('title') }} <i>Ça va pas trop mal</i></h1>
        </div>
        <p class="text-indent">
          {{ t('paragraphs[0]') }}
        </p>
      </div>
      <div class="img-part">
        <FadeInViewport delay="0.5s">
          <img
            class="header-image"
            src="@/assets/images/sections/event-design/PHOTO-2024-01-22-18-32-27.jpg"
          />
        </FadeInViewport>
      </div>
    </header>
    <div v-if="isLargeLandscapeLayout" class="container container-1">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img
            src="@/assets/images/sections/event-design/4CBCC66E-E124-47C2-9685-D768A38D929F.jpg"
          />
        </FadeInViewport>
      </div>
      <div class="center-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/event-design/IMG_8705.jpg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/event-design/IMG_2197.jpg" />
        </FadeInViewport>
        <p>{{ t('paragraphs[1]') }}</p>
      </div>
    </div>
    <div v-else class="container container-1">
      <FadeInViewport delay="0.5s">
        <CarouselWithFade :intervalTimer="2000" :smoothPercent="0.2">
          <img
            src="@/assets/images/sections/event-design/4CBCC66E-E124-47C2-9685-D768A38D929F.jpg"
          />
          <img src="@/assets/images/sections/event-design/IMG_8705.jpg" />
          <img src="@/assets/images/sections/event-design/IMG_2197.jpg" />
        </CarouselWithFade>
      </FadeInViewport>
      <p>{{ t('paragraphs[1]') }}</p>
    </div>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/event-design/IMG_7315.jpg" />
    </FadeInViewport>
    <div v-if="isLargeLandscapeLayout" class="container container-2">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/event-design/3e-duo-focus-bl+texte.jpeg" />
        </FadeInViewport>
      </div>
      <div class="center-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/event-design/2-photo-malo-bien+texte.jpeg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <FadeInViewport delay="0.5s" :debug="true">
          <img src="@/assets/images/sections/event-design/IMG_8198.jpg" />
        </FadeInViewport>
        <p>{{ t('paragraphs[2]') }}</p>
      </div>
    </div>
    <div v-else class="container container-2">
      <FadeInViewport delay="0.5s">
        <CarouselWithFade :intervalTimer="2000" :smoothPercent="0.2">
          <img src="@/assets/images/sections/event-design/3e-duo-focus-bl+texte.jpeg" />
          <img src="@/assets/images/sections/event-design/2-photo-malo-bien+texte.jpeg" />
          <img src="@/assets/images/sections/event-design/IMG_8198.jpg" />
        </CarouselWithFade>
      </FadeInViewport>
      <p>{{ t('paragraphs[2]') }}</p>
    </div>
    <div class="final-container">
      <div v-if="isLargeLandscapeLayout" class="container container-3">
        <div class="left-part">
          <p>{{ t('paragraphs[3]') }}</p>
        </div>
        <div class="right-part">
          <FadeInViewport delay="0.5s">
            <img src="@/assets/images/sections/event-design/IMG_3462_2.jpg" />
          </FadeInViewport>
        </div>
      </div>
      <div v-else class="container container-3">
        <div class="left-part">
          <FadeInViewport delay="0.5s">
            <img src="@/assets/images/sections/event-design/IMG_3462_2.jpg" />
          </FadeInViewport>
        </div>
        <div class="right-part">
          <p>{{ t('paragraphs[3]') }}</p>
        </div>
      </div>
      <div v-if="isLargeLandscapeLayout" class="container container-4">
        <div class="left-part">
          <FadeInViewport delay="0.5s">
            <img src="@/assets/images/sections/event-design/IMG_1992.jpg" />
          </FadeInViewport>
        </div>
        <div class="center-part">
          <FadeInViewport delay="0.5s">
            <img src="@/assets/images/sections/event-design/IMG_3493.jpg" />
          </FadeInViewport>
        </div>
        <div class="right-part">
          <FadeInViewport delay="0.5s">
            <img src="@/assets/images/sections/event-design/IMG_1985.jpg" />
          </FadeInViewport>
        </div>
      </div>
      <div v-else class="container container-4">
        <FadeInViewport delay="0.5s">
          <CarouselWithTranslate enableArrows>
            <img src="@/assets/images/sections/event-design/IMG_3493.jpg" />
            <img src="@/assets/images/sections/event-design/IMG_1985.jpg" />
            <img src="@/assets/images/sections/event-design/IMG_1992.jpg" />
          </CarouselWithTranslate>
        </FadeInViewport>
      </div>
    </div>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title": "Collectif",
      "paragraphs": [
        "Le Collectif Ca va pas trop mal est une association de huit étudiants événementiels. Il est
        composé de Coline Piccino, Mathilde Leveillé, Lily Meunier, Leeloo Dannhauer, Romane Buon,
        Samuel De Montbron et moi-même. Le collectif souhaite donner la réplique aux jeunes créatifs
        d'aujourd'hui autour de projets événementiels qui rassemblent et questionnent. Le premier
        événement organisé par le collectif s'est tenu le 23 mars 2024 à Paris aux Amarres (24 quai
        d'Austerlitz).",
        "Le premier événement a permis de mettre en place une exposition autour de cinq jeunes
        artistes, que le collectif a scénographié. Un graphiste a proposé une performance de live
        calligraphique. Dans un deuxième temps la soirée s'est ouverte sur un DJ set conduit par
        quatre autres artistes.",
        "À bord de la péniche du Quai de la Photo (Quai d'Austerlitz, Paris), le collectif Ça va pas
        trop mal a pensé un événement immersif autour du thème de l'eau. Cette soirée propose un duo
        entre un artiste plasticien et un DJ pour mêler création plastique, création vidéo et sets
        musicaux. Le public est invité à vivre une expérience sensorielle où l'art visuel et le son
        se rencontrent dans une ambiance fluide et vibrante.",
        "\"Alors, c'était comment ?\" est une soirée participative mêlant exposition et DJ set.
        L’événement est imaginé autour du thème des vacances, ce temps suspendu propice à la
        réflexion et à la créativité où l'on prend le temps de photographier, capter, expérimenter.
        Pour parler de ce thème, nous avons souhaité mettre en lumière des artistes aux pratiques
        hybrides : photographes, vidéastes, designers sonores, DJ, dans un lieu pensé à la fois pour
        la contemplation et la célébration de ces instants de vie capturés hors du quotidien."
      ]
    },
    "en": {
      "title": "Collectif",
      "paragraphs": [
        "The Collectif Ca va pas trop mal is an association of eight event management students. It
        is composed of Coline Piccino, Mathilde Leveillé, Lily Meunier, Leeloo Dannhauer, Romane
        Buon, Samuel De Montbron, and myself. The collective aims to provide a platform for today's
        young creatives to engage in event projects that bring people together and encourage
        reflection.",
        "The first event featured an exhibition of five young artists, which the collective
        designed. A graphic designer gave a live calligraphy performance. The evening then kicked
        off with a DJ set by four other artists.",
        "On board the Quai de la Photo barge (Quai d'Austerlitz, Paris), the Ça va pas trop mal
        collective has devised an immersive event around the theme of water. This evening event
        features a duo consisting of a visual artist and a DJ, combining visual art, video art and
        musical sets. The audience is invited to enjoy a sensory experience where visual art and
        sound come together in a fluid and vibrant atmosphere.",
        "‘Alors, c'était comment ?’ is a participatory evening combining an exhibition and a DJ set.
        The event is based on the theme of holidays, that suspended time conducive to reflection and
        creativity, when we take the time to photograph, capture and experiment. To explore this
        theme, we wanted to highlight artists with hybrid practices: photographers, videographers,
        sound designers, DJs, in a venue designed for both contemplation and celebration of these
        moments of life captured outside of everyday life."
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
  max-width: 35vw;
  margin-right: var(--padding-1);
}
.img-part {
  width: 100%;
}
.header-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.full-img {
  width: 100vw;
  height: auto;
}
.container {
  display: flex;
  padding-left: var(--padding-2);
  padding-right: var(--padding-2);
}
.container-1 {
  height: 100vh;
}
.container-1 img {
  object-fit: cover;
}
.container-1 .left-part img {
  width: calc(30vw - var(--padding--1));
  height: 100vh;
  padding-right: var(--padding--1);
}
.container-1 .center-part img {
  width: calc(40vw - var(--padding--1));
  height: 100vh;
  padding-right: var(--padding--1);
}
.container-1 .right-part {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.container-2 {
  align-items: flex-end;
}
.container-2 .left-part img {
  width: calc(33vw - var(--padding--2));
  padding-right: var(--padding--2);
}
.container-2 .center-part img {
  width: calc(33vw - var(--padding--2));
  padding-right: var(--padding--2);
}
.container-2 .right-part {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  row-gap: var(--padding--2);
}
.container-2 .right-part img {
  width: 15vw;
  padding-bottom: 50%;
}
.container-2 p {
  padding-left: var(--padding--1);
}
.final-container {
  display: flex;
  flex-direction: column;
  row-gap: var(--padding--2);
}
.container-3 {
  align-items: center;
}
.container-3 .left-part {
  width: 60vw;
  padding-right: var(--padding--1);
}
.container-3 .right-part {
  width: 30vw;
  height: 30vw;
}
.container-3 img {
  height: 30vw;
  object-fit: cover;
}
.container-4 img {
  height: 60vh;
  object-fit: cover;
}
.container-4 .left-part img {
  padding-right: var(--padding--2);
}
.container-4 .center-part img {
  width: calc(25vw - var(--padding--1));
  padding-right: var(--padding--2);
}
.container-4 .right-part img {
  width: calc(25vw - var(--padding--1));
}
/** small landscape layout */
@media (orientation: landscape) and (max-height: 430px) {
  header {
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .text-part {
    max-width: unset;
    width: 50vw;
    hyphens: auto;
  }
  .text-part .title {
    text-align: center;
  }
  .img-part {
    width: 60vw;
  }
  .header-image {
    width: 100%;
    height: unset;
    object-fit: contain;
  }
  .container {
    height: unset;
    display: flex;
    align-items: center;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .container-1 img,
  .container-2 img {
    max-height: unset;
    width: 30vw;
    max-height: 100vh;
    object-fit: contain;
    margin-right: var(--padding-0);
  }
  .container-1,
  .container-2 {
    height: 100vh;
  }
  .container-3 {
    flex-direction: column;
    align-items: center;
  }
  .container-3 .left-part {
    width: 100%;
    padding-right: 0;
  }
  .container-3 .right-part {
    width: 100%;
  }
  .container-3 img {
    height: 100vh;
  }
  .container-4 {
    margin-top: unset;
  }
  .container-4 img {
    height: 100vh;
  }
}
/** portrait layout */
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) {
  header {
    flex-direction: column;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
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
    margin-top: var(--padding-1);
    height: 50vh;
    width: 100%;
  }
  header img {
    max-height: 50vh;
    object-fit: contain;
  }
  .container {
    height: unset;
    flex-direction: column;
    align-items: center;
    row-gap: 5vh;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .container img {
    max-height: 50vh;
    object-fit: contain;
  }
  .container-3 .left-part {
    width: 100%;
    padding-right: 0;
  }
  .container-3 .right-part {
    width: 100%;
    height: unset;
  }
  .container-3 img {
    height: unset;
    object-fit: contain;
  }
  .container-4 {
    margin-top: var(--padding-1);
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
