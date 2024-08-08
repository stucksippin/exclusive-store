<template>
    <div class="flex items-center mt-[100px] mb-5">
        <div class="w-[20px] h-[40px] bg-[#DB4444] rounded-lg"></div>
        <p class="text-[#DB4444] ml-2 font-bold">This Month</p>
    </div>

    <div class="flex justify-between">
        <div>
            <p class="text-3xl font-bold">Best Selling Products</p>
        </div>
        <button class="py-4 px-8 bg-[#DB4444] text-white rounded-lg ">View All</button>
    </div>
    <!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  --><!--  -->

    <div>
        <ul class="flex justify-between mt-10 mb-[70px]">
            <li class="cursor-pointer  flex flex-col" v-for="item in BestSellingArray" :key="item.id">
                <RouterLink :to="`/product/${item.id}`">
                    <CardProduct :item="item" />
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import CardProduct from './CardProduct.vue';

defineProps({
    BestSellingArray: Array
})
</script>

