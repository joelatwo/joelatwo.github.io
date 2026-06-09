<script setup>
        import BookImage from '@/assets/Book.png'
</script>

<template>
    <div class="layoutBackground">
        <slot></slot>
        <img :src="BookImage" alt="Background Image" class="layout-background-image">
    </div>
</template>

<style>
.layoutBackground {
    position: relative;
    width: 100%;
    height: 95vh;
}

.layout-background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100;
}
</style>
