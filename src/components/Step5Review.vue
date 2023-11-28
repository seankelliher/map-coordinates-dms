<script setup>
import { store } from "../composables/store.js";

</script>

<template>
    <main v-if="store.step === 'step5'">
        <section>
            <h2>Review</h2>
            <h3>Let's review what you entered.</h3>
        </section>

        <div class="results">
            <p>You entered these coordinates. Does everything look okay?</p>
            <ul>
                <li>Longitude: {{ store.lonDegs }} degrees, {{ store.lonMins }} minutes, {{ store.lonSecs }} seconds {{ store.lonHems.toUpperCase() }}</li>
                <li>Latitude: {{ store.latDegs }} degrees, {{ store.latMins }} minutes, {{ store.latSecs }} seconds {{ store.latHems.toUpperCase() }}</li>
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
            <button @click="store.updateStep('step4')">No, previous</button>
            <button @click="store.updateStep('step6')">Yes, convert</button>
        </nav>
    </main>
</template>

<style scoped>
</style>
