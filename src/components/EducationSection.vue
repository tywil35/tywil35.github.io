<script setup lang="ts">
import { PropType } from 'vue';
import { Education } from '../types/education.type';
defineProps({
    education: { type: Array as PropType<Education[]>, required: false }
});
</script>
<template>
    <div class="w-5/6 bg-white rounded px-4 py-2 shadow mx-auto" v-for="edu in education" :key="edu.name">
        <h2 class="text-lg font-bold">{{ edu.name }} | {{ `${edu.from} ${edu.to ? ' -> ' + edu.to : ''}` }}</h2>
        <p :key="mod" v-for="mod in edu.modules" class="px-2 text-slate-600"> &#8226; {{ mod }}</p>
    </div>
</template>