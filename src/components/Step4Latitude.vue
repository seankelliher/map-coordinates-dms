<script setup>
import { store } from "../composables/store.js";
import { ref } from "vue";

const latDegsError = ref(false);
const latMinsError = ref(false);
const latSecsError = ref(false);
const latHemsError = ref(false);

function updateLatDegs(etv) {
    if (etv >= 0 && etv <=90) {
        latDegsError.value = false;
        store.latDegs = etv;
    } else {
        latDegsError.value = true;
        store.latDegs = etv; // Allows full "bad number" to display in input.
    }
}

function updateLatMins(etv) {
    if (etv >= 0 && etv <=60) {
        latMinsError.value = false;
        store.latMins = etv;
    } else {
        latMinsError.value = true;
        store.latMins = etv;
    }
}

function updateLatSecs(etv) {
    if (etv >= 0 && etv <=60) {
        latSecsError.value = false;
        store.latSecs = etv;
    } else {
        latSecsError.value = true;
        store.latSecs = etv;
    }
}

function updateLatHems(etv) {
    if (etv === "") {
        latHemsError.value = true;
    } else {
        latHemsError.value = false;
        store.latHems = etv;
    }
}

function checkLatSuccess() {
    if (store.latDegs === "" || store.latDegs < 0 || store.latDegs > 90) {
        latDegsError.value = true;
    } else if (store.latMins === "" || store.latMins < 0 || store.latMins > 60) {
        latMinsError.value = true;
    } else if (store.latSecs === ""|| store.latSecs < 0 || store.latSecs > 60) {
        latSecsError.value = true;
    } else if (store.latHems === "") {
        latHemsError.value = true;
    } else {
        return true;
    }
}

// If user does not complete a field, gets error msg, and then clicks previous.
// This functions clears the error message.
function clearErrorMsg() {
    latDegsError.value = false;
    latMinsError.value = false;
    latSecsError.value = false;
    latHemsError.value = false;
}
</script>

<template>
    <div id="container" v-if="store.step === 'step4'">
        <header>
            <h1>Latitude Coordinates</h1>
        </header>

        <main>
            <div class="text">
                <p><span class="emphasis">{{ store.currentLocName }}</span> Latitude Coordinates</p>
            </div>

            <form>
                <fieldset>
                    <legend>Enter coordinates</legend>
                    <input
                        type="text"
                        id="lat-degs"
                        name="lat-degs"
                        minlength="1"
                        maxlength="2"
                        :value="`${store.latDegs}`"
                        @input="updateLatDegs($event.target.value)"
                    >
                    <label
                        for="lat-degs"
                        class="label-txt"
                    >
                        degrees
                    </label>
                    <p class="error" v-if="latDegsError">Enter a number 0 - 90</p>

                    <input
                        type="text"
                        id="lat-mins"
                        name="lat-mins"
                        minlength="1"
                        maxlength="2"
                        :value="`${store.latMins}`"
                        @input="updateLatMins($event.target.value)"
                    >
                    <label
                        for="lat-mins"
                        class="label-txt"
                    >
                        minutes
                    </label>
                    <p class="error" v-if="latMinsError">Enter a number 0 - 59</p>

                    <input
                        type="text"
                        id="lat-secs"
                        name="lat-secs"
                        minlength="1"
                        maxlength="7"
                        :value="`${store.latSecs}`"
                        @input="updateLatSecs($event.target.value)"
                    >
                    <label
                        for="lat-secs"
                        class="label-txt"
                    >
                        seconds
                    </label>
                    <p class="error" v-if="latSecsError">Enter a number 0 - 59</p>
                </fieldset>

                <!-- <h2>And, then enter a hemisphere.</h2> -->

                <fieldset>
                    <legend>Choose a hemisphere</legend>
                    <input
                        type="radio"
                        id="lat-north"
                        name="lat-hems"
                        value="north"
                        @input="updateLatHems($event.target.value)"
                        :checked="store.latHems === 'north'"
                    >
                    <label
                        for="lat-north"
                        class="label-radio"
                    >
                        North
                    </label>
                    <input
                        type="radio"
                        id="lat-south"
                        name="lat-hems"
                        value="south"
                        @input="updateLatHems($event.target.value)"
                        :checked="store.latHems === 'south'"
                    >
                    <label
                        for="lat-south"
                        class="label-radio"
                    >
                        South
                    </label>
                    <p class="error" v-if="latHemsError">Choose a hemisphere</p>
                </fieldset>
            </form>
        </main>

        <nav>
            <button
                tabindex="0"
                @click="store.updateStep('step3'), clearErrorMsg()"
                @keyup.enter="store.updateStep('step3'), clearErrorMsg()"
            >
                Previous
            </button>
            <button
                tabindex="0"
                @click="checkLatSuccess() ? store.updateStep('step5') : ''"
                @keyup.enter="checkLatSuccess() ? store.updateStep('step5') : ''"
            >
                Next
            </button>
        </nav>
    </div>
</template>

<style scoped>
</style>