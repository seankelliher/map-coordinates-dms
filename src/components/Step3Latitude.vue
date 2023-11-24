<script setup>
import { ref } from "vue";

defineProps({
    step: {
        type: String,
        required: true
    },
    latDegs: {
        type: String,
        required: true
    },
    latMins: {
        type: String,
        required: true
    },
    latSecs: {
        type: String,
        required: true
    },
    latHems: {
        type: String,
        required: true
    }
});

defineEmits([
    "update:step",
    "update:latDegs",
    "update:latMins",
    "update:latSecs",
    "update:latHems"
]);

const errorDegs = ref(false);
const errorMins = ref(false);
const errorSecs = ref(false);
const errorHems = ref(false);

function checkLatDegs(etv) {
    if (etv >= 0 && etv <=90) {
        errorDegs.value = false;
    } else {
        errorDegs.value = true;
    }
}

function checkLatMins(etv) {
    if (etv >= 0 && etv <=60) {
        errorMins.value = false;
    } else {
        errorMins.value = true;
    }
}

function checkLatSecs(etv) {
    if (etv >= 0 && etv <=60) {
        errorSecs.value = false;
    } else {
        errorSecs.value = true;
    }
}

function checkLatHems(etv) {
    if (etv === "north" || etv === "south") {
        errorHems.value = false;
    } else {
        errorHems.value = true;
    }
}

function checkLatSuccess(latDegs, latMins, latSecs, latHems) {
    if (latDegs === "" || latDegs < 0 || latDegs > 90) {
        errorDegs.value = true;
    } else if (latMins === "" || latMins < 0 || latMins > 60) {
        errorMins.value = true;
    } else if (latSecs === "" || latSecs < 0 || latSecs > 60) {
        errorSecs.value = true;
    } else if (latHems === "") {
        errorHems.value = true;
    } else {
        return "all good";
    }
}

</script>

<template>
    <section v-if="`${step}` === 'step3'">
        <form>
            <h2>Latitude - {{ step }}</h2>
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
                    @change="$emit('update:latDegs', $event.target.value)"
                    @input="checkLatDegs($event.target.value)"
                >
                <p class="error" v-if="errorDegs">Enter a number 0 - 90</p>
            </fieldset>

            <fieldset>
                <label for="lat-mins">How many minutes?</label>
                <input
                    type="text"
                    id="lat-mins"
                    name="lat-mins"
                    minlength="1"
                    maxlength="2"
                    @change="$emit('update:latMins', $event.target.value)"
                    @input="checkLatMins($event.target.value)"
                >
                <p class="error" v-if="errorMins">Enter a number 0 - 60</p>
            </fieldset>
            <fieldset>
                <label for="lat-secs">How many seconds?</label>
                <input
                    type="text"
                    id="lat-secs"
                    name="lat-secs"
                    minlength="1"
                    maxlength="2"
                    @change="$emit('update:latSecs', $event.target.value)"
                    @input="checkLatSecs($event.target.value)"
                >
                <p class="error" v-if="errorSecs">Enter a number 0 - 60</p>
            </fieldset>

            <h3>And, then enter a hemisphere.</h3>
            <fieldset>

                <!--<legend>Which hemisphere - North or South?</legend>-->

                <input
                    type="radio"
                    id="lat-north"
                    name="lat-hems"
                    value="north"
                    @change="$emit('update:latHems', $event.target.value)"
                    @input="checkLatHems($event.target.value)"
                >
                <label for="lat-north">North</label>

                <input
                    type="radio"
                    id="lat-south"
                    name="lat-hems"
                    value="south"
                    @change="$emit('update:latHems', $event.target.value)"
                    @input="checkLatHems($event.target.value)"
                >

                <label for="lat-south">South</label>

                <p class="error" v-if="errorHems">Choose a hemisphere</p>
            </fieldset>
        </form>

        <nav>
            <button @click="$emit('update:step', 'step2')">Previous</button>
            <button @click="checkLatSuccess(latDegs, latMins, latSecs, latHems) ? $emit('update:step', 'step4') : ''">Next</button>
        </nav>
    </section>

</template>

<style scoped>
</style>
