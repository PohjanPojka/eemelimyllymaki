<script setup>
import { ref } from 'vue'
import { changeLocale } from '../main.js'

const langMenu = ref(false)

function toggleLangmenu() {
  langMenu.value = !langMenu.value
}

</script>

<template>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=forest,language" />
    </head>

    <div class="flex h-20 items-center cursor-pointer justify-center font-ubuntu">
      <div class="flex fixed items-center rounded-2xl bg-stone-800 p-1 font-semibold text-stone-100 space-x-1">
        <span class="material-symbols-outlined">forest</span>
        <div class="rounded-2xl p-1 transition delay-150 duration-300 ease-out hover:bg-red-500 hover:text-red-200">{{ $t('navbar.about') }}</div>
        <div class="rounded-2xl p-1 transition delay-150 duration-300 ease-out hover:bg-red-500 hover:text-red-200">{{ $t('navbar.services') }}</div>
        <div class="rounded-2xl p-1 transition delay-150 duration-300 ease-out hover:bg-red-500 hover:text-red-200">{{ $t('navbar.exp') }}</div>
        <div class="rounded-2xl p-1 transition delay-150 duration-300 ease-out hover:bg-red-500 hover:text-red-200">{{ $t('navbar.blog') }}</div>
        <div class="">
          <button @click="toggleLangmenu" class="flex transition delay-150 duration-300 ease-out hover:text-red-500"><span class="material-symbols-outlined">language</span></button>
          <Transition enter-active-class="transition-opacity duration-150 ease-out" enter-from-class="opacity-0" leave-active-class="transition-opacity duration-150 ease-out" leave-to-class="opacity-0" name="drop-down">
            <div v-if="langMenu" class="transition delay-100 duration-150 ease-in-out absolute rounded-md bg-white font-normal border-1 text-black p-1">
              <div @click="changeLocale('en')" class="rounded-md p-1 flex items-center justify-center space-x-2 hover:bg-red-400">
                <span class="fi fi-gb fis"></span><p>{{ $t('lang.en') }}</p>
              </div>
              <div @click="changeLocale('fi')" class="rounded-md p-1 flex items-center justify-center space-x-2 hover:bg-red-400">
                <span class="fi fi-fi fis"></span><p>{{ $t('lang.fi') }}</p>
              </div>
              <div @click="changeLocale('se')" class="rounded-md p-1 flex items-center justify-center space-x-2 hover:bg-red-400">
                <span class="fi fi-se fis"></span><p>{{ $t('lang.se') }}</p>
              </div>
              <div @click="changeLocale('de')" class="rounded-md p-1 flex items-center justify-center space-x-2 hover:bg-red-400">
                <span class="fi fi-de fis"></span><p>{{ $t('lang.de') }}</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
</template>
