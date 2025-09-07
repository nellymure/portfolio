<script setup lang="ts">
import HubNavbar from '@/components/navbars/HubNavbar.vue'
import FadeInViewport from '@/components/FadeInViewport.vue'
import { useI18n } from 'vue-i18n'
import { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'
import LeMurmure01 from '@/components/icons/numbers/LeMurmure_01.vue'
import LeMurmure02 from '@/components/icons/numbers/LeMurmure_02.vue'
import LeMurmure03 from '@/components/icons/numbers/LeMurmure_03.vue'
import LeMurmure04 from '@/components/icons/numbers/LeMurmure_04.vue'

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
            <div class="square"><LeMurmure01 /></div>
          </router-link>
          <router-link
            class="section event-design"
            :to="{ name: getRouteName(routes.EVENT_DESIGN) }"
          >
            <div class="title">
              {{ t('eventDesign.title') }}
            </div>
            <div class="square"><LeMurmure02 /></div>
          </router-link>
          <router-link
            class="section cultural-mediation"
            :to="{ name: getRouteName(routes.MEDIATION) }"
          >
            <div class="title">
              {{ t('mediation.title') }}
            </div>
            <div class="square"><LeMurmure03 /></div>
          </router-link>
          <router-link class="section model-making" :to="{ name: getRouteName(routes.MODELS) }">
            <div class="title">
              {{ t('modelMaking.title') }}
            </div>
            <div class="square"><LeMurmure04 /></div>
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
  --section-width: calc((100vw - var(--padding-0)) / 4 - var(--padding-0));
  background-color: white;
}
.container {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.page-title {
  margin-top: var(--navbar-height);
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  text-align: center;
  font-size: var(--font-size-5);
  font-family: var(--font-family-le-murmure);
  font-weight: var(--font-weight-semi-bold);
}
.sections {
  margin-bottom: var(--padding-0);
  display: flex;
  padding-left: var(--padding-0);
}
.section {
  margin-right: var(--padding-0);
  width: var(--section-width);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.section .title {
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--font-size-0);
}
.square {
  height: var(--section-width);
  width: var(--section-width);
  overflow: hidden;
}
.square svg {
  height: 80%;
  width: 80%;
  transform: translate(-25%, 30%);
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
    --section-width: calc((100vw - var(--padding-1)) / 2 - var(--padding-1));
  }
  .sections {
    flex-wrap: wrap;
    row-gap: var(--padding-1);
    padding-left: var(--padding-1);
  }
  .section {
    margin-right: var(--padding-1);
  }
}
</style>
