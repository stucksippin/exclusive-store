<template>
  <!-- cart -->
  <div v-if="cartShow" class="w-[50%] h-[100%] fixed right-0 top-[80px] z-20 bg-white  border slide-in-right">
    <button class="border p-2 bg-[#DB4444] text-white" @click="cartShow = false">Close</button>


    <ProductList />
    <FooterCart />
  </div>
  <!--  -->

  <div>
    <div class="bg-black h-[55px] flex justify-center">

      <div class="text-white flex mx-auto">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <a class="ml-5" href="#">SHOP NOW!</a>
      </div>

      <div class="flex items-center ml-auto">
        <button class="text-white relative hover:text-red-600 mr-2" @click="show = !show">English</button>
        <img class="w-[10px] h-[10px]" src="/img/arrow-down.png" alt="">
      </div>
      <p class="hover:text-red-600 text-white cursor-pointer" v-show="show">Russia</p>
    </div>

    <div class="w-[1360px] justify-center mx-auto">

      <div class="sticky top-[1px] z-10 bg-white">
        <TheHeader @CartToggle="cartShow = !cartShow" />
        <hr class="m-auto w-[100%] mt-5 !important" />
      </div>

      <RouterView />

    </div>
    <FooterSection />
  </div>
</template>


<script setup>
import { ref } from 'vue';
const show = ref(false)
import TheHeader from './components/TheHeader.vue';

import FooterSection from './components/FooterSection.vue';

import FooterCart from './components/Cart/FooterCart.vue';
import ProductList from './components/Cart/ProductList.vue';

const cartShow = ref(false)


</script>

