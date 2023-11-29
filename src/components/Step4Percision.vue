<script setup>
import { store } from "../composables/store.js";
import { ref } from "vue";

const percisionError = ref(false);

function updatePercision(etv) {
    if (etv === ""){
        percisionError.value = true;
    } else {
        percisionError.value = false;
        store.percision = etv;
    }
}

function checkPercisionSuccess() {
    if (store.percision === "") {
        percisionError.value = true; 
    } else {
        return true;
    }
}
</script>

<template>
    <main v-if="store.step === 'step4'">
        <section>
            <h2>Percision</h2>
            <h3>Now, we'll decide percision.</h3>
        </section>
        <form>
            <p>More numbers after the decimal point bring greater percison, but also require more computing power to run mapping software. How much percison do you need?</p>
            <fieldset>
                <!-- <legend>More numbers after the decimal point bring greater percison, but also require more computing power to run mapping software. How much percison do you need?</legend> -->

                <label for="decimal0">within 111km (not recommended)</label>
                <input
                    type="radio"
                    id="decimal0"
                    name="percision"
                    value="0"
                    @input="updatePercision($event.target.value)"
                    :checked="store.percision === '0'"
                >

                <label for="decimal1">within 11.1km</label>
                <input
                    type="radio"
                    id="decimal1"
                    name="percision"
                    value="1"
                    @input="updatePercision($event.target.value)"
                    :checked="store.percision === '1'"
                >

                <label for="decimal2">within 1.11km</label>
                <input
                    type="radio"
                    id="decimal2"
                    name="percision"
                    value="2"
                    @input="updatePercision($event.target.value)"
                    :checked="store.percision === '2'"
                >

                <label for="decimal3">within 111 meters</label>
                <input
                    type="radio"
                    id="decimal3"
                    name="percision"
                    value="3"
                    @input="updatePercision($event.target.value)"
                    :checked="store.percision === '3'"
                >

                <label for="decimal4">within 11.1 meters</label>
                <input
                    type="radio"
                    id="decimal4"
                    name="percision"
                    value="4"
                    @input="updatePercision($event.target.value)"
                    :checked="store.percision === '4'"
                >

                <label for="decimal5">within 1.11 meters</label>
                <input
                    type="radio"
                    id="decimal5"
                    name="percision"
                    value="5"
                    @input="updatePercision($event.target.value)"
                    :checked="store.percision === '5'"
                >
                <p class="error" v-if="percisionError">Choose a level of percision.</p>
            </fieldset>
        </form>
        <nav>
            <button @click="store.updateStep('step3')">Previous</button>
            <button @click="checkPercisionSuccess() ? store.updateStep('step5') : ''">Next</button>
        </nav>
    </main>
</template>

<style scoped>
</style>
