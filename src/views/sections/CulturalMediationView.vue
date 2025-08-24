<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DynamicSection from '@/components/DynamicSection.vue'
import { ref, watch } from 'vue'
import MediationBookletArticle from '@/components/sections/cultural-mediation/MediationBookletArticle.vue'
import MediationToolArticle from '@/components/sections/cultural-mediation/MediationToolArticle.vue'
import MediationArticle from '@/components/sections/cultural-mediation/MediationArticle.vue'
import Material1Experiments100 from '@/components/sections/cultural-mediation/Material1Experiments100Article.vue'

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
    <MediationBookletArticle articleId="01" />
    <MediationToolArticle articleId="02" />
    <MediationArticle articleId="03" />
    <Material1Experiments100 articleId="04" />
  </DynamicSection>
</template>

<i18n>
  {
    "fr": {
      "title": "Médiation\nculturelle",
      "description": "La médiation culturelle incarne une dimension humaine et sociale qui me tient
      à cœur. Elle crée des ponts entre les œuvres et le public, favorisant la compréhension et
      l'échange. Concevoir des dispositifs ou des formats adaptés, utiliser des médiums variés pour
      engager et sensibiliser, voilà ce qui me motive : rendre la culture vivante et accessible à
      tous.",
    },
    "en": {
      "title": "Cultural\nmediation",
      "description": "Cultural mediation embodies a human and social dimension that is close to my
      heart. It builds bridges between works of art and the public, promoting understanding and
      exchange. Designing appropriate mechanisms and formats, using a variety of media to engage and
      raise awareness—this is what motivates me: making culture alive and accessible to all.",
    }
  }
</i18n>

<style lang="css" scoped>
:deep(.folder) {
  color: var(--color-hex-black);
  background: var(--color-hex-beige2);
}
</style>
