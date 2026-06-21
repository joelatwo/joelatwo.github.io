<template>
  <div></div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;
const { data } = await useAsyncData(() =>
  queryContent("content").path(`/projects/${slug}`).first(),
);
console.log(slug, data, data.value);
</script>
