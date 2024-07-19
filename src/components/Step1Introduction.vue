<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <main v-if="store.step === 'step1'">
        <section>
            <h1>Let's get started</h1>
        </section>

        <div class="results">
            <p>We'll convert longitude and latitude coordinates from the Degrees, Minutes, Seconds (DMS) format to the Digital Degrees (DD) format. DD format is used in computer-based mapping such as Mapbox, CARTO, and Google Maps. <strong>Don't have a location in mind?</strong> Use a preset location to see how this works.</p>
        </div>

        <form>
            <fieldset>
                <legend>Locations</legend>
                <input
                    type="radio"
                    id="sample-own"
                    name="sample-locs"
                    value="own"
                    @input="store.updateSampleLocs($event.target.value)"
                    :checked="store.sampleLocs === 'own'"
                >
                <label for="sample-own">Enter your own</label>
                <input
                    type="radio"
                    id="eiffel-tower"
                    name="sample-locs"
                    value="eiffel"
                    @input="store.updateSampleLocs($event.target.value)"
                    :checked="store.sampleLocs === 'eiffel'"
                >
                <label for="eiffel-tower">Eiffel Tower, Paris</label>
                <input
                    type="radio"
                    id="moma-museum"
                    name="sample-locs"
                    value="moma"
                    @input="store.updateSampleLocs($event.target.value)"
                    :checked="store.sampleLocs === 'moma'"
                >
                <label for="met-museum">Museum Modern Art, New York</label>
                <input
                    type="radio"
                    id="hallgrim-church"
                    name="sample-locs"
                    value="hallgrim"
                    @input="store.updateSampleLocs($event.target.value)"
                    :checked="store.sampleLocs === 'hallgrim'"
                >
                <label for="hallgrim">Hallgrimskirkja, Reykjavík</label>
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