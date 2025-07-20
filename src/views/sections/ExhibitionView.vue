<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionNavbar from '@/components/navbars/SectionNavbar.vue'
import CamargueMuseumArticle from '@/components/sections/exhibition/CamargueMuseumArticle.vue'

const { t } = useI18n()
const articles = ref<HTMLElement | null>(null)
const folderImageContainer = ref<HTMLElement | null>(null)
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
  if (!folderImageContainer.value) {
    return
  }

  const { innerHeight, innerWidth } = window
  const margin = innerHeight * (innerHeight < innerWidth ? 0.2 : 0.7)
  if (articlesPosY < innerHeight - margin) {
    folderImageContainer.value.style.opacity = `${articlesPosY / (innerHeight - margin)}`
  } else if (folderImageContainer.value.style.opacity != '1') {
    folderImageContainer.value.style.opacity = '1'
  }
}
</script>

<template>
  <div class="exhibition">
    <SectionNavbar />
    <div class="content">
      <div class="folder-separator">
        <div class="folder-image-container" ref="folderImageContainer">
          <img
            class="folder-image"
            src="@/assets/images/sections/exhibition/coupe-concept.jpg"
            alt="Exhibition main image"
          />
        </div>
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
.folder-image-container {
  position: relative;
  height: 60%;
  width: 60%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.folder-image {
  position: absolute;
  width: 130%;
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
