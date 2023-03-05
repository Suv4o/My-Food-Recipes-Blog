<script setup lang="ts">
const { fetchStoriesBySlug } = useStories();
const route = useRoute();
console.log(route);

const story = await fetchStoriesBySlug(`blog/${route.params.article}`);
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>
