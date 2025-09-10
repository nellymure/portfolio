<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeInViewport from '@/components/FadeInViewport.vue'
import ColorPalette from '@/components/ColorPalette.vue'

defineProps({
  articleId: {
    type: String,
    required: true,
  },
})
const { t } = useI18n()
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
          <img src="@/assets/images/sections/event-design/IMG_5919.jpg" />
        </FadeInViewport>
      </div>
    </header>
    <div class="container container-1">
      <div class="left-part">
        <FadeInViewport delay="0.5s" :debug="true">
          <img src="@/assets/images/sections/event-design/IMG_5917.jpg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <p>{{ t('paragraphs[1]') }}</p>
        <ColorPalette :colors="['#A886BB', '#E3D1E6', '#3D225A', '#52499A', '#200B12']" />
      </div>
    </div>
    <div class="container container-2">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/event-design/IMG_5918.jpg" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/event-design/IMG_5916.jpg" />
        </FadeInViewport>
      </div>
    </div>
    <div class="container container-3">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img
            src="@/assets/images/sections/event-design/ARCH_tefact_Project_Augustins_QuentinMariotti-20.jpg"
          />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <FadeInViewport delay="0.5s">
          <img
            src="@/assets/images/sections/event-design/ARCH_tefact_Project_Augustins_quentinMariotti-18.jpg"
          />
        </FadeInViewport>
      </div>
    </div>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title": "Fête des\nlumières\n2021",
      "paragraphs": [
        "A l'occasion de la Fête des Lumières 2021, la cour du Lycée La Martinière-Diderot accueille
        treize arches lumineuses qui redessinent l’architecture du lieu. Elles symbolisent tout à la
        fois les parcours des élèves et étudiants qui les habitent et les traversent chaque jour. La
        déambulation labyrinthique assure un lien entre passé et futur. Le visiteur peut laisser
        libre cours à son imagination pour découvrir le lieu avec un regard nouveau.",
        "Ce projet a été conduit par la section événement et espace de La Martinière Diderot. Elles
        ont été rejointes par des étudiants en design sonore de l'ENSATT et  des étudiants en régie
        lumière du lycée Branly. Le montage et la participation à l'événement ont été de réels
        engagements professionnalisants."
      ]
    },
    "en": {
      "title": "Festival of\nlights\n2021",
      "paragraphs": [
        "For the 2021 Festival of Lights, the courtyard of Lycée La Martinière-Diderot is hosting
        thirteen illuminated arches that redefine the architecture of the space. They symbolise both
        the journeys of the pupils and students who inhabit and pass through them every day. The
        labyrinthine walkway provides a link between the past and the future. Visitors can give free
        rein to their imagination and discover the place with a new perspective.",
        "This project was led by the events and space department at La Martinière Diderot. They were
        joined by sound design students from ENSATT and lighting design students from Lycée Branly.
        The installation and participation in the event were real professional experiences."
      ]
    }
  }
</i18n>

<style lang="css" scoped>
header {
  display: flex;
  align-items: center;
  padding-left: var(--padding-2);
  padding-right: var(--padding-0);
}
.text-part {
  max-width: 35vw;
  margin-right: var(--padding-1);
}
header img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: var(--padding-2);
  padding-right: var(--padding-2);
}
.container-1 {
  padding-left: var(--padding-0);
}
.container img {
  display: flex;
}
.container-1 .left-part img {
  width: 50vw;
  padding-right: var(--padding-0);
}
.container-2 {
  justify-content: flex-start;
}
.container-2 img {
  object-fit: cover;
}
.container-2 .left-part img {
  width: calc(50vw - var(--padding-2) - var(--padding-0));
  height: 80vh;
  padding-right: var(--padding-0);
}
.container-2 .right-part img {
  width: calc(50vw - var(--padding-2));
  height: 80vh;
}
.container-3 {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.container-3 img {
  object-fit: cover;
}
.container-3 .left-part img {
  width: calc(50vw - var(--padding-0) * 2);
}
.container-3 .right-part img {
  width: 25vw;
}
/** portrait layout and small landscape layout */
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) or (max-height: 430px) {
  header {
    flex-direction: column;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  header .text-part {
    height: unset;
    max-width: 100%;
    width: 100%;
    align-items: flex-start;
    margin-right: 0;
  }
  header .text-part .title {
    text-align: center;
  }
  header .img-part {
    margin-top: var(--padding-1);
    width: 100%;
  }
  header img {
    height: unset;
    object-fit: contain;
  }
}
/** small landscape layout */
@media (orientation: landscape) and (max-height: 430px) {
  .container {
    display: flex;
    align-items: center;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .container-1 .left-part img {
    max-height: 80vh;
    object-fit: contain;
    padding-right: 0;
  }
  .container-1 .left-part img {
    padding-right: var(--padding--1);
    max-height: unset;
  }
  .container-2 .left-part img {
    width: calc(50vw - var(--padding-0));
    padding-right: var(--padding--1);
  }
  .container-2 .right-part img {
    width: calc(50vw - var(--padding-0));
  }
  .container-3 {
    align-items: flex-end;
  }
}
/** portrait layout */
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) {
  .container {
    flex-direction: column;
    row-gap: var(--article-row-gap);
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .container-1 {
    row-gap: var(--article-row-gap);
    margin-bottom: var(--color-palette-bottom-margin);
  }
  .container img {
    width: 100%;
    height: 50vh;
    object-fit: contain;
  }
  .container-1 .left-part {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  .container-1 .left-part img {
    padding-right: 0;
    width: 100%;
    height: auto;
  }
  .container-1 .right-part {
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
  }
  .container-2 .left-part img {
    width: 100%;
    height: auto;
    padding-right: 0;
  }
  .container-2 .right-part img {
    width: 100%;
    height: auto;
    padding-right: 0;
  }
  .container-3 .left-part img {
    width: 100%;
    height: auto;
    padding-right: 0;
  }
  .container-3 .right-part img {
    width: 100%;
    height: auto;
    padding-right: 0;
  }
}
</style>
