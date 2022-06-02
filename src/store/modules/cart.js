import {ORDER_STATUS} from "@/helpers/constants/orderConstants";
import shop from "@/api/shop";

//state
const state = () => ({
    CartProducts: [],
    orderStatus: ORDER_STATUS.NOT_COMPLETED
});

//mutations
const mutations = {
    addProductToCart(state, product) {
        state.CartProducts.push(product)
    },

    addAmountToProductInCart(state, productId) {
        state.CartProducts
            .find(item => item.id === productId).amount++;
    },

    changeOrderStatus(state, orderStatus) {
        state.orderStatus = orderStatus;
    },

    clearCart(state) {
        state.CartProducts = [];
    },
};

//getters
const getters = {
    totalProductsPriceInCart(state) {
        return state.CartProducts.reduce((prev, cur) => prev + (cur.price * cur.amount), 0)
    }
};

//actions
const actions = {
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
};

export default {
    state,
    mutations,
    getters,
    actions,
    namespaced: true
}

