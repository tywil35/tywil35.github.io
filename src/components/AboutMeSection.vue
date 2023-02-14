<script setup lang="ts">
import { computed, PropType } from 'vue';
import { Me } from '../types/me.type';
const props = defineProps({
    me: { type: Object as PropType<Me>, required: false }
});
const years = computed<number>(() => {
    const diff = (new Date("11/01/2017").getTime() - new Date().getTime()) / 1000;
    return Math.abs(Math.round((diff / (60 * 60 * 24)) / 365.25));
});
</script>
<template>
    <div class="w-5/6 bg-white rounded px-4 py-2 shadow mx-auto my-4">
        <h2 class="text-center mt-4 text-xl font-bold">About Me</h2>
        <p class="px-2 text-slate-600">Software developer by day and software developer on call at night &#128578;.
            <br />I have been a software developer for {{ years }} years.
        </p>
        <br />
        <p class="px-2 text-slate-600 whitespace-pre-line">{{ me?.about }}</p>
    </div>
</template>