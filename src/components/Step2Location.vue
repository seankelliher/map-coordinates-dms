<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <main v-if="store.step === 'step2'">
        <header>
            <h1>Location</h1>
        </header>

        <form class="height">
            <p>You may enter the coordinates of your own location. If you choose one of the preset locations, all upcoming fields will be "filled in" for you.</p>
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
                @click="store.updateStep('step1')"
                @keyup.enter="store.updateStep('step1')"
            >
                Previous
            </button>
            <button
                tabindex="0"
                @click="store.updateStep('step3')"
                @keyup.enter="store.updateStep('step3')"
            >
                Next
            </button>
        </nav>
    </main>
</template>

<style scoped>
</style>