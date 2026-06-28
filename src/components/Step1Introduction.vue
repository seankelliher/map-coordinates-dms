<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <div id="container" v-if="store.step === 'step1'">
        <header>
            <h1>Map Coordinates</h1>
        </header>
        <main>
            <figure class="full">
                <img src="/images/hikers-qom-province-iran-mostafameraji.jpg" alt="hikers gaze on snow covered hills ahead of them">
                <figcaption>Hikers on their way to the summit of Valijiya in Qom province, Iran.</figcaption>
            </figure>

            <div class="text">
                <h2>Let's Get Started</h2>
                <p>We'll convert longitude and latitude coordinates from the Degrees, Minutes, Seconds (DMS) format to the Digital Degrees (DD) format, used in computer-based mapping such as Mapbox, CARTO, and Google Maps. <span class="emphasis">We provide some preset locations if you just want to see how this works.</span></p>
            </div>
            <div class="notice">
                <p>Explore work by the Iranian photographer Mostafa Meraji (above photo) on <a href="https://commons.wikimedia.org/wiki/User:Mostafameraji" target="_blank">Wikimedia</a>.</p>
            </div>
        </main>

        <nav>
            <button
                tabindex="0"
                @click="store.updateStep('step2')"
                @keyup.enter="store.updateStep('step2')"
            >
                Start
            </button>
        </nav>
    </div>
</template>

<style scoped>
</style>