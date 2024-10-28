<template>
    <nav class="navbar fixed top-0 w-full z-0 text-white bg-gray-300">
  <div class="container mx-auto flex justify-between items-center p-2">
    <div class="logo text-xl font-bold">
      <a href="/" class="text-white">Mohan PLC</a>
    </div> 

    <!-- Navigation Links --> 
      <ul class="flex space-x-6 p-4 text-lg ">
      <li><a href="#home" class="hover:text-blue-100 text-white">Corporate </a></li>
      <li><a href="about-us" class="hover:text-blue-100 text-white">Digital Corner</a></li>
      <li><a href="about-us" class="hover:text-blue-100 text-white">About Us</a></li>
      <li><a href="contact-us" class="hover:text-blue-100 text-white">Contact Us </a></li>
    </ul>
  </div>
</nav> 
</template>

<script setup>
    defineOptions({
  name: 'NavBar',
})
</script>