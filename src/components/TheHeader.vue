<script setup>
import SearchInput from './SearchInput.vue';
</script>


<template>
    <div class="flex justify-between mt-10 items-center p-3 top-3">
        <div>
            <h1 class="font-bold text-xl">Exclusive</h1>
        </div>
        <div>
            <nav>
                <ul class="flex text-red-900 text-lg">

                    <RouterLink class="mr-10 cursor-pointer hover:underline" to="/">Home</RouterLink>
                    <RouterLink class="mr-10 cursor-pointer hover:underline" to="/contact">Contact</RouterLink>
                    <li class="mr-10 cursor-pointer hover:underline">About</li>
                    <li class="mr-10 cursor-pointer hover:underline">Sign up</li>
                </ul>
            </nav>
        </div>
        <div class="flex">
            <SearchInput />
            <button class="mr-5 ml-5"><img class="w-[25px]" src="/img/heart.png" alt=""></button>
            <button @click="$emit('CartToggle')"><img class="w-[30px]" src="/img/cart.png" alt=""></button>
        </div>

    </div>
</template>

