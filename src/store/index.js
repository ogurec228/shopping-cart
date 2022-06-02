import {createStore} from 'vuex'

//modules
import products from "./modules/products"
import cart from "./modules/cart"

export default createStore({

    modules: {
        products,
        cart
    },
})
