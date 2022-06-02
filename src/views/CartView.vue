<template>
  <section class="cart">
    <div class="container">
      <h2>
        Корзина
      </h2>

      <template
          v-if="isCartFull">
        <cart-list
            :cart-products="CartProducts">
        </cart-list>

        <div class="checkout">

          <div class="row">
            <div class="total-price">
              <b>Total:</b>
              {{ totalProductsPriceInCart }}$
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
import {mapState, mapGetters, mapActions} from "vuex"

export default {
  name: "CartView",

  components: {
    CartList
  },

  computed: {
    ...mapState("cart", ["CartProducts", "orderStatus"]),
    ...mapGetters("cart", ["totalProductsPriceInCart"]),

    isCartFull() {
      return this.CartProducts.length > 0
    }
  },

  methods: {
    ...mapActions("cart", ["checkout"])
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