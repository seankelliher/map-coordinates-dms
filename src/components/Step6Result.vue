<script setup>
import { store } from "../composables/store.js";
import AreaMap from "./AreaMap.vue";

function convertLon() {
    const degs = Number(store.lonDegs);
    const mins = Number(store.lonMins)/60;
    const secs = Number(store.lonSecs)/3600;

    let longitude;

    if (store.lonHems === "east") {
        longitude = degs + mins + secs;
    } else if (store.lonHems === "west") {
        longitude = (degs + mins + secs) * -1;
    }

    const multiplier = Math.pow(10, Number(store.percision) || 0);
    longitude = Math.round(longitude * multiplier) / multiplier;

    store.resultLon = longitude;
    return longitude;
}

function convertLat() {
    const degs = Number(store.latDegs);
    const mins = Number(store.latMins)/60;
    const secs = Number(store.latSecs)/3600;

    let latitude;

    if (store.latHems === "north") {
        latitude = degs + mins + secs;
    } else if (store.latHems === "south") {
        latitude = (degs + mins + secs) * -1;
    }

    const multiplier = Math.pow(10, Number(store.percision) || 0);
    latitude = Math.round(latitude * multiplier) / multiplier;

    store.resultLat = latitude;
    return latitude;
}
</script>

<template>
    <main v-if="store.step === 'step6'">
        <section>
            <h1>Results</h1>
        </section>

        <figure>
            <img src="/images/task-alt-48-icon.svg" alt="check icon">
        </figure>

        <div class="results">
            <p>You may use these Digital Degrees coordinates in computer-based mapping such as Mapbox, CARTO, and Google Maps.</p>
            <ul>
                <li>Longitude: {{ convertLon() }} &deg;</li>
                <li>Latitude: {{ convertLat() }} &deg;</li>
                <li>Accurate to
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
                @click="store.updateStep('step1'), store.resetVars()"
                @keyup.enter="store.updateStep('step1'), store.resetVars()"
            >
                Start over
            </button>
        </nav>
        <div id="map-area">
            <AreaMap />
        </div>
    </main>
</template>

<style scoped>
</style>