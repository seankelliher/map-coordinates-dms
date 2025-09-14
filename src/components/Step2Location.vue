<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <div id="container" v-if="store.step === 'step2'">
        <header>
            <h1>Location</h1>
        </header>

        <main>
            <div class="text">
                <p><span class="emphasis">Choose your own or a preset location.</span> If you choose a preset location, its coordinates will be provided.</p>
            </div>

            <form>
                <fieldset>
                    <legend>Choose a location</legend>
                    <input
                        type="radio"
                        id="own-loc"
                        name="loc-names"
                        value="own"
                        @input="store.updateLoc($event.target.value)"
                        :checked="store.currentLoc === 'own'"
                    >
                    <label
                        for="own-loc"
                        class="label-radio"
                    >
                        Enter your own
                    </label>
                    <input
                        type="radio"
                        id="eiffel-tower"
                        name="loc-names"
                        value="eiffel"
                        @input="store.updateLoc($event.target.value)"
                        :checked="store.currentLoc === 'eiffel'"
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
                        name="loc-names"
                        value="moma"
                        @input="store.updateLoc($event.target.value)"
                        :checked="store.currentLoc === 'moma'"
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
                        name="loc-names"
                        value="hallgrim"
                        @input="store.updateLoc($event.target.value)"
                        :checked="store.currentLoc === 'hallgrim'"
                    >
                    <label
                        for="hallgrim-church"
                        class="label-radio"
                    >
                        Hallgrimskirkja, Reykjavík
                    </label>
                </fieldset>
            </form>
        </main>

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
    </div>
</template>

<style scoped>
</style>