<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue';
import CaretSwitch from '../components/CaretSwitch.vue'
import RateComponent from '../components/RateComponent.vue'
import { Rated } from '../types/rated.type'
const props = defineProps({
    preset: { type: Boolean, required: false },
    sectionName: { type: String, required: true },
    rates: { type: Array as PropType<Rated[]>, required: true }
});
const expanded = ref(false);
onMounted(() => {
    expanded.value = props.preset ?? false;
})
</script>

<template>
    <div @click="expanded = !expanded">
        <div class="text-lg text-white bg-slate-500 px-4 py-2 flex">
            <div class="w-1/2 flex gap-2">
                <CaretSwitch :switchValue="expanded"/>
                <span>{{ sectionName }}</span>
            </div>
            <div class="w-1/2">
                <div class="float-right bg-red-400 h-8 w-8 rounded-full flex justify-center items-center"><span>{{
                    rates.length
                }}</span></div>
            </div>
        </div>
        <div v-if="expanded" class="px-4 py-2 grid  gap-2 divide-y-2">
            <div v-for="rate in rates" :key="rate.name">
                <p>{{ rate.name }}</p>
                <RateComponent :rate="rate.rated" />
            </div>
        </div>
    </div>
</template>

