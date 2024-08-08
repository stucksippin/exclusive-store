<template>
    <FirstSection />
    <FlashSales :FlashSalesArray="FlashSalesArray" />
    <CategorySection />
    <BestSellingSection :BestSellingArray="BestSellingArray" />

    <div class="relative">
        <img class="mt-10 " src="/img/fadeImg.png" alt="">
        <button class=" py-4 px-10 bg-[#00FF66] rounded-lg text-white absolute bottom-[70px] left-[56px] z-2">Buy
            Now</button>
    </div>


    <ArrivalSection />
</template>


<script setup>
import FirstSection from '../components/FirstSection.vue';
import FlashSales from '../components/FlashSales.vue';
import CategorySection from '../components/CategorySection.vue';
import BestSellingSection from '../components/BestSellingSection.vue';
import ArrivalSection from '../components/ArrivalSection.vue';
import { onMounted, ref } from 'vue';
import getFlashSales from '@/libs/getFlashSales';
import getBestSelling from '@/libs/getBestSelling';
const FlashSalesArray = ref()
const BestSellingArray = ref()



onMounted(() => {
    getFlashSales(FlashSalesArray)
    getBestSelling(BestSellingArray)
})



</script>