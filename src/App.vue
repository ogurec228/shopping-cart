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

  <notification-item
      v-bind="notificationData"
  ></notification-item>
</template>

<script>
import {mapActions, mapState} from "vuex";
import notificationItem from "@/components/NotificationItem";

export default {
  components: {
    notificationItem
  },

  created() {
    this.initProducts()
  },

  methods: {
    ...mapActions("products", ["initProducts"]),
  },

  computed: {
    ...mapState("notification", {
      notificationData: "data"
    })
  },
}
</script>

<style>
/*
Общие стили
 */

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*tags*/
a {
  text-decoration: none;
  color: #000;
}

h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}

h3 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 25px;
  text-align: center;
}

.logo {
  font-size: 1.4rem;
  font-weight: 700;
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
}

.grid {
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  display: grid;
}

.card {
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

/*list*/
.list {
  list-style-type: none;
}

.list li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/*btn*/
.btn {
  background-color: steelblue;
  color: #fff;
  border: none;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s linear;
}

.btn:not(:disabled):hover {
  background-color: #345f81;
}

.btn:disabled {
  opacity: 0.5;
}

/*
header
 */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid steelblue;
}

header nav {
  display: flex;
  gap: 20px;
}

header nav a:hover {
  opacity: 0.8;
}

</style>
