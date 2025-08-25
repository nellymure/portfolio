<script setup lang="ts">
import HubNavbar from '@/components/navbars/HubNavbar.vue'
import FadeInViewport from '@/components/FadeInViewport.vue'
import { useI18n } from 'vue-i18n'
import { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <div class="hub">
    <HubNavbar />
    <FadeInViewport delay="0.5s">
      <div class="container">
        <div class="page-title">
          <h1>portfolio</h1>
        </div>
        <div class="sections">
          <router-link class="section exhibition" :to="{ name: getRouteName(routes.EXHIBITION) }">
            <div class="title">
              {{ t('exhibition.title') }}
            </div>
            <div class="square"><h1>01</h1></div>
          </router-link>
          <router-link
            class="section event-design"
            :to="{ name: getRouteName(routes.EVENT_DESIGN) }"
          >
            <div class="title">
              {{ t('eventDesign.title') }}
            </div>
            <div class="square"><h1>02</h1></div>
          </router-link>
          <router-link
            class="section cultural-mediation"
            :to="{ name: getRouteName(routes.MEDIATION) }"
          >
            <div class="title">
              {{ t('mediation.title') }}
            </div>
            <div class="square"><h1>03</h1></div>
          </router-link>
          <router-link class="section model-making" :to="{ name: getRouteName(routes.MODELS) }">
            {{ t('modelMaking.title') }}
            <div class="square"><h1>04</h1></div>
          </router-link>
        </div>
      </div>
    </FadeInViewport>
  </div>
</template>

<i18n>
  {
    "fr": {
      "seeMore": "Voir plus",
      "exhibition": {
        "title": "exposition",
      },
      "eventDesign": {
        "title": "événementiel",
      },
      "mediation": {
        "title": "médiation",
      },
      "modelMaking": {
        "title": "maquettes",
      }
    },
    "en": {
      "seeMore": "See more",
      "exhibition": {
        "title": "scenography",
      },
      "eventDesign": {
        "title": "Event",
      },
      "mediation": {
        "title": "mediation",
      },
      "modelMaking": {
        "title": "model making",
      }
    }
  }
</i18n>

<style lang="css" scoped>
.hub {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  --section-width: calc(100vw / 4 - var(--half-padding-x));
  background-color: white;
}
.page-title {
  padding-bottom: var(--article-row-gap);
}
.page-title h1 {
  text-align: center;
  font-size: 5em;
  font-family: var(--font-family-le-murmure);
  font-weight: var(--font-weight-semi-bold);
}
.sections {
  overflow-y: auto;
  display: flex;
  align-items: center;
  row-gap: var(--article-row-gap);
  padding-left: var(--half-padding-x);
  padding-right: var(--half-padding-x);
}
.section {
  font-family: 'Courier New', Courier, monospace;
  width: var(--section-width);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: var(--quarter-padding-x);
}
.section:last-child {
  flex: 0;
}
.square {
  height: var(--section-width);
  width: var(--section-width);
  font-family: var(--font-family-le-murmure);
  font-weight: var(--font-weight-semi-bold);
  font-size: 10em;
  line-height: 1;
  overflow: hidden;
}
.square h1 {
  transform: translate(-15%, 10%);
}
.exhibition .square {
  background: var(--color-hex-orange);
}
.event-design .square {
  background: var(--color-hex-salmon-dark);
}
.cultural-mediation .square {
  background: var(--color-hex-beige2);
}
.model-making .square {
  background: var(--color-hex-violet2);
}
@media (orientation: portrait) {
  .hub {
    --section-width: calc(100vw / 2 - var(--half-padding-x));
    justify-content: center;
  }
  .sections {
    flex-wrap: wrap;
    row-gap: var(--half-padding-x);
  }
  .sections {
    padding-left: 0;
    padding-right: 0;
  }
  .section {
    padding: var(--quarter-padding-x);
  }
  .section:last-child {
    flex: 1;
  }
  .square {
    width: auto;
    font-size: 8em;
  }
  .square h1 {
    transform: translate(-15%, 0);
  }
}
</style>
