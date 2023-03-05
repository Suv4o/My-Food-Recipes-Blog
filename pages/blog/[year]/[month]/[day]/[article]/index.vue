<script setup lang="ts">
const { fetchStoriesBySlug } = useStories();
const route = useRoute();
const story = await fetchStoriesBySlug(`blog/${route.params.article}`);
const firstPublishedAt = story?.value?.first_published_at ? story?.value?.first_published_at : "";

if (!isArticleDateExist(firstPublishedAt)) {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

function isArticleDateExist(date: string) {
    const excludeTimeZone = String(date.substring(0, 10).split("-"));
    const dateObj = new Date(excludeTimeZone);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();

    return (
        year === Number(route.params.year) && month === Number(route.params.month) && day === Number(route.params.day)
    );
}
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>
