<script setup>
defineOptions({
  name: 'ProductInfo',
})
import NavBar from './NavBar.vue';
</script>

<template> 
    <NavBar />
    <div class="container w-screen h-96">
    <img src="../assets/img/rubber compound.png" class="w-full h-full object-cover" alt="Container Image">
    </div>

    <h1 class="text-center text-5xl font-bold p-8 mb-12">EVA COMPOUND</h1>

    <div class="mx-36">
      <p class="mb-10 text-lg">
        The EVA compound granules that we produce are primarily focused for the footwear industry in Ethiopia.
        These compounds are suitable for high quality foamed injection molded slippers, sandals midsoles, boots, automobile 
        components, toys, and various other applications. 
      </p>

      <p class="mb-6 text-lg">
        The EVA compounds that we manufacture are expandable and cross-linkable. We also modify them with rubbers, thermoplastic
        elastomers, impact modifiers, and other specialty polymers so that our customers get enhanced mechanical and processing 
        qualities. 
      </p>
    </div>

</template>