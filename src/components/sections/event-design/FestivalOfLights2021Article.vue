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
      </div>
      <div class="img-part">
        <FadeInViewport delay="0.5s">
          <img src="@/assets/images/sections/event-design/IMG_5919.jpg" />
        </FadeInViewport>
      </div>
    </header>
    <div class="container container-1">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
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

<style scoped>
article {
  display: flex;
  flex-direction: column;
  row-gap: 20vh;
}
header {
  display: flex;
  padding-left: var(--padding-x);
  padding-right: var(--half-padding-x);
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
header img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.container-1 {
  padding-left: var(--half-padding-x);
}
.container img {
  display: flex;
}
.container-1 .left-part img {
  width: 50vw;
  padding-right: var(--half-padding-x);
}
.container-2 {
  justify-content: flex-start;
}
.container-2 img {
  object-fit: cover;
}
.container-2 .left-part img {
  width: calc(50vw - var(--padding-x) - var(--half-padding-x));
  height: 80vh;
  padding-right: var(--half-padding-x);
}
.container-2 .right-part img {
  width: calc(50vw - var(--half-padding-x));
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
  width: calc(50vw - var(--half-padding-x) * 2);
}
.container-3 .right-part img {
  width: 25vw;
}

@media (orientation: portrait) {
  article {
    row-gap: 5vh;
  }
  header {
    flex-direction: column;
    padding-right: var(--padding-x);
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
    row-gap: 3vh;
    padding-left: var(--half-padding-x);
    padding-right: var(--half-padding-x);
  }
  .container-1 {
    row-gap: 5vh;
    margin-bottom: -3vh;
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
  .container-3 {
    margin-top: -2vh;
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
