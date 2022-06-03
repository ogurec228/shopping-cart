import {createStore} from 'vuex'

//modules
import products from "./modules/products"
import cart from "./modules/cart"
import notification from "./modules/notification"

export default createStore({

    modules: {
        products,
        cart,
        notification
    },
})
