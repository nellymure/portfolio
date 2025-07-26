<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionNavbar from '@/components/navbars/SectionNavbar.vue'
import CamargueMuseumArticle from '@/components/sections/exhibition/CamargueMuseumArticle.vue'
import BigNorthBigSouthArticle from '@/components/sections/exhibition/BigNorthBigSouthArticle.vue'
import { onI18nLocaleChanged } from '@/i18n/i18n'

interface HTMLAnimated {
  element: HTMLElement
  animationDuration: number
  animationDelay: number
}
const { t } = useI18n()
const html = {
  section: ref<HTMLElement | null>(null),
  animatedOnScroll: ref<HTMLAnimated[]>([]),
  animatedOnLocalChanged: ref<HTMLAnimated[]>([]),
}
const navbarTextColor = ref('var(--color-hex-beige-light)')
const folderAnimationDurationMs = 2000
const letterAnimationDurationMs = 500
const descriptionAnimationDurationMs = 1000
const arrowAnimationDurationMs = 1500

const titleWords = ref(
  t('title')
    .split(/[ \n]+/)
    .map((word) => word.split('')) as string[][],
)
onI18nLocaleChanged((_event) => {
  titleWords.value = t('title')
    .split(/[ \n]+/)
    .map((word) => word.split('')) as string[][]
  html.animatedOnScroll.value
    .filter(({ element }) => element)
    .forEach(({ element, animationDuration, animationDelay }) => {
      setAnimationProgress(element, animationDuration, 0, animationDelay, false)
    })
  html.animatedOnLocalChanged.value
    .filter(({ element }) => element)
    .forEach(({ element, animationDuration, animationDelay }) => {
      setAnimationProgress(element, animationDuration, 0, animationDelay, false)
    })
})

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event#examples
 */
let lastKnownScrollPosition = 0
let ticking = false
function scrollEventThrottling() {
  lastKnownScrollPosition = window.scrollY
  if (!ticking) {
    window.requestAnimationFrame(() => {
      onScrollPosition(lastKnownScrollPosition)
      ticking = false
    })
    ticking = true
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollEventThrottling)
  window.addEventListener('resize', scrollEventThrottling)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollEventThrottling)
  window.removeEventListener('resize', scrollEventThrottling)
})
let previousSectionPosition: number | undefined = undefined
function onScrollPosition(_scrollPosition: number) {
  if (!html.section.value) {
    return
  }
  const sectionPosition = html.section.value.getBoundingClientRect().top
  navbarTextColor.value = `var(${sectionPosition > 0 ? '--color-hex-beige-light' : '--color-hex-black'})`
  if (previousSectionPosition != undefined && sectionPosition > 0) {
    animateFolderOnScroll(sectionPosition)
  }
  previousSectionPosition = sectionPosition
}
function setAnimationProgress(
  element: HTMLElement,
  duration: number,
  progress: number,
  delay: number,
  pause: boolean = true,
) {
  const totalTime = delay + duration
  const currentTime = progress * totalTime
  element.getAnimations().forEach((animation) => {
    animation.currentTime = currentTime
    if (pause && animation.playState != 'paused') {
      animation.pause()
    } else if (!pause && animation.playState == 'paused') {
      animation.play()
    }
  })
}
function animateFolderOnScroll(sectionPosition: number) {
  const innerHeight = window.innerHeight * 0.9 // remove 0.1vh margin
  if (sectionPosition > innerHeight) {
    return
  }
  const percent = sectionPosition / innerHeight
  html.animatedOnScroll.value
    .filter(({ element }) => element)
    .forEach(({ element, animationDuration, animationDelay }) => {
      setAnimationProgress(element, animationDuration, percent, animationDelay)
    })
}
function getLetterAnimationDelayMs(idx: number): number {
  return (0.1 + idx * 0.1) * 1000
}
function smoothScrollToSection(): void {
  html.section.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="exhibition">
    <SectionNavbar />
    <div class="content">
      <div class="folder-separator line-break">
        <h1
          :ref="
            (element) =>
              html.animatedOnScroll.value.push({
                element: element as HTMLElement,
                animationDuration: folderAnimationDurationMs,
                animationDelay: 0,
              })
          "
        >
          <span v-for="(word, wIdx) in titleWords" :key="wIdx" class="d-flex">
            <div
              v-for="(letter, lIdx) in word"
              :key="lIdx"
              class="char"
              :style="{ 'animation-delay': `${getLetterAnimationDelayMs(lIdx)}ms` }"
              :ref="
                (element) =>
                  html.animatedOnScroll.value.push({
                    element: element as HTMLElement,
                    animationDuration: letterAnimationDurationMs,
                    animationDelay: getLetterAnimationDelayMs(lIdx),
                  })
              "
            >
              {{ letter }}
            </div>
          </span>
        </h1>
        <div
          class="folder-description"
          :ref="
            (element) =>
              html.animatedOnScroll.value.push({
                element: element as HTMLElement,
                animationDuration: descriptionAnimationDurationMs,
                animationDelay: 0,
              })
          "
        >
          {{ t('description') }}
        </div>
        <div
          class="btn-open-folder"
          :ref="
            (element) =>
              html.animatedOnLocalChanged.value.push({
                element: element as HTMLElement,
                animationDuration: arrowAnimationDurationMs,
                animationDelay: 2 * descriptionAnimationDurationMs,
              })
          "
          @click="smoothScrollToSection()"
        >
          ▼
        </div>
      </div>
      <section :ref="(el) => (html.section.value = el as HTMLElement)">
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
      "description": "lorem ipsum  begzegezg"
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
  height: 90vh;
  width: 100%;
  background: var(--color-hex-orange);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
  padding-left: 20vh;
  padding-right: 20vh;
}
.d-flex {
  display: flex;
}
.folder-separator h1 {
  line-height: 1;
  font-size: 5rem;
  align-self: flex-start;
  font-family: var(--font-family-cormorant-infant);
  font-weight: var(--font-weight-light);
  text-transform: uppercase;
  animation: folder-h1-animation calc(1ms * v-bind(folderAnimationDurationMs))
    cubic-bezier(0, 0, 0.2, 1) both;
}
.char {
  opacity: 0;
  animation: letter-animation calc(1ms * v-bind(letterAnimationDurationMs))
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.folder-description {
  padding-top: 4em;
  animation: folder-description-animation calc(1ms * v-bind(descriptionAnimationDurationMs))
    cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.btn-open-folder {
  opacity: 0;
  color: var(--color-hex-beige-light);
  animation: arrow-animation calc(1ms * v-bind(arrowAnimationDurationMs)) linear
    calc(2ms * v-bind(descriptionAnimationDurationMs)) infinite none;
  padding: 0 50% 2em 50%;
}
@media (orientation: portrait) {
  .folder-separator {
    padding-bottom: 5vh;
    padding-left: 0;
    padding-right: 0;
  }
}
@keyframes letter-animation {
  0% {
    opacity: 0;
    transform: translateY(0.6em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes folder-h1-animation {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes folder-description-animation {
  0% {
    filter: blur(0.5em);
    opacity: 0;
  }
  80% {
    filter: blur(0px);
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes arrow-animation {
  0% {
    transform: translateZ(-1em) translateY(-1em);
    opacity: 0;
  }
  50% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-1em) translateY(1em);
    opacity: 0;
  }
}
</style>
