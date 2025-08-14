<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch, type PropType } from 'vue'
import SectionNavbar from '@/components/navbars/SectionNavbar.vue'

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
const folderHeightPercentVh = 0.95
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
onMounted(() => {
  window.addEventListener('scroll', scrollEventThrottling)
  window.addEventListener('resize', scrollEventThrottling)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollEventThrottling)
  window.removeEventListener('resize', scrollEventThrottling)
})
function onScrollPosition(_scrollPosition: number) {
  if (!html.section.value) {
    return
  }
  const innerHeight = window.innerHeight
  const sectionPosition = html.section.value.getBoundingClientRect().top

  const folderBottomVerticalMargin = innerHeight * (1 - folderHeightPercentVh)
  navbarTextColor.value = `var(${sectionPosition > folderBottomVerticalMargin ? props.navbarTextColor?.onFolder : props.navbarTextColor?.default})`

  const folderHeight = innerHeight * folderHeightPercentVh
  if (sectionPosition < folderHeight) {
    const percent = sectionPosition / folderHeight
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
      <div class="folder line-break">
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
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  color: v-bind(navbarTextColor);
}
.dynamic-section {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.content .folder {
  padding: 10vh var(--padding-x) 0 var(--padding-x);
}
.folder {
  height: calc(100vh * v-bind(folderHeightPercentVh));
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.folder h1 {
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
  margin-right: 25%;
  font-size: 1.2rem;
  padding: 4em 0 0 0;
  animation: folder-description-animation calc(1ms * v-bind(descriptionAnimationDurationMs))
    cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.btn-open-folder {
  opacity: 0;
  color: var(--color-hex-beige-light);
  animation: arrow-animation calc(1ms * v-bind(arrowAnimationDurationMs)) linear
    calc(2ms * v-bind(descriptionAnimationDurationMs)) infinite none;
  padding: 2em 50%;
}
.section {
  background-color: white;
  line-height: 2;
  padding-top: 10vw;
  padding-bottom: 10vw;
  display: flex;
  flex-direction: column;
  row-gap: 20vh;
}
@media (orientation: portrait) {
  .content .folder {
    padding: 2rem var(--padding-x) 0 var(--padding-x);
  }
  .folder h1 {
    font-size: 3rem;
    align-self: center;
    display: flex;
    flex-direction: column;
  }
  .folder h1 span {
    font-size: 3rem;
    align-self: center;
  }
  .folder-description {
    margin-right: 0;
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
