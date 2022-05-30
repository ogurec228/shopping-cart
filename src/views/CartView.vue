<template>
  <section class="cart">
    <div class="container">
      <h2>
        Корзина
      </h2>

      <div class="cart-products" v-if="productsInCart.length">
        <ul class="list">
          <li v-for="product in productsInCart"
              :key="product.id">
            <i>{{ product.title }}</i>
            <span>{{ product.price }}$ x {{ product.amount }}</span>
          </li>
        </ul>

        <div class="checkout">
          <div class="total-price">
            <b>Total:</b>
            {{ totalProductsPriceInCart }}$
          </div>
          <button class="btn" @click="checkout">Оформить заказ</button>
        </div>
      </div>

      <h3 v-else>...Корзина пуста</h3>

      <div class="order-status" v-if="isOrderInProgress">
        <p v-if="isOrderSuccessful" class="order-successful">
          Заказ успешно оформлен!
        </p>

        <p v-else class="order-error">
          Произошли ошибки при оформлении заказа. Попробуйте еще раз!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex"
import {ORDER_STATUS} from "@/helpers/constants/orderConstants";

export default {
  name: "CartView",

  computed: {
    ...mapState(["productsInCart", "orderStatus"]),
    ...mapGetters(["totalProductsPriceInCart"]),

    isOrderInProgress() {
      return this.orderStatus !== ORDER_STATUS.NOT_COMPLETED
    },

    isOrderSuccessful() {
      return this.orderStatus === ORDER_STATUS.COMPLETED
    }
  },

  methods: {
    ...mapActions(["checkout"])
  }
}
</script>

<style scoped>

</style>