<template>
  <section class="products">
    <div class="container">
      <h2>
        Продукты
      </h2>

      <div class="options">
        <div class="row">
          <span>Поиск по продуктам:</span>
          <input type="text" class="input" placeholder="iPad 4 Mini"
                 v-model="searchStr">
        </div>


      </div>

      <product-list
          :products="foundProducts"></product-list>
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

  data() {
    return {
      searchStr: "",
    }
  },

  computed: {
    ...mapState("products", {
      products: state => state.all
    }),

    foundProducts() {
      return this.products.filter(product => {
        let title = product.title.toLowerCase();
        let search = this.searchStr.toLowerCase();

        return title.includes(search)
      })
    }
  },
}
</script>

<style scoped>
.products {
  padding: 80px 0;
}

.options {
  margin-bottom: 25px;
}

.options .row {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>