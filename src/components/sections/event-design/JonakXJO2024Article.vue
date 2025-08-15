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
          <img class="header-image" src="@/assets/images/sections/event-design/Moodboard.jpg" />
        </FadeInViewport>
      </div>
    </header>
    <div class="container">
      <div class="left-part">
        <FadeInViewport delay="0.5s">
          <img class="header-image" src="@/assets/images/sections/event-design/piste-course.png" />
        </FadeInViewport>
      </div>
      <div class="right-part">
        <p>{{ t('paragraphs[1]') }}</p>
        <ColorPalette :colors="['#2C333E', '#355B3F', '#7CA07D', '#EBEADD', '#CDC6BB']" />
      </div>
    </div>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/event-design/1.jpg" />
    </FadeInViewport>
    <FadeInViewport delay="0.5s">
      <img class="img-80" src="@/assets/images/sections/event-design/11.jpg" />
    </FadeInViewport>
    <FadeInViewport delay="0.5s">
      <img class="full-img" src="@/assets/images/sections/event-design/7.jpg" />
    </FadeInViewport>
    <div class="carousel-arrow">
      <FadeInViewport delay="0.5s">
        <CarouselWithTranslate enableArrows>
          <img src="@/assets/images/sections/event-design/plan-piste.jpg" />
          <img src="@/assets/images/sections/event-design/4.jpg" />
          <img src="@/assets/images/sections/event-design/12.jpg" />
        </CarouselWithTranslate>
      </FadeInViewport>
    </div>
  </article>
</template>

<i18n>
  {
    "fr": {
      "title": "Jonak x JO\n2024",
      "paragraphs": [
        "Conduit en amont par la réalisation d'un book de direction artistique sur le thème du pied,
        ce projet événementiel imagine un événement Jonak pendant les Jeux Olympiques de Paris 2024.
        Jouant sur la temporalité sportive du calendrier, Jonak pousse ses clients à essayer les
        chaussures de la marque sur une piste qui arbore les obstacles quotidiens des parisiens.",
        "L’événement Jonak x JO 2024 prend la forme d’une analogie entre la piste d’athlétisme et le
        cours d’une journée parisienne. Le sportif Jonak est amené à tester le confort des
        chaussures le long d’une piste atypique. Constituée de différents revêtements de sols et
        obstacles qu’il est possible de rencontrer au quotidien Jonak challenge les participants."
      ]
    },
    "en": {
      "title": "Jonak x JO\n2024",
      "paragraphs": [
        "Inspired by the creation of an art direction book on the theme of feet, this event project
        imagines a Jonak event during the 2024 Paris Olympic Games. Playing on the sporting nature
        of the calendar, Jonak encourages its customers to try out the brand's shoes on a track that
        features the everyday obstacles faced by Parisians.",
        "The Jonak x JO 2024 event takes the form of an analogy between the athletics track and a
        typical day in Paris. Jonak athletes are invited to test the comfort of the shoes along an
        unusual track. Consisting of different floor surfaces and obstacles that can be encountered
        on a daily basis, Jonak challenges participants."
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
  font-family: var(--font-family-antic-didone);
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
.container {
  display: flex;
  align-items: center;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.container .left-part {
  min-width: 50vw;
  width: 50vw;
  display: flex;
  justify-content: center;
  padding-right: var(--half-padding-x);
}
.container .right-part {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.container img {
  width: 100%;
}
.full-img {
  width: 100vw;
  height: auto;
}
.img-80 {
  width: 80vw;
  height: auto;
  margin-left: 10vw;
}
.carousel-arrow {
  width: 80%;
  margin-left: 10%;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.carousel-arrow img {
  width: 100%;
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
    margin-bottom: -3vh;
  }
  .container .left-part img {
    width: calc(100vw - var(--padding-x));
    height: 50vh;
    object-fit: contain;
    padding-left: 0;
    padding-right: 0;
  }
  .container .right-part {
    padding-top: 5vh;
  }
  .carousel-arrow {
    width: 100%;
    margin-left: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .carousel-arrow :deep(.nav-btn) {
    width: 10vw;
  }
  .img-80 {
    margin-left: 0;
    width: 100%;
    padding-left: var(--padding-x);
    padding-right: var(--padding-x);
  }
}
</style>
