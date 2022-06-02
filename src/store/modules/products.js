import shop from "@/api/shop";

//state
const state = () => (
    {
        products: [],
    }
);

//mutations
const mutations = {
    decreaseProductInventory(state, productId) {
        state.products
            .find(item => item.id === productId).inventory--;
    },

    changeProducts(state, products) {
        state.products = products;
    }
}

//getters
const getters = {

};

//actions
const actions = {
    addProductToCart({dispatch, commit, rootState}, product) {
        let productInCart = rootState.cart.CartProducts
            .find(item => item.id === product.id);

        if (productInCart) {
            commit("cart/addAmountToProductInCart", productInCart.id, {root: true})
        } else {
            let initProductInCart = {
                id: product.id,
                title: product.title,
                price: product.price,
                amount: 1,
            }
            commit("cart/addProductToCart", initProductInCart, {root: true})
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





