<template>
  <div class="container">
    <header>
      <router-link class="logo" :to="{name : 'home'}">
        ShoppingCart
      </router-link>

      <nav>
        <router-link :to="{name:'products'}">Продукты</router-link>
        <router-link :to="'/'">Корзина</router-link>
      </nav>
    </header>
  </div>
  <router-view/>

</template>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
