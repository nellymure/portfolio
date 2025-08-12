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
        <div>
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
    <div class="container container-1">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img
            class=""
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
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/event-design/IMG_7315.jpg" />
    </FadeInViewport>
    <div class="container container-2">
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
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/event-design/IMG_8198.jpg" />
        </FadeInViewport>
        <p>{{ t('paragraphs[2]') }}</p>
      </div>
    </div>
    <div class="final-container">
      <div class="container container-3">
        <div class="left-part">
          <p>{{ t('paragraphs[3]') }}</p>
        </div>
        <div class="right-part">
          <FadeInViewport delay="0.5s">
            <img src="@/assets/images/sections/event-design/IMG_3462_2.jpg" />
          </FadeInViewport>
        </div>
      </div>
      <div class="container container-4">
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
}
.text-part {
  max-width: 35vw;
  margin-right: var(--half-padding-x);
}
h1 {
  font-size: 7em;
  font-family: var(--font-family-adobe-song);
  font-weight: var(--font-weight-light);
  line-height: 1;
  text-align: left;
  margin-bottom: 1em;
}
.img-part {
  width: 100%;
}
.header-image {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
.full-img {
  width: 100vw;
  height: auto;
}
.container {
  display: flex;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.container-1 {
  height: 100vh;
}
.container-1 img {
  object-fit: cover;
}
.container-1 .left-part img {
  width: calc(30vw - var(--half-padding-x));
  height: 100vh;
  padding-right: var(--half-padding-x);
}
.container-1 .center-part img {
  width: calc(40vw - var(--half-padding-x));
  height: 100vh;
  padding-right: var(--half-padding-x);
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
  width: calc(33vw - var(--half-padding-x) / 2);
  padding-right: calc(var(--half-padding-x) / 2);
}
.container-2 .center-part img {
  width: calc(33vw - var(--half-padding-x) / 2);
  padding-right: calc(var(--half-padding-x) / 2);
}
.container-2 .right-part {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  row-gap: calc(var(--half-padding-x) / 2);
}
.container-2 .right-part img {
  width: 15vw;
  padding-bottom: 50%;
}
.final-container {
  display: flex;
  flex-direction: column;
  row-gap: calc(var(--half-padding-x) / 2);
}
.container-3 {
  align-items: center;
}
.container-3 .left-part {
  width: 60vw;
  padding-right: var(--half-padding-x);
}
.container-3 .right-part {
  width: 40vw;
  overflow: hidden;
}
.container-4 img {
  height: 60vh;
  object-fit: cover;
}
.container-4 .left-part img {
  width: calc(50vw - var(--half-padding-x) * 2);
  padding-right: calc(var(--half-padding-x) / 2);
}
.container-4 .center-part img {
  width: calc(25vw - var(--half-padding-x));
  padding-right: calc(var(--half-padding-x) / 2);
}
.container-4 .right-part img {
  width: calc(25vw - var(--half-padding-x));
}
</style>
