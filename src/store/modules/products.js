import shop from "@/api/shop";

//state
const state = () => (
    {
        all: [],
    }
);

//mutations
const mutations = {
    decreaseProductInventory(state, productId) {
        state.all
            .find(item => item.id === productId).inventory--;
    },

    changeProducts(state, products) {
        state.all = products;
    }
}

//getters
const getters = {
};

//actions
const actions = {
    addToCart({dispatch, commit, rootState, state}, {id: productId}) {
        let product = state.all.find(product => product.id === productId);

        let productInCart = rootState.cart.products
            .find(item => item.id === product.id);

        if (productInCart) {
            commit("cart/incrementProductAmount", productInCart.id, {root: true})
        } else {
            let initProductInCart = {
                id: product.id,
                title: product.title,
                price: product.price,
                amount: 1,
            }
            commit("cart/addProduct", initProductInCart, {root: true})
        }
        dispatch("decreaseProductInventory", product)
    },

    decreaseProductInventory({commit}, product) {
        if (product.inventory > 0) {
            commit("decreaseProductInventory", product.id)
        }
    },

    async initProducts({commit}) {
        const products = await shop.getProducts();
        commit("changeProducts", products)
    },
}


export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}





