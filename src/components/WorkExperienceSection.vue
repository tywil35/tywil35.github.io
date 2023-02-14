<script setup lang="ts">
import { PropType } from 'vue';
import { WorkExperience } from '../types/work-experience.type';
defineProps({
    workExperiences: { type: Array as PropType<WorkExperience[]>, required: false }
});
</script>
<template>
    <div class="w-5/6 bg-white rounded px-4 py-2 shadow mx-auto" v-for="xp in workExperiences" :key="xp.name">
        <h2 class="text-lg font-bold">{{ xp.name }} | {{ xp.from }} -> {{ xp.to }}</h2>
        <div class="grid gap-1">
            <p class="px-2 text-yellow-600">{{ xp.tech.join(' | ') }}</p>
            <div>
                <p class="px-2 text-slate-400" v-for="achievment in  xp.achievments" :key="achievment"> &#x2022; {{
                    achievment
                }}</p>
            </div>
        </div>
        <div class="pt-4">
            <p class="text-slate-600 whitespace-pre-line">{{ xp.experience }}</p>
        </div>
    </div>
</template>