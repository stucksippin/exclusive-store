<template>
    <div class="flex items-center mt-[100px] mb-5">
        <div class="w-[20px] h-[40px] bg-[#DB4444] rounded-lg"></div>
        <p class="text-[#DB4444] ml-2 font-bold">Today's</p>
    </div>

    <div class="flex mx-auto justify-between ">
        <div class="flex">
            <h2 class="text-3xl font-bold mr-10">Flash Sales</h2>
            <div>03 23 19 56 timer</div>
        </div>
        <div class="flex">
            <button type="button" class="swiper-button-prev" @click="swiperInstance.slidePrev()"> <img
                    class="w-[50px] h-[50px] mr-5 cursor-pointer" src="/img/arrow-left.png" alt=""></button>

            <button type="button" class="swiper-button-next" @click="swiperInstance.slideNext()"> <img
                    class="w-[50px] h-[50px] cursor-pointer" src="/img/arrow-right.png" alt=""></button>


        </div>
    </div>

    <div class="mb-10">
        <swiper :slides-per-view="4" :slides-per-group="2" :space-between="80" :modules="[Navigation]" :loop="true"
            @swiper="onSwiper">
            <swiper-slide class="cursor-pointer  flex flex-col" v-for="item in FlashSalesArray" :key="item.id">
                <RouterLink :to="`/product/${item.id}`">
                    <CardProduct :item="item" />
                </RouterLink>
            </swiper-slide>
        </swiper>
    </div>

    <button class="flex py-4 px-12 bg-[#DB4444] text-white rounded-xl mx-auto mb-[60px]">View All Products</button>
    <hr />
</template>

<script setup>
import CardProduct from './CardProduct.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue';
import { Navigation } from "swiper/modules"
import { RouterLink } from 'vue-router';


const swiperInstance = ref()

function onSwiper(swiper) {
    swiperInstance.value = swiper
}

defineProps({
    FlashSalesArray: Array
})


</script>

