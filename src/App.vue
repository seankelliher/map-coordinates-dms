<script setup>
import Step1Introduction from "./components/Step1Introduction.vue";
import Step2Location from "./components/Step2Location.vue";
import Step3Longitude from "./components/Step3Longitude.vue";
import Step4Latitude from "./components/Step4Latitude.vue";
import Step5Precision from "./components/Step5Precision.vue";
import Step6Review from "./components/Step6Review.vue";
import Step7Result from "./components/Step7Result.vue";
</script>

<template>
    <div id="container">
        <Step1Introduction />
        <Step2Location />
        <Step3Longitude />
        <Step4Latitude />
        <Step5Precision />
        <Step6Review />
        <Step7Result />
    </div>
</template>

<style scoped>
</style>