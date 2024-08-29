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
    <main v-if="store.step === 'step5'">
        <section>
            <h1>Review</h1>
        </section>

        <div class="results height">
            <p><strong>You entered these coordinates. Does everything look okay?</strong></p>
            <ul>
                <li>Longitude: {{ store.lonDegs }} degs, {{ store.lonMins }} mins, {{ store.lonSecs }} secs, {{ lonHemsTitleCase }}</li>
            </ul>

            <ul>
                <li>Latitude: {{ store.latDegs }} degs, {{ store.latMins }} mins, {{ store.latSecs }} secs, {{ latHemsTitleCase }}</li>
            </ul>                

            <ul>
                <li>Percision: 
                    <span v-if="store.percision === '0'">within 111km</span>
                    <span v-if="store.percision === '1'">11.1km</span>
                    <span v-if="store.percision === '2'">1.11km</span>
                    <span v-if="store.percision === '3'">111 meters</span>
                    <span v-if="store.percision === '4'">11.1 meters</span>
                    <span v-if="store.percision === '5'">1.11 meters</span>  
                </li>
            </ul>
        </div>

        <nav>
            <button
                tabindex="0"
                @click="store.updateStep('step4')"
                @keyup.enter="store.updateStep('step4')"
            >
                No, previous
            </button>
            <button
                tabindex="0"
                @click="store.updateStep('step6')"
                @keyup.enter="store.updateStep('step6')"
            >
                Yes, convert
            </button>
        </nav>
    </main>
</template>

<style scoped>
</style>