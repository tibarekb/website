<script setup>
defineOptions({
  name: 'LandingPage',
})
import NavBar from './NavBar.vue';
</script>

<template>

<NavBar />

<!-- <div class="">
  <video class="w-screen max-h-xs" autoplay muted loop playsinline>
    <source src="../assets/video/masterbatch2.mp4" class="object-contain" type="video/mp4" />
  </video>
</div> -->

<div class="container bg-orange-400 w-screen h-[42rem] ">
    <!-- <img src="../assets/img/Exhibition.jpg" class="w-full h-full object-cover" alt="Container Image"> -->
    <video class="w-full h-full object-cover" autoplay muted loop playsinline>
    <source src="../assets/video/masterbatch2.mp4" class="object-contain" type="video/mp4" />
  </video>
</div>

</template>


