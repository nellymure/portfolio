<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import CamargueMuseumArticle from '@/components/sections/exhibition/CamargueMuseumArticle.vue'
// import BigNorthBigSouthArticle from '@/components/sections/exhibition/BigNorthBigSouthArticle.vue'
import DynamicSection from '@/components/DynamicSection.vue'
import { ref, watch } from 'vue'

const { t, locale } = useI18n()
const title = ref(t('title'))
watch(locale, () => {
  title.value = t('title')
})
</script>

<template>
  <DynamicSection
    :title="title"
    :navbar-text-color="{ default: '--color-hex-black', onFolder: '--color-hex-beige-light' }"
  >
    <template #folder-description>
      {{ t('description') }}
    </template>
    <template #articles>
      <CamargueMuseumArticle articleId="01" />
      <!-- <BigNorthBigSouthArticle articleId="02" /> -->
    </template>
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
      "description": "lorem ipsum  begzegezg"
    }
  }
</i18n>

<style scoped>
:deep(.folder) {
  color: var(--color-hex-beige-light);
  background: var(--color-hex-orange);
}
</style>
