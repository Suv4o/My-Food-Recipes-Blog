<script setup lang="ts">
const props = defineProps<{
    blok: {
        title: string;
        _uid: string;
    };
}>();
</script>

<template>
    <div class="flex justify-center py-24 sm:py-32">
        <div class="mx-auto container px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {{ props.blok.title }}
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <NuxtLink
                        to="/blog"
                        class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >Get started</NuxtLink
                    >
                    <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
                        >Learn more <span aria-hidden="true">→</span></a
                    >
                </div>
            </div>
        </div>
    </div>
</template>
