<template>
  <div class="card product">
    <h3>{{ product.title }}</h3>
    <ul class="list">
      <li><i>Цена:</i> {{ product.price }}$</li>
      <li><i>В наличии:</i> {{ product.inventory }} шт.</li>
    </ul>

    <div class="btn-row">
      <button class="btn"
              @click="addToCart(product)"
              :disabled="!inStock">Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script>

import {mapActions} from "vuex"

export default {
  name: "ProductItem",

  props: {
    product: {
      required: true,
      type: Object,
    }
  },

  methods: {
    ...mapActions("products",["addToCart"])
  },

  computed: {
    inStock() {
      return this.product.inventory >= 1;
    }
  }
}
</script>

<style scoped>
.list {
  margin-bottom: 20px;
}

.btn-row {
  display: flex;
  justify-content: center;
}
</style>