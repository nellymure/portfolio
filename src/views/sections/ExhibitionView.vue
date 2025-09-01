<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import CamargueMuseumArticle from '@/components/sections/exhibition/CamargueMuseumArticle.vue'
import BigNorthBigSouthArticle from '@/components/sections/exhibition/BigNorthBigSouthArticle.vue'
import ReflectionOnTheWorldArticle from '@/components/sections/exhibition/ReflectionOnTheWorldArticle.vue'
import DynamicSection from '@/components/DynamicSection.vue'
import { ref, watch } from 'vue'

const { t, locale } = useI18n()
const title = ref(t('title'))
const description = ref(t('description'))
watch(locale, () => {
  title.value = t('title')
  description.value = t('description')
})
</script>

<template>
  <DynamicSection
    :title="title"
    :description="description"
    :navbarTextColor="{ default: '--color-hex-orange', onFolder: '--color-hex-beige-light' }"
  >
    <CamargueMuseumArticle articleId="01" />
    <BigNorthBigSouthArticle articleId="02" />
    <ReflectionOnTheWorldArticle articleId="03" />
  </DynamicSection>
</template>

<i18n>
  {
    "fr": {
      "title": "Scenographie\nd'exposition",
      "description": "J'ai toujours été passionnée par la scénographie : j'aime concevoir des
      espaces qui racontent, suggèrent, émerveillent. Mettre en lumière un objet, guider le regard,
      révéler une histoire est une forme de narration spatiale, un jeu de composition au service
      d'un propos, d'un lieu, d'un public. Être scénographe, c'est transmettre et instruire
      autrement par l'espace, le rythme et l'émotion."
    },
    "en": {
      "title": "Exhibition\nscenography",
      "description": "I have always been passionate about scenography: I love designing spaces that
      tell stories, suggest ideas and inspire wonder. Highlighting an object, guiding the eye and
      revealing a story is a form of spatial narration, a compositional game that serves a purpose,
      a place and an audience. Being a scenographer means communicating and educating in a different
      way through space, rhythm and emotion."
    }
  }
</i18n>

<style lang="css" scoped>
:deep(.folder) {
  color: var(--color-hex-beige-light);
  background: var(--color-hex-orange);
}
</style>
