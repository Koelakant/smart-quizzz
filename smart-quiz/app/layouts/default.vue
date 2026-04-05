<template>
  <div class="h-screen">
    <main>
      <NuxtPage keepalive />
    </main>
  </div>
</template>

<script setup>

</script>

<style scoped>
.hero {  
  background-size: cover;
  
  background-position: center;
  
  background-repeat: no-repeat;
  
  min-height: 100vh;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* transform: translateY(20px); */
}
</style>