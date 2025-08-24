<script setup lang="ts">
import HubNavbar from '@/components/navbars/HubNavbar.vue'
import FadeInViewport from '@/components/FadeInViewport.vue'
import IconChevron from '@/components/IconChevron.vue'
import { useI18n } from 'vue-i18n'
import { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <div class="hub">
    <HubNavbar />
    <div class="container">
      <router-link class="section exhibition" :to="{ name: getRouteName(routes.EXHIBITION) }">
        <FadeInViewport delay="0.5s">
          <img class="obj-pos-bottom" src="@/assets/images/hub/exhibition.png" />
        </FadeInViewport>
        <div class="on-hover">
          {{ t('exhibition.title') }}
          <IconChevron direction="right" color="var(--color-hex-beige-light)" />
        </div>
      </router-link>
      <router-link class="section event-design" :to="{ name: getRouteName(routes.EVENT_DESIGN) }">
        <FadeInViewport delay="0.5s">
          <img class="obj-pos-bottom" src="@/assets/images/hub/event-design.png" />
        </FadeInViewport>
        <div class="on-hover">
          {{ t('eventDesign.title') }}
          <IconChevron direction="right" color="var(--color-hex-beige-light)" />
        </div>
      </router-link>
      <router-link
        class="section cultural-mediation"
        :to="{ name: getRouteName(routes.MEDIATION) }"
      >
        <FadeInViewport delay="0.5s">
          <img class="obj-pos-bottom" src="@/assets/images/hub/cultural-mediation.png" />
        </FadeInViewport>
        <div class="on-hover">
          {{ t('mediation.title') }}
          <IconChevron direction="right" color="var(--color-hex-beige-black)" />
        </div>
      </router-link>
      <router-link class="section model-making" :to="{ name: getRouteName(routes.MODELS) }">
        <FadeInViewport delay="0.5s">
          <img class="obj-pos-bottom" src="@/assets/images/hub/cultural-mediation.png" />
        </FadeInViewport>
        <div class="on-hover">
          {{ t('modelMaking.title') }}
          <IconChevron direction="right" color="var(--color-hex-beige-black)" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<i18n>
  {
    "fr": {
      "seeMore": "Voir plus",
      "exhibition": {
        "title": "Scenographie\nd'exposition",
      },
      "eventDesign": {
        "title": "Design\névénementiel",
      },
      "mediation": {
        "title": "Médiation\nculturelle",
      },
      "modelMaking": {
        "title": "Maquettes",
      }
    },
    "en": {
      "seeMore": "See more",
      "exhibition": {
        "title": "Exhibition\nscenography",
      },
      "eventDesign": {
        "title": "Event\ndesign",
      },
      "mediation": {
        "title": "Cultural\nmediation",
      },
      "modelMaking": {
        "title": "Model making",
      }
    }
  }
</i18n>

<style lang="css" scoped>
.hub {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  --section-width: calc(100vw / 4 - var(--half-padding-x));
}
.hub .container {
  overflow-y: auto;
  display: flex;
  row-gap: var(--article-row-gap);
}
.section {
  width: var(--section-width);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-left: var(--quarter-padding-x);
}
.section:last-child {
  padding-right: var(--quarter-padding-x);
}
.hub .container img {
  height: calc(100vh - var(--navbar-height) - 1em - var(--padding-x));
  width: var(--section-width);
  object-fit: cover;
  display: flex;
}
.on-hover {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  line-height: 1.1;
  padding-bottom: var(--quarter-padding-x);
  padding-right: var(--quarter-padding-x);
  position: fixed;
  width: var(--section-width);
  height: 30%;
  opacity: 0;
  animation: slide-out-fwd-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  text-transform: uppercase;
  transform-origin: 0 100%;
}
.on-hover svg {
  margin-left: 0.5em;
}
.exhibition .on-hover {
  color: var(--color-hex-beige-light);
  background: linear-gradient(0deg, var(--color-hex-orange) 30%, transparent);
}
.event-design .on-hover {
  color: var(--color-hex-beige-light);
  background: linear-gradient(0deg, var(--color-hex-salmon-dark) 30%, transparent);
}
.cultural-mediation .on-hover {
  color: var(--color-hex-black);
  background: linear-gradient(0deg, var(--color-hex-beige2) 30%, transparent);
}
.model-making .on-hover {
  color: var(--color-hex-black);
  background: linear-gradient(0deg, var(--color-hex-violet2) 30%, transparent);
}
.section:hover .on-hover {
  animation: slide-in-fwd-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}
@keyframes slide-in-fwd-bottom {
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
}
@keyframes slide-out-fwd-bottom {
  0% {
    transform: scaleY(1);
    opacity: 1;
  }
  100% {
    transform: scaleY(0);
    opacity: 0;
  }
}
@media (orientation: portrait) {
  .hub {
    height: auto;
  }
  .hub .container {
    flex-direction: column;
  }
  .hub .container > div {
    padding: var(--quarter-padding-x);
  }
}
</style>
