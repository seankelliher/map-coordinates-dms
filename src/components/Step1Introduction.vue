<script setup>
defineProps({
    step: {
        type: String,
        required: true
    }
});

defineEmits(["update:step"]);
</script>

<template>
    <section v-if="`${step}` === 'step1'">
        <div class="status">
            <h2>Intro - {{ step }}</h2>
            <p>We are going to convert longitude and latitude coordinates in the Degress, Minutes, Seconds format to the Digital Degrees format to use in computer-based mapping.</p>
        </div>

        <nav>
            <button @click="$emit('update:step', 'step2')">Start</button>
        </nav>
    </section>
</template>

<style scoped>
</style>
