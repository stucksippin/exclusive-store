<template>
    <div class="flex flex-col mt-12">
        <div class="flex justify-end mr-5">
            <input class="py-2 px-5 border mr-5" type="text" placeholder="Coupon code">
            <button class="py-2 px-5 bg-[#DB4444] text-white">Apply common</button>
        </div>
        <div class="flex flex-col gap-y-4 border mt-16 w-1/2 p-5 ml-10">
            <span class="font-bold">Cart Total</span>
            <span>Subtotal: </span>
            <hr />
            <span>Shipping: </span>
            <hr />
            <span>Total: </span>
            <button class="bg-[#DB4444] py-2 px-5 w-fit mx-auto text-white">Process to checkout</button>
        </div>
    </div>
</template>