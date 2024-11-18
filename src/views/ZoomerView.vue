<script setup lang="ts">
import { ref } from "vue";
//@ts-ignore
import { VueImageZoomer } from "vue-image-zoomer";
import "vue-image-zoomer/dist/style.css";

const imageUrl = ref<string>("https://samueljon.es/img/sky.jpg");
</script>

<template>
  <div class="w-full flex justify-center">
    <VueImageZoomer
      :regular="imageUrl"
      :touch-zoom-pos="[0, 0]"
      :click-zoom="true"
    />
  </div>
</template>
