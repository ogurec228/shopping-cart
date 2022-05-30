import {createStore} from 'vuex'
import shop from "@/api/shop";
import {ORDER_STATUS} from "@/helpers/constants/orderConstants";


export default createStore({
    state: {
        products: [],
        productsInCart: [],
        orderStatus: ORDER_STATUS.NOT_COMPLETED
    },
    getters: {
        totalProductsPriceInCart(state) {
            return state.productsInCart.reduce((prev, cur) => prev + (cur.price * cur.amount), 0)
        }
    },
    mutations: {
        addProductToCart(state, product) {
            state.productsInCart.push(product)
        },

        addAmountToProductInCart(state, productId) {
            state.productsInCart
                .find(item => item.id === productId).amount++;
        },

        decreaseProductInventory(state, productId) {
            state.products
                .find(item => item.id === productId).inventory--;
        },

        changeOrderStatus(state, orderStatus) {
            state.orderStatus = orderStatus;
        },

        clearCart(state) {
            state.productsInCart = [];
        }
    },

    actions: {
        addProductToCart({commit, state, dispatch}, product) {
            let productInCart = state.productsInCart
                .find(item => item.id === product.id);

            if (productInCart) {
                commit("addAmountToProductInCart", productInCart.id)
            } else {
                let initProductInCart = {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    amount: 1,
                }
                commit("addProductToCart", initProductInCart)
            }
            dispatch("decreaseProductInventory", product)
        },

        decreaseProductInventory({commit}, product) {
            if (product.inventory > 0) {
                commit("decreaseProductInventory", product.id)
            }
        },

        async initProducts({state}) {
            state.products = await shop.getProducts();
        },

        async checkout({commit, dispatch}) {
            try {
                await shop.buyProducts();
                commit("changeOrderStatus", ORDER_STATUS.COMPLETED)
                dispatch("resetCart")
            } catch (error) {
                commit("changeOrderStatus", ORDER_STATUS.ERROR)
            }
        },

        resetCart({commit}) {
            commit("clearCart")
            setTimeout(() => {
                commit("changeOrderStatus", ORDER_STATUS.NOT_COMPLETED)
            }, 2000)
        }
    },
})
