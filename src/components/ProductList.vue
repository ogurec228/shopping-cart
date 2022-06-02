<template>
  <div class="grid">
    <product-item v-for="product in products"
    :product="product"
    :key="product.id"></product-item>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";

export default {
  name: "ProductList",

  props: {
    products: {
      type: Array,
      required: false,
      default: []
    }
  },

  components: {
    ProductItem
  },
}
</script>

<style scoped>
</style>