<script setup>
import { computed } from "vue";
import { store } from "../composables/store.js";

// Makes longitude hemisphere, East or West, title case.
const lonHemsTitleCase = computed(() => {
    return store.lonHems.replace(/^./, store.lonHems[0].toUpperCase());
});

// Makes latitude hemisphere, North South, title case.
const latHemsTitleCase = computed(() => {
    return store.latHems.replace(/^./, store.latHems[0].toUpperCase());
});
</script>

<template>
    <main v-if="store.step === 'step6'">
        <header>
            <h1>Review</h1>
        </header>

        <div class="results height">
            <p>You entered these coordinates. Does everything look okay?</p>
            <ul>
                <li>Longitude: {{ store.lonDegs }} degs, {{ store.lonMins }} mins, {{ store.lonSecs }} secs, {{ lonHemsTitleCase }}</li>
            </ul>

            <ul>
                <li>Latitude: {{ store.latDegs }} degs, {{ store.latMins }} mins, {{ store.latSecs }} secs, {{ latHemsTitleCase }}</li>
            </ul>                

            <ul>
                <li>Precision: 
                    <span v-if="store.precision === '0'">within 111km</span>
                    <span v-if="store.precision === '1'">11.1km</span>
                    <span v-if="store.precision === '2'">1.11km</span>
                    <span v-if="store.precision === '3'">111 meters</span>
                    <span v-if="store.precision === '4'">11.1 meters</span>
                    <span v-if="store.precision === '5'">1.11 meters</span>  
                </li>
            </ul>
        </div>

        <nav>
            <button
                tabindex="0"
                @click="store.updateStep('step5')"
                @keyup.enter="store.updateStep('step5')"
            >
                No, previous
            </button>
            <button
                tabindex="0"
                @click="store.updateStep('step7')"
                @keyup.enter="store.updateStep('step7')"
            >
                Yes, convert
            </button>
        </nav>
    </main>
</template>

<style scoped>
</style>