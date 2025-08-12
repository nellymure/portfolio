<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DynamicSection from '@/components/DynamicSection.vue'
import { ref, watch } from 'vue'
import JonakXJO2024Article from '@/components/sections/design-event/JonakXJO2024Article.vue'
import CaVaPasTropMalArticle from '@/components/sections/design-event/CaVaPasTropMalArticle.vue'

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
    :navbar-text-color="{ default: '--color-hex-black', onFolder: '--color-hex-beige-light' }"
  >
    <JonakXJO2024Article articleId="01" />
    <CaVaPasTropMalArticle articleId="02" />
  </DynamicSection>
</template>

<i18n>
  {
    "fr": {
      "title": "Design\névénementiel",
      "description": "Le design événementiel est un terrain d'expression unique, où la création se
      met au service d'expériences mémorables. Concevoir un moment fort, porteur de sens, au
      croisement d'une identité, d'un message ou d'une ambition est un défi qui me passionne.
      Ce secteur conjugue imagination, organisation et émotion : un équilibre stimulant entre
      conception, mise en scène et impact."
    },
    "en": {
      "title": "Event\ndesign",
      "description": "lorem ipsum  begzegezg"
    }
  }
</i18n>

<style scoped>
:deep(.folder) {
  color: var(--color-hex-beige-light);
  background: var(--color-hex-salmon-dark);
}
</style>
