<template>
  <section class="flex flex-wrap justify-center items-center p-10">
    <div class="hello-world">
      <h1>{{ message }}</h1>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello, World!');
</script>

<style scoped>
.hello-world {
  text-align: center;
  color: blue;
}
</style>
