<template>
  <section class="products">
    <div class="container">
      <h2>
        Продукты
      </h2>

      <div class="grid">
        <div class="card product"
             v-for="product in products"
             :key="product.id">
          <h3>{{ product.title }}</h3>
          <ul class="list">
            <li><i>Цена:</i> {{product.price}}$</li>
            <li><i>В наличии:</i> {{ product.inventory }} шт.</li>
          </ul>

          <div class="btn-row">
            <button class="btn">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import shop from "@/api/shop.js"

export default {
  name: "ProductsView",

  data() {
    return {
      products: []
    }
  },

  async created() {
    this.products = await shop.getProducts()
  }
}
</script>

<style scoped>
</style>