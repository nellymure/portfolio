<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import FadeIn from '@/components/FadeIn.vue'

const { t } = useI18n()
</script>

<template>
  <article>
    <header>
      <h3>02</h3>
      <!-- <h1>{{ t('title') }}</h1> -->
    </header>
    <section>
      <!-- <p class="first-paragraph">{{ t('paragraphs[0]') }}</p>
      <p>{{ t('paragraphs[1]') }}</p>
      <p>{{ t('paragraphs[2]') }}</p> -->
      <FadeIn delay="0.5s">
        <slot>
          <img
            class="imersive-view-1-image"
            src="@/assets/images/sections/exhibition/2.jpg"
            alt="Immersive view 1 of the project"
          />
          <!-- <div class="comments text-center">{{ t('image.immersiveView') }}</div> -->
        </slot>
      </FadeIn>
      <FadeIn delay="0.5s">
        <slot>
          <img
            class="elevation-project-image"
            src="@/assets/images/sections/exhibition/coupe-partie-3.png"
            alt="Project 3d elevation"
          />
          <!-- <div class="comments text-center">{{ t('image.elevation') }}</div> -->
        </slot>
      </FadeIn>
      <FadeIn delay="0.5s">
        <slot>
          <img
            class="imersive-view-2-image"
            src="@/assets/images/sections/exhibition/partie-4-mapping2.jpg"
            alt="Immersive view 2 of the project"
          />
          <!-- <div class="comments text-center">{{ t('image.immersiveView') }}</div> -->
        </slot>
      </FadeIn>
      <FadeIn delay="0.5s">
        <slot>
          <img
            class="zoning-image"
            src="@/assets/images/sections/exhibition/zoning-musee-camargue.jpg"
            alt="Zoning of the project"
          />
          <!-- <div class="comments text-center">{{ t('image.zoning') }}</div> -->
        </slot>
      </FadeIn>
    </section>
  </article>
</template>

<!-- <i18n>
  {
    'fr': {
      'title': 'Grand Nord\nGrand Sud',
      'paragraphs': [
        'Le projet d\'exposition Grand Nord Grand Sud est le projet de diplôme que j\'ai mené en
        dernière année de licence. Il explore les liens entre deux arts autochtones antipodiques :
        l\'art inuit et l\'art aborigène. Ces deux arts, qu\'en apparence tout oppose, sont reliés par
        leur fonction spirituelle : ils ne sont pas destinés à être vus par une communauté mais par
        les esprits.',
        'La scénographie doit donc pousser le visiteur à se questionner et adapter sa position pour
        mériter l\'accès à ces objets. Au travers d\'un parcours initiatique, il est conduit à
        questionner sa position dominatrice pour communiquer avec le divin.'
        'Un contraste chaud froid permet au visiteur de saisir la nature des pôles géographiques
        qu\'il explore. Ces derniers seront par la suite réunis dans la thématique du céleste :
        on s\'ouvre à une autre cosmologie.'
      ],
      'comments': [
      ],
      'image': {
        'zoning': 'Moodboard conceptuel du projet',
        'elevation': 'Élévation sensible du projet',
        'immersiveViews': 'Vues immersives du projet'
      }
    },
    'en': {
    }
  }
</i18n> -->

<style scoped>
@import '@/assets/sections-view.css';
</style>
