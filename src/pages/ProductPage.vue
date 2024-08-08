<template>
    <div class="flex justify-around mt-10">
        <div class="w-[70%] flex justify-center"> <img :src="productData.image" alt=""></div>
        <div class="">
            <div class=" text-2xl mb-3">{{ productData.name }}</div>
            <div class="mb-3">{{ getStars(productData.stars) }} (150 Reviews)</div>
            <div class="text-2xl mb-3">{{ productData.newCost }}</div>
            <div class="mb-5">{{ productData.description }}</div>
            <hr />

            <div class="mb-5 mt-10 ">
                <span class="mr-5">Colours:</span>
                <div class="form_radio_btn">
                    <input id="radio-1" type="radio" name="radio" value="1">
                    <label for="radio-1">Red</label>
                </div>

                <div class="form_radio_btn">
                    <input id="radio-2" type="radio" name="radio" value="2">
                    <label for="radio-2">Blue</label>
                </div>

                <div class="form_radio_btn">
                    <input id="radio-3" type="radio" name="radio" value="3">
                    <label for="radio-3">Green</label>
                </div>
            </div>
            <div class="mt-10 mb-10">
                <span class="mr-5">Size:</span>
                <div class="form_radio_btn">
                    <input id="radio-4" type="radio" value="4">
                    <label for="radio-4">One Size</label>
                </div>
            </div>
            <div>
                <div class="flex items-center">
                    <CounterComponent />

                    <button @click="useCartStore().addProductToCart(productData)"
                        class=" ml-10 border py-2 px-5  bg-[#DB4444] text-white rounded-lg  ">Buy Now</button>
                    <button class="text-2xl border border-black py-1 ml-4 px-3">♡</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import getProductById from '@/libs/getProductById';
import { useRoute } from 'vue-router';
import CounterComponent from '@/components/CounterComponent.vue';
import { useCartStore } from '@/store/CartStore';


const route = useRoute()
const productData = ref({})

function getStars(stars) {
    let starString = '';
    for (let i = 0; i < stars; i++) {
        starString += '★'; // полная звезда
    }
    for (let i = stars; i < 5; i++) {
        starString += '☆'; // пустая звезда
    }
    return starString;
}


onMounted(async () => {
    productData.value = await getProductById(route.params.id)
})

</script>