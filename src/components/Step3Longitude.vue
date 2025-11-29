<script setup>
import { store } from "../composables/store.js";
import { ref } from "vue";

const lonDegsError = ref(false);
const lonMinsError = ref(false);
const lonSecsError = ref(false);
const lonHemsError = ref(false);

function updateLonDegs(etv) {
    if (etv >= 0 && etv <=180) {
        lonDegsError.value = false;
        store.lonDegs = etv;
    } else {
        lonDegsError.value = true;
        store.lonDegs = etv; // Allows full "bad number" to display in input.
    }
}

function updateLonMins(etv) {
    if (etv >= 0 && etv <=60) {
        lonMinsError.value = false;
        store.lonMins = etv;
    } else {
        lonMinsError.value = true;
        store.lonMins = etv;
    }
}

function updateLonSecs(etv) {
    if (etv >= 0 && etv <=60) {
        lonSecsError.value = false;
        store.lonSecs = etv;
    } else {
        lonSecsError.value = true;
        store.lonSecs = etv;
    }
}

function updateLonHems(etv) {
    if (etv === "") {
        lonHemsError.value = true;
    } else {
        lonHemsError.value = false;
        store.lonHems = etv;
    }
}

function checkLonSuccess() {
    if (store.lonDegs === "" || store.lonDegs < 0 || store.lonDegs > 180) {
        lonDegsError.value = true;
    } else if (store.lonMins === "" || store.lonMins < 0 || store.lonMins > 60) {
        lonMinsError.value = true;
    } else if (store.lonSecs === "" || store.lonSecs < 0 || store.lonSecs > 60) {
        lonSecsError.value = true;
    } else if (store.lonHems === "") {
        lonHemsError.value = true;
    } else {
        return true;
    }
}

// If user does not complete a field, gets error msg, and then clicks previous.
// This functions clears the error message.
function clearErrorMsg() {
    lonDegsError.value = false;
    lonMinsError.value = false;
    lonSecsError.value = false;
    lonHemsError.value = false;
}
</script>

<template>
    <div id="container" v-if="store.step === 'step3'">
        <header>
            <h1>Longitude Coordinates</h1>
        </header>

        <main>
            <div class="text">
                <h2>{{ store.currentLocName }}</h2>
            </div>

            <form>
                <fieldset>
                    <legend>Enter coordinates</legend>
                    <input
                        type="text"
                        id="lon-degs"
                        name="lon-degs"
                        minlength="1"
                        maxlength="3"
                        :value="`${store.lonDegs}`"
                        @input="updateLonDegs($event.target.value)"
                    >
                    <label
                        for="lon-degs"
                        class="label-txt"
                    >
                        degrees
                    </label>
                    <p class="error" v-if="lonDegsError">Enter a number 0 - 180</p>

                    <input
                        type="text"
                        id="lon-mins"
                        name="lon-mins"
                        minlength="1"
                        maxlength="2"
                        :value="`${store.lonMins}`"
                        @input="updateLonMins($event.target.value)"
                    >
                    <label
                        for="lon-mins"
                        class="label-txt"
                    >
                        minutes
                    </label>
                    <p class="error" v-if="lonMinsError">Enter a number 0 - 59</p>

                    <input
                        type="text"
                        id="lon-secs"
                        name="lon-secs"
                        minlength="1"
                        maxlength="7"
                        :value="`${store.lonSecs}`"
                        @input="updateLonSecs($event.target.value)"
                    >
                    <label
                        for="lon-secs"
                        class="label-txt"
                    >
                        seconds
                    </label>
                    <p class="error" v-if="lonSecsError">Enter a number 0 - 59</p>
                </fieldset>
                <fieldset>

                    <legend>Choose a hemisphere</legend>
                    <input
                        type="radio"
                        id="lon-east"
                        name="lon-hems"
                        value="east"
                        @input="updateLonHems($event.target.value)"
                        :checked="store.lonHems === 'east'"
                    >
                    <label
                        for="lon-east"
                        class="label-radio"
                    >
                        East
                    </label>
                    <input
                        type="radio"
                        id="lon-west"
                        name="lon-hems"
                        value="west"
                        @input="updateLonHems($event.target.value)"
                        :checked="store.lonHems === 'west'"
                    >
                    <label
                        for="lon-west"
                        class="label-radio"
                    >
                        West
                    </label>
                    <p class="error" v-if="lonHemsError">Choose a hemisphere</p>
                </fieldset>
            </form>
        </main>

        <nav>
            <button
                tabindex="0"
                @click="store.updateStep('step2'), clearErrorMsg()"
                @keyup.enter="store.updateStep('step2'), clearErrorMsg()"
            >
                Previous
            </button>
            <button
                tabindex="0"
                @click="checkLonSuccess() ? store.updateStep('step4') : ''"
                @keyup.enter="checkLonSuccess() ? store.updateStep('step4') : ''"
            >
                Next
            </button>
        </nav>
    </div>
</template>

<style scoped>
</style>