<script setup lang="ts">
import HeaderOutline from '@/components/HeaderOutline.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
import HubNavbar from '@/components/navbars/HubNavbar.vue'
import NellyMure from '@/components/NellyMure.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="hub">
    <HubNavbar />
    <div class="content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nam a culpa, tenetur voluptatem
      tempore mollitia expedita reiciendis deserunt minus ex hic distinctio laudantium labore. Est
      magnam ipsum reiciendis quos?
    </div>
  </div>
</template>

<i18n>
  {
    "fr": {
    },
    "en": {
    }
  }
</i18n>

<style scoped>
.hub {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(233, 229, 229);
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
.selfie {
  width: auto;
  height: 25vh;
}
</style>
