<template>
    <ul class="list cart-products">
      <li v-for="product in cartProducts"
          :key="product.id">
        <i>{{ product.title }}</i>
        <span>{{ product.price }}$ x {{ product.amount }}</span>
      </li>
    </ul>
</template>

<script>
export default {
  name: "CartList",

  props: {
    cartProducts: {
      required: false,
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.cart-products {
  max-width: 400px;
}


</style>