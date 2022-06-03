<template>
  <section class="cart">
    <div class="container">
      <h2>
        Корзина
      </h2>

      <template
          v-if="isCartFull">
        <cart-list
            :products="products">
        </cart-list>

        <div class="checkout">

          <div class="row">
            <div class="total-price">
              <b>Total:</b>
              {{ totalPrice }}$
            </div>

            <button class="btn" @click="checkout">Оформить заказ</button>
          </div>
        </div>
      </template>

      <h3 v-else>...Корзина пуста</h3>
    </div>
  </section>
</template>

<script>
import CartList from "@/components/CartList";
import NotificationItem from "@/components/NotificationItem";

import {mapState, mapGetters, mapActions} from "vuex"
import {ORDER_STATUS} from "@/helpers/constants";


export default {
  name: "CartView",

  components: {
    CartList,
    NotificationItem
  },

  computed: {
    ...mapState("cart", ["products", "orderStatus"]),
    ...mapGetters("cart", ["totalPrice"]),

    isCartFull() {
      return this.products.length > 0
    }
  },

  methods: {
    ...mapActions("cart", ["checkout"]),
    ...mapActions("notification", {
      showNotification: "show"
    }),
  },

  watch: {
    "orderStatus": {
      handler() {
        if (this.orderStatus === ORDER_STATUS.ERROR) {
          this.showNotification({
            type: "error",
            message: "Произошла ошибка при оформлении заказа! Попробуйте еще раз."
          })
        } else if (this.orderStatus === ORDER_STATUS.COMPLETED) {
          this.showNotification({
            type: "success",
            message: "Заказ успешно оформлен!"
          })
        }
      }
    }
  }
}
</script>

<style scoped>
.cart {
  padding: 80px 0;
}

h3 {
  opacity: 0.7;
  text-align: left;
  font-size: 1.3rem;
}

.checkout {
  margin-top: 30px;
  max-width: 400px;
}

.checkout .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.total-price {
  display: flex;
  gap: 15px;
  font-size: 1.1rem;
}
</style>