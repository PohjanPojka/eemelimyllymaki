<script setup>
</script>

<template>
  <div class="w-full h-full font-ubuntu text-stone-800">
    <div class="grid pl-20 pt-50 items-start">
      <p class="font-bold">Eemeli Myllymäki</p>
      <p class="text-5xl font-semibold">Tulevaisuuden koodia</p>
      <div class="relative text-4xl flex h-11 text-red-400 overflow-hidden w-100 items-center">
        <span class="absolute transition-all ease-in-out animate-slot top-0">
          haaveilijoille<br/>
          yrittäjille<br/> 
          keksijöille<br/>
          kansainvälisille<br/>
        </span>
      </div>
    </div>
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
