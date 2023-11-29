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
</script>

<template>
    <main v-if="store.step === 'step2'">
        <section>
            <h1>We'll gather longitude coordinates.</h1>
        </section>

        <form>
            <fieldset>
                <label for="lon-degs">How many degrees?</label>
                <input
                    type="text"
                    id="lon-degs"
                    name="lon-degs"
                    minlength="1"
                    maxlength="3"
                    :value="`${store.lonDegs}`"
                    @input="updateLonDegs($event.target.value)"
                >
                <p class="error" v-if="lonDegsError">Enter a number 0 - 180</p>
            </fieldset>

            <fieldset>
                <label for="lon-mins">How many minutes?</label>
                <input
                    type="text"
                    id="lon-mins"
                    name="lon-mins"
                    minlength="1"
                    maxlength="2"
                    :value="`${store.lonMins}`"
                    @input="updateLonMins($event.target.value)"
                >
                <p class="error" v-if="lonMinsError">Enter a number 0 - 60</p>
            </fieldset>

            <fieldset>
                <label for="lon-secs">How many seconds?</label>
                <input
                    type="text"
                    id="lon-secs"
                    name="lon-secs"
                    minlength="1"
                    maxlength="2"
                    :value="`${store.lonSecs}`"
                    @input="updateLonSecs($event.target.value)"
                >
                <p class="error" v-if="lonSecsError">Enter a number 0 - 60</p>
            </fieldset>

            <h2>And, then enter a hemisphere.</h2>

            <fieldset>
                <input
                    type="radio"
                    id="lon-east"
                    name="lon-hems"
                    value="east"
                    @input="updateLonHems($event.target.value)"
                    :checked="store.lonHems === 'east'"
                >
                <label for="lon-east">East</label>
                <input
                    type="radio"
                    id="lon-west"
                    name="lon-hems"
                    value="west"
                    @input="updateLonHems($event.target.value)"
                    :checked="store.lonHems === 'west'"
                >
                <label for="lon-west">West</label>
                <p class="error" v-if="lonHemsError">Choose a hemisphere</p>
            </fieldset>
        </form>

        <nav>
            <button @click="store.updateStep('step1')">Previous</button>
            <button @click="checkLonSuccess() ? store.updateStep('step3') : ''">Next</button>
        </nav>
    </main>
</template>

<style scoped>
</style>
