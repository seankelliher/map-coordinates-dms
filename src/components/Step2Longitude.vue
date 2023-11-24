<script setup>
import { ref } from "vue";

defineProps({
    step: {
        type: String,
        required: true
    },
    lonDegs: {
        type: String,
        required: true
    },
    lonMins: {
        type: String,
        required: true
    },
    lonSecs: {
        type: String,
        required: true
    },
    lonHems: {
        type: String,
        required: true
    }
});

defineEmits([
    "update:step",
    "update:lonDegs",
    "update:lonMins",
    "update:lonSecs",
    "update:lonHems"
]);

const errorDegs = ref(false);
const errorMins = ref(false);
const errorSecs = ref(false);
const errorHems = ref(false);

function checkLonDegs(etv) {
    if (etv >= 0 && etv <=180) {
        errorDegs.value = false;
    } else {
        errorDegs.value = true;
    }
}

function checkLonMins(etv) {
    if (etv >= 0 && etv <=60) {
        errorMins.value = false;
    } else {
        errorMins.value = true;
    }
}

function checkLonSecs(etv) {
    if (etv >= 0 && etv <=60) {
        errorSecs.value = false;
    } else {
        errorSecs.value = true;
    }
}

function checkLonHems(etv) {
    if (etv === "east" || etv === "west") {
        errorHems.value = false;
    } else {
        errorHems.value = true;
    }
}

function checkLonSuccess(lonDegs, lonMins, lonSecs, lonHems) {
    if (lonDegs === "" || lonDegs < 0 || lonDegs > 180) {
        errorDegs.value = true;
    } else if (lonMins === "" || lonMins < 0 || lonMins > 60) {
        errorMins.value = true;
    } else if (lonSecs === "" || lonSecs < 0 || lonSecs > 60) {
        errorSecs.value = true;
    } else if (lonHems === "") {
        errorHems.value = true;
    } else {
        return "all good";
    }
}

</script>

<template>
    <section v-if="`${step}` === 'step2'">
        <form>
            <h2>Longitude - {{ step }}</h2>
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
                    @change="$emit('update:lonDegs', $event.target.value)"
                    @input="checkLonDegs($event.target.value)"
                >
                <p class="error" v-if="errorDegs">Enter a number 0 - 180</p>
            </fieldset>

            <fieldset>
                <label for="lon-mins">How many minutes?</label>
                <input
                    type="text"
                    id="lon-mins"
                    name="lon-mins"
                    minlength="1"
                    maxlength="2"
                    @change="$emit('update:lonMins', $event.target.value)"
                    @input="checkLonMins($event.target.value)"
                >
                <p class="error" v-if="errorMins">Enter a number 0 - 60</p>
            </fieldset>
            <fieldset>
                <label for="lon-secs">How many seconds?</label>
                <input
                    type="text"
                    id="lon-secs"
                    name="lon-secs"
                    minlength="1"
                    maxlength="2"
                    @change="$emit('update:lonSecs', $event.target.value)"
                    @input="checkLonSecs($event.target.value)"
                >
                <p class="error" v-if="errorSecs">Enter a number 0 - 60</p>
            </fieldset>

            <h3>And, then enter a hemisphere.</h3>
            <fieldset>

                <!--<legend>Which hemisphere - East or West?</legend>-->

                <input
                    type="radio"
                    id="lon-east"
                    name="lon-hems"
                    value="east"
                    @change="$emit('update:lonHems', $event.target.value)"
                    @input="checkLonHems($event.target.value)"
                >
                <label for="lon-east">East</label>

                <input
                    type="radio"
                    id="lon-west"
                    name="lon-hems"
                    value="west"
                    @change="$emit('update:lonHems', $event.target.value)"
                    @input="checkLonHems($event.target.value)"
                >

                <label for="lon-west">West</label>

                <p class="error" v-if="errorHems">Choose a hemisphere</p>
            </fieldset>
        </form>

        <nav>
            <button @click="checkLonSuccess(lonDegs, lonMins, lonSecs, lonHems) ? $emit('update:step', 'step3') : ''">Next</button>
        </nav>
    </section>

</template>

<style scoped>
</style>
