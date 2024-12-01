<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <main v-if="store.step === 'step1'">
        <section>
            <figure class="full">
                <img src="/images/hikers-qom-province-iran-mostafameraji.jpg" alt="hikers gaze on snow covered hills ahead of them">
                <figcaption hidden>Hikers on their way to the summit of Valijiya in Qom province, Iran. Photo: Mostafameraji</figcaption>
            </figure>

            <div class="text">
                <h1 class="n10">Let's get started</h1>
                <p>We'll convert longitude and latitude coordinates from the Degrees, Minutes, Seconds (DMS) format to the Digital Degrees (DD) format, used in computer-based mapping such as Mapbox, CARTO, and Google Maps. We provide some preset locations if you just want to see how this works. (Above: Qom province, Iran. Photo: <a href="https://commons.wikimedia.org/wiki/File:صعود_به_قله_ولیجیا_در_حوالی_روستای_جاسب_-_استان_قم_05.jpg" target="_blank">Mostafameraji</a>)</p>
            </div>
        </section>

        <nav>
            <button
                tabindex="0"
                @click="store.updateStep('step2')"
                @keyup.enter="store.updateStep('step2')"
            >
                Start
            </button>
        </nav>
    </main>
</template>

<style scoped>
</style>