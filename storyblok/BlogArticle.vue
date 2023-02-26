<script setup lang="ts">
const props = defineProps<{
    blok: {
        title: string;
        description: string;
        image: {
            filename: string;
        };
        first_published_at: string;
        _uid: string;
    };
}>();
</script>

<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto container px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <p class="text-base font-semibold leading-7 text-blue-600">{{ props.blok.first_published_at }}</p>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ props.blok.title }}</h1>
                <div class="mt-10 grid max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                    {{ props.blok.description }}
                </div>
            </div>
        </div>
        <div class="relative overflow-hidden pt-16 lg:pt-20">
            <div class="mx-auto container px-6 lg:px-8">
                <img
                    class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full aspect-square object-cover"
                    :src="props.blok.image.filename"
                    alt="Blog Image"
                />
                <div class="relative" aria-hidden="true">
                    <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                </div>
            </div>
        </div>
    </div>
</template>
