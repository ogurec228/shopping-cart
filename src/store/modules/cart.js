import {ORDER_STATUS} from "@/helpers/constants";
import shop from "@/api/shop";

//state
const state = () => ({
    products: [],
    orderStatus: ORDER_STATUS.NOT_COMPLETED
});

//mutations
const mutations = {
    addProduct(state, product) {
        state.products.push(product)
    },

    incrementProductAmount(state, productId) {
        state.products
            .find(item => item.id === productId).amount++;
    },

    changeOrderStatus(state, orderStatus) {
        state.orderStatus = orderStatus;
    },

    changeProducts(state, products) {
        state.products = products;
    },
};

//getters
const getters = {
    totalPrice(state) {
        return state.products
            .reduce((prev, cur) => prev + (cur.price * cur.amount), 0)
            .toFixed(2)
    }
};

//actions
const actions = {
    async checkout({commit, dispatch}) {
        try {
            await shop.buyProducts();
            dispatch("changeOrderStatus", ORDER_STATUS.COMPLETED)
            commit("changeProducts", [])
        } catch (error) {
            dispatch("changeOrderStatus", ORDER_STATUS.ERROR)
        }
    },

    changeOrderStatus({commit}, orderStatus) {
        commit("changeOrderStatus", orderStatus)
        setTimeout(() => {
            commit("changeOrderStatus", ORDER_STATUS.NOT_COMPLETED)
        })
    }
};

export default {
    state,
    mutations,
    getters,
    actions,
    namespaced: true
}

