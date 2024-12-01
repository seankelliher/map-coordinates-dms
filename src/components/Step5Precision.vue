<script setup>
import { store } from "../composables/store.js";
import { ref } from "vue";

const precisionError = ref(false);

function updatePrecision(etv) {
    if (etv === ""){
        precisionError.value = true;
    } else {
        precisionError.value = false;
        store.precision = etv;
    }
}

function checkPrecisionSuccess() {
    if (store.precision === "") {
        precisionError.value = true; 
    } else {
        return true;
    }
}

// If user does not complete a field, gets error msg, and then clicks previous.
// This functions clears the error message.
function clearErrorMsg() {
    precisionError.value = false;
}
</script>

<template>
    <main v-if="store.step === 'step5'">
        <header>
            <h1>Precision</h1>
        </header>

        <form class="height">
            <p>More numbers after the decimal point brings greater precision, but also requires mapping software to use more computing power. How much precision do you need?</p>

            <fieldset>
                <legend>Choose precision</legend>
                <input
                    type="radio"
                    id="decimal0"
                    name="precision"
                    value="0"
                    @input="updatePrecision($event.target.value)"
                    :checked="store.precision === '0'"
                >
                <label
                    for="decimal0"
                    class="label-radio"
                >
                    within 111km
                </label>
                <input
                    type="radio"
                    id="decimal1"
                    name="precision"
                    value="1"
                    @input="updatePrecision($event.target.value)"
                    :checked="store.precision === '1'"
                >
                <label
                    for="decimal1"
                    class="label-radio"
                >
                    within 11.1km
                </label>
                <input
                    type="radio"
                    id="decimal2"
                    name="precision"
                    value="2"
                    @input="updatePrecision($event.target.value)"
                    :checked="store.precision === '2'"
                >
                <label
                    for="decimal2"
                    class="label-radio"
                >
                    within 1.11km
                </label>
                <input
                    type="radio"
                    id="decimal3"
                    name="precision"
                    value="3"
                    @input="updatePrecision($event.target.value)"
                    :checked="store.precision === '3'"
                >
                <label
                    for="decimal3"
                    class="label-radio"
                >
                    within 111 meters
                </label>
                <input
                    type="radio"
                    id="decimal4"
                    name="precision"
                    value="4"
                    @input="updatePrecision($event.target.value)"
                    :checked="store.precision === '4'"
                >
                <label
                    for="decimal4"
                    class="label-radio"
                >
                    within 11.1 meters (recommended)
                </label>
                <input
                    type="radio"
                    id="decimal5"
                    name="precision"
                    value="5"
                    @input="updatePrecision($event.target.value)"
                    :checked="store.precision === '5'"
                >
                <label
                    for="decimal5"
                    class="label-radio"
                >
                    within 1.11 meters
                </label>
                <p class="error" v-if="precisionError">Choose a level of precision.</p>
            </fieldset>
        </form>

        <nav>
            <button
                tabindex="0"
                @click="store.updateStep('step4'), clearErrorMsg()"
                @keyup.enter="store.updateStep('step4'), clearErrorMsg()"
            >
                Previous
            </button>
            <button
                tabindex="0"
                @click="checkPrecisionSuccess() ? store.updateStep('step6') : ''"
                @keyup.enter="checkPrecisionSuccess() ? store.updateStep('step6') : ''"
            >
                Next
            </button>
        </nav>
    </main>
</template>

<style scoped>
</style>