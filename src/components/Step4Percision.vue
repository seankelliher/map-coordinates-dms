<script setup>
// import { ref } from "vue";
defineProps({
    step: {
        type: String,
        required: true
    },
    percision: {
        type: String,
        required: true
    }
});

defineEmits(["update:step"]);
</script>

<template>
    <section v-if="`${step}` === 'step4'">
        <form>
            <h2>Percision - {{ step }}</h2>
            <h3>Now, we'll decide percision.</h3>
            <p>More numbers after the decimal point bring greater percison, but also require more computing power to run mapping software. How much percison do you need?</p>
            <fieldset>
                <!-- <legend>More numbers after the decimal point bring greater percison, but also require more computing power to run mapping software. How much percison do you need?</legend> -->

                <label for="level6">within 111km (not recommended)</label>
                <input
                    type="radio"
                    id="level6"
                    name="percision"
                    value="level6"
                    @input="$emit('update:percision', $event.target.value)"
                >

                <label for="level5">within 11.1km</label>
                <input
                    type="radio"
                    id="level5"
                    name="percision"
                    value="level5"
                    @input="$emit('update:percision', $event.target.value)"
                >

                <label for="level4">within 1.1km</label>
                <input
                    type="radio"
                    id="level4"
                    name="percision"
                    value="level4"
                    @input="$emit('update:percision', $event.target.value)"
                >

                <label for="level3">within 111 meters</label>
                <input
                    type="radio"
                    id="level3"
                    name="percision"
                    value="level3"
                    @input="$emit('update:percision', $event.target.value)"
                >

                <label for="level2">within 11.1 meters</label>
                <input
                    type="radio"
                    id="level2"
                    name="percision"
                    value="level2"
                    @input="$emit('update:percision', $event.target.value)"
                >

                <label for="level1">within 1.11 meters</label>
                <input
                    type="radio"
                    id="level1"
                    name="percision"
                    value="level1"
                    @input="$emit('update:percision', $event.target.value)"
                >
            </fieldset>
        </form>
        <nav>
            <button @click="$emit('update:step', 'step3')">Previous</button>
            <button @click="$emit('update:step', 'step5')">Next</button>
        </nav>
    </section>
</template>

<style scoped>
</style>
