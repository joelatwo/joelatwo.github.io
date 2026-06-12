<template>
    <div class="layoutBackground">
        <img :src="BookImage" alt="Book Background Image" class="layoutBackgroundImage">
        <div class="layoutContent">
            <div class="layoutContentInner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import BookImage from '@/assets/NoteBook.png'
</script>

<style>
.layoutBackground {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
}

.layoutBackgroundImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Ensure the image is behind the content */
}

.layoutContent {
    max-height: 100vh;
    z-index: 1;
    overflow: hidden;
    padding: 8% 12%;
}

.layoutContentInner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
    height: 100%;
    overflow-y: auto;
}
.layoutScrollable {
    height: 100%;
    overflow-y: auto;
}
</style>
