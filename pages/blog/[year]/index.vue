<script setup lang="ts">
const { fetchStoriesBySlug } = useStories();
const route = useRoute();

type ReactiveStory = Awaited<ReturnType<typeof fetchStoriesBySlug>>;
let story = undefined as ReactiveStory;

if (window.location.search.includes("_storyblok")) {
    story = await fetchStoriesBySlug(`blog/${route.params.year}`);
} else {
    story = await fetchStoriesBySlug("/blog");
}
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>
