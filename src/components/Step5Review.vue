<script setup>
import { store } from "../composables/store.js";

</script>

<template>
    <section v-if="store.step === 'step5'">
        <div class="status">
            <h2>Review - {{ store.step }}</h2>
            <h3>Let's review what you entered.</h3>
            <p>You entered these coordinates. Does everything look okay?</p>

            <ul>
                <li>Longitude: {{ store.lonDegs }} degrees, {{ store.lonMins }} minutes, {{ store.lonSecs }} seconds</li>
                <li>Latitude: {{ store.latDegs }} degrees, {{ store.latMins }} minutes, {{ store.latSecs }} seconds</li>
                <li>Percision: {{ store.percision }}</li>
            </ul>
        </div>

        <nav>
            <button @click="store.updateStep('step4')">No, previous</button>
            <button @click="store.updateStep('step6')">Yes, convert</button>
        </nav>
    </section>
</template>

<style scoped>
</style>
