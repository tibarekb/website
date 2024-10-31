<script setup>
    import NavBar from './NavBar.vue';
    import Footer from './Footer.vue';
    import {ref} from "vue";
    const state = ref(false);
    const clicked = ref();
</script>


<template>
    <NavBar/>
    <div class="container w-screen h-96">
    <img src="../assets/img/exhibition.jpg" class="w-full h-full object-cover" alt="Container Image">
    </div>

    <h1 class="text-center text-5xl font-bold p-8 mb-16">Events & Exhibition </h1>

    <div class="lg:mx-96 mx-24 mb-24 w-[42rem]">

        <div class="container lg:w-[46rem] w-96 h-14 border-gray-100 bg-gray-100 border-2 flex items-center justify-between px-4 mb-6">
        <h1 class="text-xl">Exhibition 2024</h1>
        <p class="ml-2 text-2xl"><button @click="() => (state = !state)">+</button></p>
        </div>

        <div v-show="state" class="container h-72 bg-gold-400 my-10 border-8 border-yellow-400 mx-4">
            
        </div>

        <div class="container lg:w-[46rem] h-14 w-96 border-gray-100 bg-gray-100  border-2 flex items-center justify-between px-4 mb-6">
        <h1 class="text-xl">Exhibition 2023</h1>
        <p class="ml-2 text-2xl">+</p>
        </div>

        <div class="container lg:w-[46rem] h-14 w-96 border-gray-100 bg-gray-100  border-2 flex items-center justify-between px-4 mb-6">
        <h1 class="text-xl">Exhibition 2022</h1>
        <p class="ml-2 text-2xl">+</p>
        </div>

        <div class="container lg:w-[46rem] h-14 w-96 border-gray-100 bg-gray-100  border-2 flex items-center justify-between px-4 mb-6">
        <h1 class="text-xl">Exhibition 2021</h1>
        <p class="ml-2 text-2xl">+</p>
        </div>


    </div>



    <Footer />

</template>