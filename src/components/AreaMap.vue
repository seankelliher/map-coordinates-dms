<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { store } from "../composables/store.js";
import mapboxgl from "mapbox-gl";
import "../../node_modules/mapbox-gl/dist/mapbox-gl.css";

// Token restricted to single URL.
mapboxgl.accessToken = "pk.eyJ1Ijoic2s1NjQ2NzMiLCJhIjoiY2xwb2E5c2NkMGx1NDJqcWpscHk3amN2biJ9.te6TENoEkiQS3MjaAgz08Q";

let map;
// let mapContainer;
const mapContainer = ref(null);

onMounted(() => {
    map = new mapboxgl.Map({
        // container: mapContainer,
        container: mapContainer.value,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [`${store.resultLon}`, `${store.resultLat}`],
        zoom: 14.0
    });

    new mapboxgl.Marker().setLngLat([`${store.resultLon}`, `${store.resultLat}`]).addTo(map);
});

onUnmounted(() => {
    map.remove();
    map = null;
});
</script>

<template>
    <div ref="mapContainer" class="map-container"></div>
</template>

<style scoped></style>