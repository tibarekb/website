<template>
    <nav :class="['navbar fixed top-0 w-full z-0 text-white' ,navbarClass]">
  <div class="container mx-auto flex justify-between items-center p-2">
    <div class="logo flex items-center space-x-2 text-xl font-bold">
  <!-- <img src="../assets/img/mohanlogo.png" class="w-10 h-10"> -->
  <a href="/" class="text-white">Mohan Group</a>
</div>
 

    <!-- Navigation Links --> 
      <ul :class="['flex space-x-6 p-4 text-sm font-bold']">
      <!-- <li><a href="#home" class="hover:text-amber-100 text-white">Companies</a></li> -->
      <li class="group relative">
      <a href="#" class="hover:text-blue-100 text-white">Companies</a>
      <ul class="absolute left-0 hidden group-hover:flex flex-col bg-white text-black shadow-lg text-xs">
        <li><a href="/event-exhibition" class="block px-4 py-2 hover:bg-gray-100">Mohan International</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Mohan PLC</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Vina Trade & Industry PLC</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Mohan Wire Industries</a></li>
      </ul>
      </li>
      <li><a href="#home" class="hover:text-amber-100 text-white">Product Portfolio</a></li>
      <!-- <li><a href="#" class="hover:text-blue-100 text-white">Digital Corner</a></li> -->
      <li class="group relative">
      <a href="#" class="hover:text-blue-100 text-white">Digital Corner</a>
      <ul class="absolute left-0 hidden group-hover:flex flex-col bg-white text-black shadow-lg text-xs">
        <li><a href="/event-exhibition" class="block px-4 py-2 hover:bg-gray-100">Events & Exhibitions</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Gallery</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Brochure</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Awards & Recognition</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">CSR</a></li>
      </ul>
      </li>
      <li><a href="about-us" class="hover:text-blue-100 text-white">About Us</a></li>
      <li><a href="#" class="hover:text-blue-100 text-white">Career</a></li>
      <li><a href="contact-us" class="hover:text-blue-100 text-white">Contact Us </a></li>
    </ul>
  </div>
</nav> 
</template>

<script>
//     defineOptions({
//   name: 'NavBar',
// });
import { ref, onMounted, onUnmounted, computed } from 'vue';

export default {
    setup() {
        const isScrolled = ref(false);

        const handleScroll = () => {
            isScrolled.value = window.scrollY > 50; // Adjust this value as needed
        };

        const navbarClass = computed(() => {
            return isScrolled.value ? 'bg-gray-800' : 'bg-transparent';
        });

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            navbarClass
        };
    }
};
</script>
