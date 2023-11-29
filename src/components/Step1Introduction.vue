<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <main v-if="store.step === 'step1'">
        <section>
            <h1>Let's get started.</h1>
        </section>

        <div class="results">
            <p>We are going to convert longitude and latitude coordinates in the Degress, Minutes, Seconds format to the Digital Degrees format to use in computer-based mapping.</p>
        </div>

        <nav>
            <button @click="store.updateStep('step2')">Start</button>
        </nav>
    </main>
</template>

<style scoped>
</style>
