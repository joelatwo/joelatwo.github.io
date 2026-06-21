<template>
  <div style="border: 2px solid black">
    <div>
      <pre>{{ data }}</pre>
    </div>
  </div>

  <div style="border: 2px solid black"></div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("index", () =>
  queryContent("content").path("/").first(),
);
console.log(data, data.value);
</script>
