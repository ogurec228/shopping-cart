<template>
  <section class="products">
    <div class="container">
      <h2>
        Продукты
      </h2>

      <product-list
      :products="products"></product-list>
    </div>
  </section>
</template>

<script>

import ProductList from "@/components/ProductList";
import {mapState} from "vuex";

export default {
  name: "ProductsView",

  components: {
    ProductList
  },

  computed: {
    ...mapState("products", {
      products: state => state.all
    }),
  },
}
</script>

<style scoped>
.products {
  padding: 80px 0;
}
</style>