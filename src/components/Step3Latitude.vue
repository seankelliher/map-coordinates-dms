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

</script>

<template>
    <main v-if="store.step === 'step3'">
        <section>
            <h2>Latitude</h2>
            <h3>Next, we'll gather latitude coordinates.</h3>
        </section>
        <form>
            <fieldset>
                <!--<legend>Next, we'll gather latitude coordinates.</legend>-->

                <label for="lat-degs">How many degrees?</label>
                <input
                    type="text"
                    id="lat-degs"
                    name="lat-degs"
                    minlength="1"
                    maxlength="2"
                    :value="`${store.latDegs}`"
                    @input="updateLatDegs($event.target.value)"
                >
                <p class="error" v-if="latDegsError">Enter a number 0 - 90</p>
            </fieldset>

            <fieldset>
                <label for="lat-mins">How many minutes?</label>
                <input
                    type="text"
                    id="lat-mins"
                    name="lat-mins"
                    minlength="1"
                    maxlength="2"
                    :value="`${store.latMins}`"
                    @input="updateLatMins($event.target.value)"
                >
                <p class="error" v-if="latMinsError">Enter a number 0 - 60</p>
            </fieldset>
            <fieldset>
                <label for="lat-secs">How many seconds?</label>
                <input
                    type="text"
                    id="lat-secs"
                    name="lat-secs"
                    minlength="1"
                    maxlength="2"
                    :value="`${store.latSecs}`"
                    @input="updateLatSecs($event.target.value)"
                >
                <p class="error" v-if="latSecsError">Enter a number 0 - 60</p>
            </fieldset>

            <h3>And, then enter a hemisphere.</h3>
            <fieldset>

                <!--<legend>Which hemisphere - North or South?</legend>-->

                <input
                    type="radio"
                    id="lat-north"
                    name="lat-hems"
                    value="north"
                    @input="updateLatHems($event.target.value)"
                    :checked="store.latHems === 'north'"
                >
                <label for="lat-north">North</label>

                <input
                    type="radio"
                    id="lat-south"
                    name="lat-hems"
                    value="south"
                    @input="updateLatHems($event.target.value)"
                    :checked="store.latHems === 'south'"
                >

                <label for="lat-south">South</label>

                <p class="error" v-if="latHemsError">Choose a hemisphere</p>
            </fieldset>
        </form>

        <nav>
            <button @click="store.updateStep('step2')">Previous</button>
            <button @click="checkLatSuccess() ? store.updateStep('step4') : ''">Next</button>
        </nav>
    </main>

</template>

<style scoped>
</style>
