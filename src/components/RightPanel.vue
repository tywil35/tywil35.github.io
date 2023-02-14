<script setup lang="ts">
import { computed, PropType } from 'vue';
import { Me } from '../types/me.type';
import { Rated } from '../types/rated.type';
import { CheckAndSortRates } from '../utils/sort-by-rate.util';
import ExpandableSection from './ExpandableSection.vue';
const props = defineProps({
    me: { type: Object as PropType<Me>, required: false }
});
const skillsSorted = computed<Rated[]>(() => CheckAndSortRates('skills', props.me));
const softwaresSorted = computed<Rated[]>(() => CheckAndSortRates('softwares', props.me));
const langSorted = computed<Rated[]>(() => CheckAndSortRates('languages', props.me));
</script>
<template>
    <div ref="personalDetail" class="relative h-full w-1/4 bg-white text-black overflow-y-auto">
        <div class="sticky bg-white top-0 px-4 py-2 flex">
            <img class="rounded-full mx-2 my-auto h-16 w-16" :src="me?.profilePic.url" :alt="me?.profilePic.alt">
            <div>
                <p class="text-2xl font-bold">{{ me?.name }}</p>
                <p class="text-sm">{{ me?.role }}</p>
            </div>
        </div>
        <div class="text-lg text-white bg-slate-700 px-4 py-2">
            Personal Info
        </div>
        <div class="px-4 py-2 grid gap-2 divide-y-2">
            <div>
                <p class="font-bold">Address</p>
                <a :href="`http://maps.google.com/?q=${me?.address}`" target="_blank">{{ me?.address }}</a>
            </div>
            <div>
                <p class="font-bold">Mobile</p>
                <a :href="`tel:${me?.mobile}`">{{ me?.mobile }}</a>
            </div>
            <div>
                <p class="font-bold">Email</p>
                <a :href="`mailto:${me?.email}`">{{ me?.email }}</a>
            </div>
            <div>
                <p class="font-bold">Github</p>
                <a class="undeline" :href="me?.github.url" target="_blank">{{ me?.github.alt }} | {{
                    me?.github.url
                }}</a>
            </div>
        </div>

        <ExpandableSection sectionName="Skills" :rates="skillsSorted" :preset="true" />

        <ExpandableSection sectionName="Software" :rates="softwaresSorted" />

        <ExpandableSection sectionName="Languages" :rates="langSorted" />

    </div>
</template>