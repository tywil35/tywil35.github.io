<script setup>
import IconOctoCode from '../icons/IconOctoCode.vue'
defineProps({
    rate: Number
})
const commonClasses = 'bg-slate-700 text-green-600 h-8 w-8 p-2 rounded';
</script>

<template>
    <div class="pl-2 flex gap-4">
        <IconOctoCode v-if="rate >= 1" :class="commonClasses" />
        <IconOctoCode v-if="rate >= 2" :class="commonClasses" />
        <IconOctoCode v-if="rate >= 3" :class="commonClasses" />
        <IconOctoCode v-if="rate >= 4" :class="commonClasses" />
        <IconOctoCode v-if="rate >= 5" :class="commonClasses" />
    </div>
</template>

