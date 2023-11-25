<script setup>
import { store } from "../composables/store.js";

</script>

<template>
    <section v-if="store.step === 'step2'">
        <form>
            <h2>Longitude - {{ store.step }}</h2>
            <h3>First we'll gather longitude coordinates.</h3>
            <fieldset>
                <!--<legend>First we'll gather longitude coordinates.</legend>-->

                <label for="lon-degs">How many degrees?</label>
                <input
                    type="text"
                    id="lon-degs"
                    name="lon-degs"
                    minlength="1"
                    maxlength="3"
                    :value="`${store.lonDegs}`"
                    @input="store.updateLonDegs($event.target.value)"
                >
                <p class="error" v-if="store.lonDegsError">Enter a number 0 - 180</p>
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
                    @input="store.updateLonMins($event.target.value)"
                >
                <p class="error" v-if="store.lonMinsError">Enter a number 0 - 60</p>
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
                    @input="store.updateLonSecs($event.target.value)"
                >
                <p class="error" v-if="store.lonSecsError">Enter a number 0 - 60</p>
            </fieldset>

            <h3>And, then enter a hemisphere.</h3>
            <fieldset>

                <!--<legend>Which hemisphere - East or West?</legend>-->

                <input
                    type="radio"
                    id="lon-east"
                    name="lon-hems"
                    value="east"
                    @input="store.updateLonHems($event.target.value)"
                    :checked="store.lonHems === 'east'"
                >
                <label for="lon-east">East</label>

                <input
                    type="radio"
                    id="lon-west"
                    name="lon-hems"
                    value="west"
                    @input="store.updateLonHems($event.target.value)"
                    :checked="store.lonHems === 'west'"
                >

                <label for="lon-west">West</label>

                <p class="error" v-if="store.lonHemsError">Choose a hemisphere</p>
            </fieldset>
        </form>

        <nav>
            <button @click="store.checkLonSuccess() ? store.updateStep('step3') : ''">Next</button>
        </nav>
    </section>

</template>

<style scoped>
</style>
