<script setup>
    import NavBar from './NavBar.vue';
    import Footer from './Footer.vue';
</script>


<template>
    <NavBar class="bg-transparent"/>
    <div class="container w-screen h-96">
    <img src="../assets/img/Exhibition.png" class="w-full h-full object-cover" alt="Container Image">
    </div>

    <h1 class="text-center text-5xl font-bold p-8 mb-24">Events & Exhibition </h1>

    <div class="mx-48 mb-24 w-[42rem]">

        <div class="container w-[46rem] h-14 border-yellow-100 bg-orange-100 border-2 flex items-center justify-between px-4 mb-6">
        <h1 class="text-xl">Exhibition 2024</h1>
        <p class="ml-2 text-2xl">+</p>
        </div>

        <div class="container w-[46rem] h-14 border-orange-100 bg-orange-100 border-2 flex items-center justify-between px-4 mb-6">
        <h1 class="text-xl">Exhibition 2023</h1>
        <p class="ml-2 text-2xl">+</p>
        </div>

        <div class="container w-[46rem] h-14 border-orange-100 bg-orange-100 border-2 flex items-center justify-between px-4 mb-6">
        <h1 class="text-xl">Exhibition 2022</h1>
        <p class="ml-2 text-2xl">+</p>
        </div>

        <div class="container w-[46rem] h-14 border-orange-100 bg-orange-100 border-2 flex items-center justify-between px-4 mb-6">
        <h1 class="text-xl">Exhibition 2021</h1>
        <p class="ml-2 text-2xl">+</p>
        </div>


    </div>



    <Footer />

</template>