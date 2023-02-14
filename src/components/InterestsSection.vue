<script setup lang="ts">
import { PropType } from 'vue';
import { Interest } from '../types/interest.type';
defineProps({
    interests: { type: Array as PropType<Interest[]>, required: false }
});
</script>
<template>
      <div class="w-5/6 bg-white rounded px-4 py-2 shadow mx-auto" v-for="interest in interests"
        :key="interest.name">
        <h2 class="text-lg font-bold">{{ interest.name }}</h2>
        <p class="text-slate-600 px-2 whitespace-pre-line">{{ interest.description }}</p>
      </div>
</template>