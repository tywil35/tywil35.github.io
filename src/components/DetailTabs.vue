<script lang="ts" setup>
import { PropType } from 'vue';
import IconPerson from '../icons/IconPerson.vue';
import IconPersonDig from '../icons/IconPersonDig.vue';
import IconPersonHiking from '../icons/IconPersonHiking.vue';
import IconUserGraduate from '../icons/IconUserGraduate.vue';
import IconUserDetail from '../icons/IconUserDetail.vue';
defineProps({
    what: { type: String, required: true }
});
defineEmits<{
    (e: "switch", v: string): void;
}>();
const selectCss = "text-yellow-500 border-b-2 border-yellow-500";
</script>

<template>
    <div class="w-full bg-slate-500 border-b border-white grid text-white">
        <ul class="cursor-pointer mx-auto flex flex-wrap text-sm text-center text-white">
            <li @click="$emit('switch', 'personal')">
                <div :class="[what === 'personal' ? selectCss : '', 'inline-flex p-4']">
                    <IconUserDetail class="h-6 w-6 mx-2" /><span class="m-auto">Personal</span>
                </div>
            </li>
            <li @click="$emit('switch', 'about')">
                <div :class="[what === 'about' ? selectCss : '', 'inline-flex p-4']">
                    <IconPerson class="h-6 w-6 mx-2" /><span class="m-auto">About Me</span>
                </div>
            </li>
            <li @click="$emit('switch', 'work')">
                <div :class="[what === 'work' ? selectCss : '', 'inline-flex p-4']">
                    <IconPersonDig class="h-6 w-6 mx-2" /><span class="m-auto">Work</span>
                </div>
            </li>
            <li @click="$emit('switch', 'education')">
                <div :class="[what === 'education' ? selectCss : '', 'inline-flex p-4']">
                    <IconUserGraduate class="h-6 w-6 mx-2" /><span class="m-auto">Education</span>
                </div>
            </li>
            <li @click="$emit('switch', 'interest')">
                <div :class="[what === 'interest' ? selectCss : '', 'inline-flex p-4']">
                    <IconPersonHiking class="h-6 w-6 mx-2" /><span class="m-auto">Interest</span>
                </div>
            </li>
        </ul>
    </div>
</template>