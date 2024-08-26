<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <main v-if="store.step === 'step1'">
        <section>
            <h1>Let's Get Started</h1>
        </section>

        <div class="results">
            <p>We'll convert longitude and latitude coordinates from the Degrees, Minutes, Seconds (DMS) format to the Digital Degrees (DD) format. DD format is used in computer-based mapping such as Mapbox, CARTO, and Google Maps. <strong>Below are a few preset locations if you just want to see how this works.</strong></p>
        </div>

        <form>
            <fieldset>
                <legend>Choose a location</legend>
                <input
                    type="radio"
                    id="sample-own"
                    name="sample-locs"
                    value="own"
                    @input="store.updateSampleLocs($event.target.value)"
                    :checked="store.sampleLocs === 'own'"
                >
                <label
                    for="sample-own"
                    class="label-radio"
                >
                    Enter your own
                </label>
                <input
                    type="radio"
                    id="eiffel-tower"
                    name="sample-locs"
                    value="eiffel"
                    @input="store.updateSampleLocs($event.target.value)"
                    :checked="store.sampleLocs === 'eiffel'"
                >
                <label
                    for="eiffel-tower"
                    class="label-radio"
                >
                    Eiffel Tower, Paris
                </label>
                <input
                    type="radio"
                    id="moma-museum"
                    name="sample-locs"
                    value="moma"
                    @input="store.updateSampleLocs($event.target.value)"
                    :checked="store.sampleLocs === 'moma'"
                >
                <label
                    for="moma-museum"
                    class="label-radio"
                >
                    Museum Modern Art, New York
                </label>
                <input
                    type="radio"
                    id="hallgrim-church"
                    name="sample-locs"
                    value="hallgrim"
                    @input="store.updateSampleLocs($event.target.value)"
                    :checked="store.sampleLocs === 'hallgrim'"
                >
                <label
                    for="hallgrim-church"
                    class="label-radio"
                >
                    Hallgrimskirkja, Reykjavík
                </label>
            </fieldset>
        </form>

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