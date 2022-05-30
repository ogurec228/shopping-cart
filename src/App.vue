<template>
  <div class="container">
    <header>
      <router-link class="logo" :to="{name : 'home'}">
        ShoppingCart
      </router-link>

      <nav>
        <router-link :to="{name:'products'}">Продукты</router-link>
        <router-link :to="{name: 'cart'}">Корзина</router-link>
      </nav>
    </header>
  </div>
  <router-view/>

</template>

<script>
import {mapActions} from "vuex";

export default {
  created() {
    this.initProducts()
  },

  methods: {
    ...mapActions(["initProducts"]),
  },
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
