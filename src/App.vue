<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FetchMe } from './services/fetch-me.service';
import { Me } from './types/me.type';
import DetailTabs from './components/DetailTabs.vue';
import WorkExperienceSection from './components/WorkExperienceSection.vue';
import PersonalSection from './components/PersonalSection.vue';
import EducationSection from './components/EducationSection.vue';
import InterestsSection from './components/InterestsSection.vue';
import AboutMeSection from './components/AboutMeSection.vue';

const me = ref<Me | undefined>();

const what = ref<string>("personal");
onMounted(async () => {
  try {
    me.value = await FetchMe();
  } catch (error) {
    // silently fail and do nothing
    console.warn(error);
  }
})
</script>

<template>
  <div class="h-full w-screen relative">
    <DetailTabs :me="me" class="sticky top-0 w-full" :what="what" @switch="what = $event" />
    <div ref="workDetail" class="">
      <div v-if="what === 'personal'">
        <PersonalSection :me="me" />
      </div>
      <div v-if="what === 'about'">
        <AboutMeSection :me="me" />
      </div>
      <div v-if="what === 'work'" class="grid gap-4">
        <h2 class="text-center mt-4 text-3xl font-bold">Work Experiences</h2>
        <h2 class="text-center"><b>{{(me?.workExperiences.length ?? 3) - 3}}</b> Projects</h2>
        <WorkExperienceSection :workExperiences="me?.workExperiences" />
      </div>
      <div v-if="what === 'education'" class="grid gap-4">
        <h2  class="text-center mt-4 text-3xl font-bold">Education</h2>
        <EducationSection :education="me?.education" />
      </div>
      <div v-if="what === 'interest'" class="grid gap-4">
        <h2  class="text-center mt-4 text-3xl font-bold">Interests</h2>
        <InterestsSection :interests="me?.interest" />
      </div>
    </div>
  </div>
</template>

