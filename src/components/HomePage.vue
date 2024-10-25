<script setup>
defineOptions({
  name: 'HomePage',
})
</script>

<template>
  <!-- <h1>Hello</h1> -->
  <nav class="navbar">
    <div class="logo">
      <a href="#">MySite</a>
    </div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <div class="video-container">
    <video autoplay muted loop playsinline>
      <source src="../assets/masterbatch.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7); /* Transparent background */
  z-index: 100;
  top: 0;
}

.navbar .logo a {
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
}

.navbar .nav-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.navbar .nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1em;
}

.navbar .nav-links li a:hover {
  color: #f39c12; /* Hover effect color */
}

.video-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 110%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  z-index: -1;
  background-color: transparent;
}
</style>
