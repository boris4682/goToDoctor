<script setup lang="ts">
import mainpreloader from "@assets/preloader.svg";
import logopreloader from "@assets/preloaderlogo.svg";
import doctorandboy from "@assets/doctorandboy.png";
</script>

<template>
  <div class="preloader-container">
    <img :src="mainpreloader" class="preloader-bg" alt="Background Preloader" />
    <div class="content">
      <img :src="logopreloader" class="logo" alt="Preloader Logo" />
      <p class="welcome-text">Добро пожаловать!</p>
      <img :src="doctorandboy" class="doctor-and-boy" alt="Doctor and Boy" />
    </div>
  </div>
</template>

<style>
.preloader-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.preloader-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  z-index: 2;
  padding: 20px;
  text-align: center;
}

.logo {
  width: 100px;
  margin-top: 20%;
}

.doctor-and-boy {
  width: 400px;
}

.welcome-text {
  font-size: 30px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 60px;
}
</style>
