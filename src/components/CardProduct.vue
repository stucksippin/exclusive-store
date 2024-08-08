<template>
  <div class="bg-[#F5F5F5] w-[270px] h-[250px] relative">
    <img class="w-[190px] h-[180px] mx-auto mt-5" :src="item.image" alt="item.name">
    <img class="absolute top-[12px] right-[12px]" src="/img/FillHeart.png" alt="">
    <img class="absolute top-[54px] right-[12px]" src="/img/FillEye.png" alt="">
  </div>
  <span class="mt-2 text-lg">{{ item.name }}</span>
  <div>
    <span class="text-red-500 mr-5">{{ item.newCost }}</span>
    <span class="text-slate-400 line-through">{{ item.lastCost }}</span>

  </div>
  <span>{{ getStars(item.stars) }}</span>
  <div class="flex">
    <button @click="addToCart(item)" class="border py-2 w-full bg-[#DB4444] mt-5 text-white rounded-lg  ">Buy</button>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store/CartStore';

function addToCart(item) {
  useCartStore().addProductToCart(item);
}

defineProps({
  item: {
    type: Object,
    required: true
  }
})

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


</script>




