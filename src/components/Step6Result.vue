<script setup>
import { store } from "../composables/store.js";

</script>

<template>
    <section v-if="store.step === 'step6'">
        <div class="status">
            <h2>Result - {{ store.step }}</h2>
            <p>Here are your coordinates in Digital Degrees format with ADD .</p>

            <ul>
                <li>Longtude result - clipboard functionality</li>
                <li>Latitude result - clipboard functionality</li>
                <li>Accurate to this distance</li>
            </ul>
        </div>

        <nav>
            <button @click="store.updateStep('step1')">Start over</button>
        </nav>
    </section>
</template>

<style scoped>
</style>
