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
    <section v-if="`${step}` === 'step6'">
        <div class="status">
            <h2>Result - {{ step }}</h2>
            <p>Here are your coordinates in Digital Degrees format with ADD .</p>

            <ul>
                <li>Longtude result - clipboard functionality</li>
                <li>Latitude result - clipboard functionality</li>
                <li>Accurate to this distance</li>
            </ul>
        </div>

        <nav>
            <button @click="$emit('update:step', 'step1')">Start over</button>
        </nav>
    </section>
</template>

<style scoped>
</style>
