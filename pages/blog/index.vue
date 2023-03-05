<script setup lang="ts">
const { fetchStoriesBySlug } = useStories();
const story = await fetchStoriesBySlug("/blog");
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>
