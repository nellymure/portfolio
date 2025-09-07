<script setup lang="ts">
import { onUnmounted, onMounted, ref, watch, type PropType } from 'vue'
import SectionNavbar from '@/components/navbars/SectionNavbar.vue'
import IconChevron from './icons/IconChevron.vue'

interface HTMLAnimated {
  element: HTMLElement
  animationDuration: number
  animationDelay: number
}
interface NavbarTextColor {
  default: string
  onFolder: string
}
const props = defineProps({
  navbarTextColor: {
    type: Object as PropType<NavbarTextColor>,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
const html = {
  section: ref<HTMLElement | null>(null),
  animatedOnScroll: ref<HTMLAnimated[]>([]),
  animatedOnLocalChanged: ref<HTMLAnimated[]>([]),
}
const navbarTextColor = ref(`var(${props.navbarTextColor?.onFolder}`)
const folderAnimationDurationMs = 2000
const letterAnimationDurationMs = 500
const descriptionAnimationDurationMs = 1000
const arrowAnimationDurationMs = 1500

const titleWords = ref(splitWordsByLine(props.title))
watch(
  () => props.title,
  (newTitle) => {
    titleWords.value = splitWordsByLine(newTitle)
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
  },
)
function splitWordsByLine(text: string): string[][] {
  return text.split(/[ \n]+/).map((word) => word.split('')) as string[][]
}
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
let initialSectionPosition: number
function onResize() {
  initialSectionPosition = html.section.value!.getBoundingClientRect().top
  scrollEventThrottling()
}
onMounted(() => {
  window.addEventListener('scroll', scrollEventThrottling)
  window.addEventListener('resize', onResize)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEventThrottling)
  window.removeEventListener('resize', onResize)
})
function onScrollPosition(scrollPosition: number) {
  if (!html.section.value) {
    return
  }

  const sectionPosition = html.section.value.getBoundingClientRect().top
  if (!initialSectionPosition) {
    initialSectionPosition = sectionPosition
  }

  navbarTextColor.value = `var(${sectionPosition > 0 ? props.navbarTextColor?.onFolder : props.navbarTextColor?.default})`

  if (sectionPosition <= initialSectionPosition) {
    const percent = sectionPosition / initialSectionPosition
    html.animatedOnScroll.value
      .filter(({ element }) => element)
      .forEach(({ element, animationDuration, animationDelay }) => {
        setAnimationProgress(element, animationDuration, percent, animationDelay)
      })
  }
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
function getLetterAnimationDelayMs(idx: number): number {
  return (0.1 + idx * 0.1) * 1000
}
function smoothScrollToSection(): void {
  html.section.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="dynamic-section">
    <SectionNavbar />
    <div class="content">
      <div class="folder line-break" @click="smoothScrollToSection()">
        <div class="folder-text">
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
            <div>{{ description }}</div>
          </div>
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
        >
          <IconChevron direction="bottom" />
        </div>
      </div>
      <section :ref="(el) => (html.section.value = el as HTMLElement)">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<style lang="css" scoped>
.navbar {
  color: v-bind(navbarTextColor);
}
.dynamic-section {
  width: 100%;
  overflow: hidden;
}
.folder {
  padding: var(--navbar-height) var(--padding-x) 0 var(--padding-x);
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.folder-text {
  display: flex;
  flex-direction: column;
  width: auto;
}
.folder h1 {
  line-height: 1;
  font-size: var(--font-size-4);
  align-self: center;
  font-family: var(--font-family-cormorant-infant);
  font-weight: var(--font-weight-light);
  text-transform: uppercase;
  animation: folder-h1-animation calc(1ms * v-bind(folderAnimationDurationMs))
    cubic-bezier(0, 0, 0.2, 1) both;
}
@media (orientation: landscape) and (min-width: 960px) {
  .folder {
    padding: var(--navbar-height) 0 0 0;
  }
  .folder h1 {
    align-self: flex-start;
  }
  .folder-text {
    width: 50vw;
  }
}
.char {
  opacity: 0;
  animation: letter-animation calc(1ms * v-bind(letterAnimationDurationMs))
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.folder-description {
  font-size: var(--font-size-0);
  padding: 1em 0 0 0;
  animation: folder-description-animation calc(1ms * v-bind(descriptionAnimationDurationMs))
    cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.btn-open-folder {
  justify-self: flex-end;
  opacity: 0;
  animation: arrow-animation calc(1ms * v-bind(arrowAnimationDurationMs)) linear
    calc(2ms * v-bind(descriptionAnimationDurationMs)) infinite none;
  padding: 2em 0;
}
section {
  background-color: white;
  line-height: 2;
  padding-top: var(--section-row-gap);
  padding-bottom: calc(var(--section-row-gap) / 2);
  display: flex;
  flex-direction: column;
  row-gap: var(--section-row-gap);
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
