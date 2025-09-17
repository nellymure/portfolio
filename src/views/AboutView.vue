<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import NavBar from '@/components/navbars/NavBar.vue'
import FadeInViewport from '@/components/FadeInViewport.vue'
import { routes, getRouteName } from '@/router'
import { RouterLink } from 'vue-router'
import IconAsterisk from '@/components/icons/IconAsterisk.vue'
import { useLayout } from '@/utils/screen-utils'
import MailSvg from '@/components/mail/MailSvg.vue'
import HeaderOutline from '@/components/HeaderOutline.vue'
import IconDownloadArrow from '@/components/icons/IconDownloadArrow.vue'

const { t } = useI18n()
const { isLandscapeLayout } = useLayout()

function openEmail() {
  window.location.href = 'mailto:nelly.mure43@gmail.com'
}
function downloadCV() {
  const url = `${import.meta.env.BASE_URL}cv_nelly_mure.pdf`
  const link = document.createElement('a')
  link.href = url
  link.download = 'cv_nelly_mure.pdf'
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="about">
    <NavBar class="section-navbar">
      <template #left>
        <router-link :to="{ name: getRouteName(routes.HUB) }">{{ t('buttons.back') }}</router-link>
      </template>
    </NavBar>
    <div v-if="isLandscapeLayout" class="content">
      <div class="text-part">
        <HeaderOutline @click="downloadCV"> <IconDownloadArrow /> CV </HeaderOutline>
        <p class="text-indent">
          {{ t('about') }}
        </p>
      </div>
      <FadeInViewport delay="0.5s">
        <img class="selfie" src="@/assets/images/about/selfie.jpg" alt="selfie" />
        <div class="contact-container" @click="openEmail">
          <MailSvg />
        </div>
      </FadeInViewport>
      <div class="asterisk asterisk-1">
        <IconAsterisk />
      </div>
      <div class="asterisk asterisk-2">
        <IconAsterisk />
      </div>
      <div class="asterisk asterisk-3">
        <IconAsterisk />
      </div>
    </div>
    <div v-else class="content">
      <div class="text-part">
        <p class="text-indent">
          {{ t('about') }}
        </p>
        <HeaderOutline @click="downloadCV"> <IconDownloadArrow /> CV </HeaderOutline>
      </div>
      <FadeInViewport delay="0.5s">
        <div class="selfie">
          <img src="@/assets/images/about/selfie.jpg" alt="selfie" />
          <div class="asterisk asterisk-1">
            <IconAsterisk />
          </div>
          <div class="asterisk asterisk-3">
            <IconAsterisk />
          </div>
          <div class="contact-container" @click="openEmail">
            <MailSvg />
          </div>
        </div>
      </FadeInViewport>
      <div class="asterisk asterisk-2">
        <IconAsterisk />
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "fr": {
      "about": "Formée en design d'exposition culturelle et de marque, j'ai développé une pratique
      pluridisciplinaire à la croisée de la scénographie, de l'événementiel et de la création
      artistique. Curieuse et passionnée par la mise en espace, j'aime concevoir des expériences
      sensibles évocatrices. Qu'il s'agisse d'expositions, d'événements ou de dispositifs de
      médiation, je m'engage toujours à révéler et mettre en avant un lieu, un propos, ou une œuvre
      avec justesse et créativité.",
      "buttons": {
        "back": "Menu"
      }
    },
    "en": {
      "about": "With a degree in cultural exhibition and brand design, I have developed a
      multidisciplinary practice at the crossroads of scenography, events and artistic creation.
      Curious and passionate about spatial design, I like to create evocative and sensitive
      experiences. Whether I'm working on exhibitions, events or mediation systems, I'm always
      committed to revealing and highlighting a place, a theme or a work with accuracy and
      creativity.",
      "buttons": {
        "back": "Menu"
      }
    }
  }
</i18n>

<style lang="css" scoped>
.about {
  display: flex;
  align-items: center;
  background-color: white;
  height: 100%;
}
.navbar {
  color: var(--color-hex-orange);
}
.content {
  display: flex;
  align-items: flex-end;
  padding-left: var(--padding-2);
  padding-right: var(--padding-2);
  overflow: hidden;
  --asterisk-size: var(--font-size-X5);
  --asterisk-offset: var(--asterisk-size) / -2;
  height: 90vh;
}
.text-part {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.outline {
  margin-right: -1em;
  font-size: var(--font-size-1);
  padding-right: var(--padding-2);
  padding-bottom: var(--padding-0);
}
.outline .left,
.outline .content,
.outline .right {
  height: 2em;
}
.content p {
  font-size: var(--font-size-0);
  padding-left: var(--padding-0);
  padding-right: var(--padding-2);
  padding-bottom: var(--padding-2);
  hyphens: auto;
}
.fade-in-viewport {
  height: 90vh;
}
.selfie {
  height: 90vh;
  width: auto;
}
.asterisk {
  position: absolute;
  z-index: 1;
  width: var(--asterisk-size);
  height: var(--asterisk-size);
  font-family: var(--font-family-minion-pro);
  font-size: calc(var(--asterisk-size) * 1.6);
  animation: scale-in 0.6s ease-out both;
  animation-delay: 0.6s;
}
.asterisk .icon-asterisk {
  width: var(--asterisk-size);
  height: var(--asterisk-size);
  display: block;
  line-height: 0.5;
  overflow: hidden;
}
.asterisk-1 {
  top: calc(40vh + var(--asterisk-offset));
  left: calc(2rem + var(--asterisk-offset));
  color: var(--color-hex-salmon-dark);
}
.asterisk-2 {
  top: calc(18vh + var(--asterisk-offset));
  left: calc(94vw + var(--asterisk-offset));
  color: var(--color-hex-violet2);
}
.asterisk-3 {
  top: calc(100vh - var(--asterisk-size) * 0.91);
  left: calc(60vw + var(--asterisk-offset));
  height: calc(var(--asterisk-size) * 0.91);
  color: var(--color-hex-orange);
}
.asterisk-3 .icon-asterisk {
  height: calc(var(--asterisk-size) * 0.91);
}
.contact-container {
  position: absolute;
  z-index: 3;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--padding--1) var(--padding-2);
}
@keyframes scale-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
/** small landscape layout */
@media (orientation: landscape) and (max-height: 430px) {
  .about {
    align-items: flex-end;
  }
  .content {
    height: 90svh;
    align-items: center;
    padding-left: var(--padding-0);
    padding-right: var(--padding-0);
    --asterisk-size: var(--font-size-X4);
    --asterisk-offset: var(--asterisk-size) / -2;
  }
  .outline {
    padding-right: var(--padding-0);
    padding-bottom: var(--padding--1);
    --border-size: 0.05em;
  }
  .content p {
    font-size: var(--font-size--1);
    padding-left: 0;
    padding-right: var(--padding-0);
    padding-bottom: var(--padding-0);
  }
  .content img {
    height: 90svh;
  }
  .asterisk-1 {
    top: calc(-0.1 * var(--asterisk-size));
    left: calc(40vw);
  }
  .asterisk-3 {
    left: calc(68vw + var(--asterisk-offset));
  }
  .contact-container {
    padding: 0 0;
  }
  .contact-container svg {
    width: 80%;
    padding: var(--padding--2) var(--padding-0);
  }
  .content .fade-in-container {
    align-self: flex-end;
    margin-bottom: var(--padding--2);
  }
}
/** portrait layout */
@media (orientation: portrait) or ((max-width: 720px) and (min-height: 431px)) {
  .about {
    align-items: flex-start;
    overflow-x: hidden;
    overflow-y: visible;
  }
  .content {
    flex-direction: column;
    padding: var(--padding-0);
    margin-top: calc(var(--article-row-gap) * 2);
    height: auto;
    --asterisk-size: 30vw;
  }
  .text-part {
    align-items: center;
  }
  .outline {
    padding-right: 0;
  }
  .content p {
    font-size: 1rem;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: var(--padding-0);
  }
  .selfie {
    height: auto;
    width: 100%;
  }
  .asterisk-1 {
    top: calc(-0.1 * var(--asterisk-size));
    left: calc(-0.4 * var(--asterisk-size));
  }
  .asterisk-2 {
    top: calc(2vh + var(--asterisk-offset));
    left: calc(95vw + var(--asterisk-offset));
  }
  .asterisk-3 {
    top: 40vh;
    left: calc(100% + var(--asterisk-offset));
    height: var(--asterisk-size);
  }
}
</style>
