<script setup>
import NavBar from "./components/NavBar.vue"
import CubeAnimation from "./components/CubeAnimation.vue"

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<template>
  <div class="flex h-screen w-screen relative">
    <div class="absolute w-full h-full font-ubuntu text-stone-800 z-1000">
      <NavBar></NavBar>
      <div class="grid-cols-3 pl-20 pt-50 items-start">
        <div class="col-span-2">
          <p class="text-lg">Eemeli Myllymäki</p>
          <p class="text-7xl pb-2 font-semibold">{{ $t('header.frontPage') }}</p>
          <div class="relative text-4xl flex h-11 text-red-500 overflow-hidden w-100 items-center">
            <span class="absolute transition-all ease-in-out animate-slot top-0">
              {{ $t('header.market1') }}<br/>
              {{ $t('header.market2') }}<br/> 
              {{ $t('header.market3') }}<br/>
              {{ $t('header.market4') }}<br/>
            </span>
          </div>
        </div>
      </div>
    </div>
    <CubeAnimation class="absolute left-300 bottom-10"></CubeAnimation>
  </div>
  <div id="about" class="flex h-screen w-screen relative bg-gray-100">

  </div>
  <div id="services" class="flex h-screen w-screen relative">

  </div>
  <div id="exp" class="flex h-screen w-screen relative bg-gray-100">

  </div>
  <div id="blog" class="flex h-screen w-screen relative">

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
