<script setup>
import { store } from "../composables/store.js";

</script>

<template>
    <section v-if="store.step === 'step3'">
        <form>
            <h2>Latitude - {{ store.step }}</h2>
            <h3>Next, we'll gather latitude coordinates.</h3>
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
                    @input="store.updateLatDegs($event.target.value)"
                >
                <p class="error" v-if="store.latDegsError">Enter a number 0 - 90</p>
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
                    @input="store.updateLatMins($event.target.value)"
                >
                <p class="error" v-if="store.latMinsError">Enter a number 0 - 60</p>
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
                    @input="store.updateLatSecs($event.target.value)"
                >
                <p class="error" v-if="store.latSecsError">Enter a number 0 - 60</p>
            </fieldset>

            <h3>And, then enter a hemisphere.</h3>
            <fieldset>

                <!--<legend>Which hemisphere - North or South?</legend>-->

                <input
                    type="radio"
                    id="lat-north"
                    name="lat-hems"
                    value="north"
                    @input="store.updateLatHems($event.target.value)"
                    :checked="store.latHems === 'north'"
                >
                <label for="lat-north">North</label>

                <input
                    type="radio"
                    id="lat-south"
                    name="lat-hems"
                    value="south"
                    @change="$emit('update:latHems', $event.target.value)"
                    @input="store.updateLatHems($event.target.value)"
                    :checked="store.latHems === 'south'"
                >

                <label for="lat-south">South</label>

                <p class="error" v-if="store.latHemsError">Choose a hemisphere</p>
            </fieldset>
        </form>

        <nav>
            <button @click="store.updateStep('step2')">Previous</button>
            <button @click="store.checkLatSuccess() ? store.updateStep('step4') : ''">Next</button>
        </nav>
    </section>

</template>

<style scoped>
</style>
