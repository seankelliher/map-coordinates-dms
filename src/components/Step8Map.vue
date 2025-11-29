<script setup>
import { store } from "../composables/store.js";
import AreaMap from "./AreaMap.vue";
</script>

<template>
    <div id="container" v-if="store.step === 'step8'">
        <div id="map-area">
            <AreaMap />
        </div>

        <div id="map-coords">
            <dl>
                <dt>Coordinates</dt>
                <dd>Longitude: {{ store.resultLon }}</dd>
                <dd>Latitude: {{ store.resultLat }}</dd>      
            </dl>
        </div>

        <button
            id="map-start-over"
            tabindex="0"
            @click="store.updateStep('step1'), store.resetVars()"
            @keyup.enter="store.updateStep('step1'), store.resetVars()"
        >
            Start over
        </button>
    </div>
</template>

<style scoped>
</style>