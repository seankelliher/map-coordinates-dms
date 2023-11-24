<script setup>
// import { ref } from "vue";
defineProps({
    step: {
        type: String,
        required: true
    }
});

defineEmits(["update:step"]);
</script>

<template>
    <section v-if="`${step}` === 'step5'">
        <div class="status">
            <h2>Review - {{ step }}</h2>
            <h3>Let's review what you entered.</h3>
            <p>You entered these coordinates. Does everything look okay?</p>

            <ul>
                <li>Longitude in DMS format</li>
                <li>Latitude in DMS format</li>
                <li>Selected percision</li>
            </ul>
        </div>

        <nav>
            <button @click="$emit('update:step', 'step4')">No, previous</button>
            <button @click="$emit('update:step', 'step6')">Yes, convert</button>
        </nav>
    </section>
</template>

<style scoped>
</style>
