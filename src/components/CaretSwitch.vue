<script setup lang="ts">
import IconCaretUp from '../icons/IconCaretUp.vue'
import IconCaretDown from '../icons/IconCaretDown.vue'
defineProps({
    switchValue: Boolean
})
defineEmits<{
    (e: "switch", v: boolean): void;
}>();
const commonClasses = 'm-auto h-6 w-6';
</script>

<template>
    <div>
        <IconCaretUp v-if="switchValue" :class="commonClasses" @click="$emit('switch', false)" />
        <IconCaretDown v-else :class="commonClasses" @click="$emit('switch', true)" />
    </div>
</template>

