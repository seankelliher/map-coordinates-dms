<script setup>
import { store } from "../composables/store.js";

</script>

<template>
    <section v-if="store.step === 'step4'">
        <form>
            <h2>Percision - {{ store.step }}</h2>
            <h3>Now, we'll decide percision.</h3>
            <p>More numbers after the decimal point bring greater percison, but also require more computing power to run mapping software. How much percison do you need?</p>
            <fieldset>
                <!-- <legend>More numbers after the decimal point bring greater percison, but also require more computing power to run mapping software. How much percison do you need?</legend> -->

                <label for="level6">within 111km (not recommended)</label>
                <input
                    type="radio"
                    id="level6"
                    name="percision"
                    value="level6"
                    @input="store.updatePercision($event.target.value)"
                    :checked="store.percision === 'level6'"
                >

                <label for="level5">within 11.1km</label>
                <input
                    type="radio"
                    id="level5"
                    name="percision"
                    value="level5"
                    @input="store.updatePercision($event.target.value)"
                    :checked="store.percision === 'level5'"
                >

                <label for="level4">within 1.1km</label>
                <input
                    type="radio"
                    id="level4"
                    name="percision"
                    value="level4"
                    @input="store.updatePercision($event.target.value)"
                    :checked="store.percision === 'level4'"
                >

                <label for="level3">within 111 meters</label>
                <input
                    type="radio"
                    id="level3"
                    name="percision"
                    value="level3"
                    @input="store.updatePercision($event.target.value)"
                    :checked="store.percision === 'level3'"
                >

                <label for="level2">within 11.1 meters</label>
                <input
                    type="radio"
                    id="level2"
                    name="percision"
                    value="level2"
                    @input="store.updatePercision($event.target.value)"
                    :checked="store.percision === 'level2'"
                >

                <label for="level1">within 1.11 meters</label>
                <input
                    type="radio"
                    id="level1"
                    name="percision"
                    value="level1"
                    @input="store.updatePercision($event.target.value)"
                    :checked="store.percision === 'level1'"
                >
                <p class="error" v-if="store.percisionError">Choose a level of percision.</p>
            </fieldset>
        </form>
        <nav>
            <button @click="store.updateStep('step3')">Previous</button>
            <button @click="store.checkPercisionSuccess() ? store.updateStep('step5') : ''">Next</button>
        </nav>
    </section>
</template>

<style scoped>
</style>
