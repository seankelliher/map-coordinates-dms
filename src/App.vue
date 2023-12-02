<script setup>
import Step1Introduction from "./components/Step1Introduction.vue";
import Step2Longitude from "./components/Step2Longitude.vue";
import Step3Latitude from "./components/Step3Latitude.vue";
import Step4Percision from "./components/Step4Percision.vue";
import Step5Review from "./components/Step5Review.vue";
import Step6Result from "./components/Step6Result.vue";
</script>

<template>
    <div id="container">
        <Step1Introduction />
        <Step2Longitude />
        <Step3Latitude />
        <Step4Percision />
        <Step5Review />
        <Step6Result />
    </div>
</template>

<style scoped>
</style>