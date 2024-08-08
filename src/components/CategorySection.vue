<template>
    <div class="flex items-center mt-[100px] mb-5">
        <div class="w-[20px] h-[40px] bg-[#DB4444] rounded-lg"></div>
        <p class="text-[#DB4444] ml-2 font-bold">Categories</p>
    </div>

    <div class="flex justify-between ">
        <div>
            <p class="text-3xl font-bold">Browse By Category</p>
        </div>
        <div class="flex">
            <img class="w-[50px] h-[50px] mr-5 cursor-pointer" src="/img/arrow-left.png" alt="">
            <img class="w-[50px] h-[50px] cursor-pointer" src="/img/arrow-right.png" alt="">
        </div>
    </div>

    <!-- СДЕЛАТЬ СВГ ДЛ ХАВЕРА -->
    <div>

        <ul class="flex justify-center mt-10 mb-[100px]">
            <li class="cursor-pointer border w-[170px] h-[145px] flex flex-col justify-center items-center mr-10 hover:bg-[#DB4444]"
                v-for="item in items" :key="item.id">
                <img class="w-[56px] h-[56px] mb-3 hover:fill-white" :src="item.image" alt="item.name">
                <span>{{ item.name }}</span>
            </li>
        </ul>
    </div>
    <hr />
</template>
svg
<script>
export default {
    data() {
        return {
            items: [
                { id: 1, name: 'Phones', image: '/img/category/Category-CellPhone.svg' },
                { id: 2, name: 'Computers', image: '/img/category/Category-Computer.svg' },
                { id: 3, name: 'SmartWatch', image: '/img/category/Category-SmartWatch.svg' },
                { id: 4, name: 'Camera', image: '/img/category/Category-Camera.svg' },
                { id: 5, name: 'HeadPhones', image: '/img/category/Category-Headphone.svg' },
                { id: 6, name: 'Gaming', image: '/img/category/Category-Gamepad.svg' },

            ]
        };
    }
};
</script>

