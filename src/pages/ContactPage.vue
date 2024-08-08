<template>
    <form @submit.prevent="send">
        <input v-model="text" type="text" class="border p-4">
        <button>send</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';


const text = ref('')

async function send() {
    const resp = await fetch('https://payment-service-jpfdn1qye-tests-projects-f18bf683.vercel.app/api/test', {
        method: 'POST',
        body: JSON.stringify({
            data: text.value
        })
    })

    console.log(await resp.json());
}
</script>