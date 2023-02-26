<script setup lang="ts">
const route = useRoute();
const story = await useAsyncStoryblok(`${route.path === "/" ? "home" : route.path.replace("/", "")}`, {
    version: "draft",
});
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>
