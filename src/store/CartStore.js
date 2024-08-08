
import { defineStore } from 'pinia';

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cartProducts: JSON.parse(localStorage.getItem('CartStore')) || []
    }),
    actions: {
        addProductToCart(product) {
            this.cartProducts.push(product);
            localStorage.setItem('CartStore', JSON.stringify(this.cartProducts))
        },
        removeProductFromCart(index) {
            this.cartProducts.splice(index, 1);
            localStorage.setItem('CartStore', JSON.stringify(this.cartProducts))
        }
    }
});