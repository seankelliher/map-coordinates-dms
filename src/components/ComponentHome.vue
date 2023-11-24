<script setup>
import Step1Introduction from "./Step1Introduction.vue";
import Step2Longitude from "./Step2Longitude.vue";
import Step3Latitude from "./Step3Latitude.vue";
import Step4Percision from "./Step4Percision.vue";
import Step5Review from "./Step5Review.vue";
import Step6Result from "./Step6Result.vue";

import {ref } from "vue";

const step = ref("step1");

const lonDegs = ref("");
const lonMins = ref("");
const lonSecs = ref("");
const lonHems = ref(""); // East, West.

const latDegs = ref("");
const latMins = ref("");
const latSecs = ref("");
const latHems = ref(""); // North, South.

const percision = ref("");

</script>

<template>
    <div id="container">
        <Step1Introduction v-model:step="step" />
        <Step2Longitude
            v-model:step="step"
            v-model:lonDegs="lonDegs"
            v-model:lonMins="lonMins"
            v-model:lonSecs="lonSecs"
            v-model:lonHems="lonHems"
        />
        <Step3Latitude
            v-model:step="step"
            v-model:latDegs="latDegs"
            v-model:latMins="latMins"
            v-model:latSecs="latSecs"
            v-model:latHems="latHems"
        />
        <Step4Percision v-model:step="step" />
        <Step5Review
            v-model:step="step"
            v-model:lonDegs="lonDegs"
            v-model:lonMins="lonMins"
            v-model:lonSecs="lonSecs"
            v-model:lonHems="lonHems"
            v-model:latDegs="latDegs"
            v-model:latMins="latMins"
            v-model:latSecs="latSecs"
            v-model:latHems="latHems"
        />
        <Step6Result
            v-model:step="step"
            v-model:percision="percision"
        />
        <Step7Result v-model:step="step" />
    </div>
</template>

<style scoped>
</style> 
