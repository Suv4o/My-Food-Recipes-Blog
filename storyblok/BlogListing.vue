<script setup lang="ts">
const { stories: blogArticles, fetchStories } = useStories();
const route = useRoute();
const { year, month, day } = route.params;

const greaterThenDate = computed(() => {
    if (year && month && day) {
        return `${year}-${month}-${day} 00:00`;
    }

    if (year && month && !day) {
        return `${year}-${month}-01 00:00`;
    }

    if (year && !month && !day) {
        return `${year}-01-01 00:00`;
    }

    return "";
});

type ReactiveStory = typeof blogArticles.value[0];

function getBlogArticleUrl(article: ReactiveStory): string {
    if (!article?.first_published_at) {
        return "/blog";
    }
    const excludeTimeZone = String(article.first_published_at.substring(0, 10).split("-"));
    const dateObj = new Date(excludeTimeZone);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).length === 1 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1;
    const day = String(dateObj.getDate()).length === 1 ? `0${dateObj.getDate()}` : dateObj.getDate();

    return `/blog/${year}/${month}/${day}/${article.slug}`;
}

await fetchStories({
    starts_with: "blog/",
    is_startpage: false,
    per_page: 100,
    sort_by: "first_published_at:desc",
    first_published_at_gt: greaterThenDate.value,
});
</script>

<template>
    <div class="bg-white">
        <div class="mx-auto container py-16 sm:py-24 px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <NuxtLink
                    v-for="article in blogArticles"
                    :key="article.uuid"
                    :to="getBlogArticleUrl(article)"
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
