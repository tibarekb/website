<template>
    <nav class="navbar fixed top-0 w-full z-0 text-white bg-orange-400">
  <div class="container mx-auto flex justify-between items-center p-2">
    <div class="logo flex items-center space-x-2 text-xl font-bold">
  <!-- <img src="../assets/img/mohanlogo.png" class="w-10 h-10"> -->
  <a href="/" class="text-white">Mohan PLC</a>
</div>
 

    <!-- Navigation Links --> 
      <ul class="flex space-x-6 p-4 text-sm font-bold">
      <li><a href="#home" class="hover:text-blue-100 text-white">Corporate</a></li>
      <li><a href="#home" class="hover:text-blue-100 text-white">Product Portfolio</a></li>
      <!-- <li><a href="#" class="hover:text-blue-100 text-white">Digital Corner</a></li> -->
      <li class="group relative">
      <a href="#" class="hover:text-blue-100 text-white">Digital Corner</a>
      <ul class="absolute left-0 hidden group-hover:flex flex-col bg-white text-black mt-6 shadow-lg text-xs">
        <li><a href="/event-exhibition" class="block px-4 py-2 hover:bg-blue-100">Events & Exhibitions</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-blue-100">Gallery</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-blue-100">Brochure</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-blue-100">Awards & Recognition</a></li>
      </ul>
      </li>
      <li><a href="about-us" class="hover:text-blue-100 text-white">About Us</a></li>
      <li><a href="#" class="hover:text-blue-100 text-white">Career</a></li>
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