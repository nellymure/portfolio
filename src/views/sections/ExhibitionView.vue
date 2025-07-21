<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionNavbar from '@/components/navbars/SectionNavbar.vue'
import CamargueMuseumArticle from '@/components/sections/exhibition/CamargueMuseumArticle.vue'

const { t } = useI18n()
const articles = ref<HTMLElement | null>(null)
const folderImage = ref<HTMLElement | null>(null)
const navbarTextColor = ref('var(--color-hex-beige-light)')

function updateTextColor() {
  if (!articles.value) {
    return
  }
  const { top } = articles.value.getBoundingClientRect()
  navbarTextColor.value = `var(${top > 0 ? '--color-hex-beige-light' : '--color-hex-black'})`
  if (top > 0) {
    animateFolderImage(top)
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateTextColor)
  window.addEventListener('resize', updateTextColor)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateTextColor)
  window.removeEventListener('resize', updateTextColor)
})

function animateFolderImage(articlesPosY: number) {
  if (!folderImage.value) {
    return
  }

  const { innerHeight, innerWidth } = window
  const margin = innerHeight * (innerHeight < innerWidth ? 0.2 : 0.7)
  if (articlesPosY < innerHeight - margin) {
    folderImage.value.style.opacity = `${articlesPosY / (innerHeight - margin)}`
  } else if (folderImage.value.style.opacity != '1') {
    folderImage.value.style.opacity = '1'
  }
}
</script>

<template>
  <div class="exhibition">
    <SectionNavbar />
    <div class="content">
      <div class="folder-separator">
        <img
          class="folder-image"
          ref="folderImage"
          src="@/assets/images/sections/exhibition/coupe-concept.jpg"
          alt="Exhibition main image"
        />
        <div class="folder-title">
          {{ t('title') }}
        </div>
        <div class="btn-open-folder">▼</div>
      </div>
      <div class="articles" ref="articles">
        <CamargueMuseumArticle />
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "fr": {
      "title": "Scenographie d'exposition"
    },
    "en": {
      "title": "Exhibition scenography"
    }
  }
</i18n>

<style scoped>
@import '@/assets/sections-view.css';

.navbar {
  color: v-bind(navbarTextColor);
}
.exhibition {
  width: 100%;
  height: auto;
}
.folder-separator {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  background: var(--color-hex-orange);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10vh;
}
.folder-image {
  height: 60%;
  object-fit: contain;
}
.folder-title {
  color: var(--color-hex-beige-light);
}
.btn-open-folder {
  color: var(--color-hex-beige-light);
}
@media (orientation: portrait) {
  .folder-separator {
    height: 50vh;
    padding-bottom: 5vh;
  }
  .folder-image-container {
    height: 45vw;
    width: 90vw;
  }
}
</style>
