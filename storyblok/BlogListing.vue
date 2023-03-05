<script setup lang="ts">
const { stories: blogArticles, fetchStories } = useStories();

await fetchStories({
    starts_with: "blog/",
    is_startpage: false,
    per_page: 100,
    sort_by: "first_published_at:desc",
});
</script>

<template>
    <div class="bg-white">
        <div class="mx-auto container py-16 sm:py-24 px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <NuxtLink
                    v-for="article in blogArticles"
                    :key="article.uuid"
                    :to="'/' + article.full_slug"
                    class="group"
                >
                    <div
                        class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
                    >
                        <img
                            :src="article.content.image.filename"
                            :alt="article.content.title"
                            class="aspect-square w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 class="mt-4 text-2xl font-medium text-gray-700">{{ article.content.title }}</h3>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
