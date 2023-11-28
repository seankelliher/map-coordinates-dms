<script setup>
import Step1Introduction from "./Step1Introduction.vue";
import Step2Longitude from "./Step2Longitude.vue";
import Step3Latitude from "./Step3Latitude.vue";
import Step4Percision from "./Step4Percision.vue";
import Step5Review from "./Step5Review.vue";
import Step6Result from "./Step6Result.vue";

</script>

<template>
    <div id="container">
        <header>
            <h1>Map coordinates</h1>
        </header>
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
