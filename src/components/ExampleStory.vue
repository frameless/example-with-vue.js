<script setup lang="ts">
import Canvas from "./ExampleCanvas.vue";

defineProps<{
  name?: string;
}>();

const slug = (text: string) =>
  text
    .trim()
    .replace(/[^\w]+/g, "-")
    .toLowerCase();
const slugLink = (text: string) => `#${slug(text)}`;
</script>

<template>
  <section class="example-story" :id="slug(name)">
    <h2 class="example-story__heading">
      {{ name }}
      <a class="example-story__heading-anchor" :href="slugLink(name)">#</a>
    </h2>
    <Canvas>
      <slot></slot>
    </Canvas>
  </section>
</template>

<style>
.example-story__heading {
  font-family: sans-serif;
}
.example-story__heading-anchor {
  text-decoration: none;
  color: rgba(0 0 0 / 50%);
}
</style>
