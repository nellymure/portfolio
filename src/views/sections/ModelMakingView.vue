<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DynamicSection from '@/components/DynamicSection.vue'
import { ref, watch } from 'vue'
import ModelMakingArticle from '@/components/sections/model-making/ModelMakingArticle.vue'

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
    :navbar-text-color="{ default: '--color-hex-black', onFolder: '--color-hex-black' }"
  >
    <ModelMakingArticle articleId="01" />
  </DynamicSection>
</template>

<i18n>
  {
    "fr": {
      "title": "Maquettes",
      "description": "Précise et exigeante par nature, j'aborde la création de maquettes avec envie.
      Cet outil concret permet de donner forme à l'espace, de traduire l'identité d'un lieu et de
      projeter une intention. Support de visualisation immersif, la maquette prolonge la démarche
      créative en rendant le projet tangible, sensible et évolutif.",
    },
    "en": {
      "title": "Model making",
      "description": "Precise and demanding by nature, I approach model making with enthusiasm. This
      concrete tool allows me to give shape to space, convey the identity of a place and project an
      intention. As an immersive visualisation aid, the model extends the creative process by making
      the project tangible, perceptible and evolutive.",
    }
  }
</i18n>

<style scoped>
:deep(.folder) {
  color: var(--color-hex-black);
  background: var(--color-hex-violet2);
}
</style>
