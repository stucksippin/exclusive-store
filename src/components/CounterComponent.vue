<template>
    <div class="">
        <button class="px-5 border py-2 mr-2" @click="() => { if (number > 0) number-- }">-</button>
        <span class=" border p-3">{{ number }}</span>
        <button class="px-5 border py-2 ml-2" @click="number++">+</button>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const number = ref(0)
</script>