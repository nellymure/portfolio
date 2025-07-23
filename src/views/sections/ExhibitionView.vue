<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionNavbar from '@/components/navbars/SectionNavbar.vue'
import CamargueMuseumArticle from '@/components/sections/exhibition/CamargueMuseumArticle.vue'
import BigNorthBigSouthArticle from '@/components/sections/exhibition/BigNorthBigSouthArticle.vue'

const { t } = useI18n()
const articles = ref<HTMLElement | null>(null)
const folderSeparator = ref<HTMLElement | null>(null)
const navbarTextColor = ref('var(--color-hex-beige-light)')

const folderAnimationSpeed = 1

const titleWords = ref(
  t('title')
    .split('\n')
    .map((word) => word.split('')) as string[][],
)

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
  if (!folderSeparator.value) {
    return
  }

  const { innerHeight, innerWidth } = window
  const margin = innerHeight * (innerHeight < innerWidth ? 0.2 : 0.7)
  if (articlesPosY < innerHeight - margin) {
    folderSeparator.value.style.opacity = `${articlesPosY / (innerHeight - margin)}`
  } else if (folderSeparator.value.style.opacity != '1') {
    folderSeparator.value.style.opacity = '1'
  }
}

function getLetterAnimationDelay(idx: number, minDelay: number): string {
  return `${minDelay + idx * 0.1 * folderAnimationSpeed}s`
}
</script>

<template>
  <div class="exhibition">
    <SectionNavbar />
    <div class="content">
      <div class="folder-separator line-break" ref="folderSeparator">
        <!-- <h1 class="folder-title">{{{ title }}}</h1> -->
        <h1>
          <span v-for="word in titleWords" class="d-flex">
            <div
              v-for="(letter, idx) in word"
              class="char"
              :style="{ 'animation-delay': getLetterAnimationDelay(idx, 0.9) }"
            >
              {{ letter }}
            </div>
          </span>
        </h1>
        <div>
          {{ t('description') }}
        </div>
        <div class="btn-open-folder">▼</div>
      </div>
      <section ref="section">
        <CamargueMuseumArticle />
        <BigNorthBigSouthArticle />
      </section>
    </div>
  </div>
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
      "description": ""
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
  color: var(--color-hex-beige-light);
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  background: var(--color-hex-orange);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10vh;
  padding-left: 20vh;
}
.d-flex {
  display: flex;
}
h1 {
  line-height: 1;
  animation: anim2-ease-in-out 2s ease-in-out forwards;
}
h1 .char {
  font-size: 5rem;
}
h1 .char {
  opacity: 0;
  animation: anim1-linear 1s linear forwards;
}
.folder-image {
  height: 60%;
  object-fit: contain;
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
@keyframes anim1-linear {
  0% {
    opacity: 0;
    transform: translateY(0.8em);
    filter: blur(3px);
  }
  30% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes anim2-ease-in-out {
  0% {
    transform: translateX(15em);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
