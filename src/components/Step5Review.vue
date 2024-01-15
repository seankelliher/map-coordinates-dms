<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <main v-if="store.step === 'step5'">
        <section>
            <h1>Let's review your coordinates.</h1>
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