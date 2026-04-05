<template>
  <div :style="props.path"></div>
</template>

<script setup>
const props = defineProps({
  path: String,
});
</script>

<style>
.bgImage {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
