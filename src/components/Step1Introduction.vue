<script setup>
import { store } from "../composables/store.js";
</script>

<template>
    <section v-if="store.step === 'step1'">
        <div class="status">
            <h2>Intro - {{ store.step }}</h2>
            <p>We are going to convert longitude and latitude coordinates in the Degress, Minutes, Seconds format to the Digital Degrees format to use in computer-based mapping.</p>
        </div>

        <nav>
            <button @click="store.updateStep('step2')">Start</button>
        </nav>
    </section>
</template>

<style scoped>
</style>
