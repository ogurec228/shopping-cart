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
          :products="highlightedProducts"></product-list>
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
      let search = this.searchStr.toLowerCase();
      return this.products
          .filter(product => {
            let title = product.title.toLowerCase();
            return title.includes(search)
          })
    },

    highlightedProducts() {
      return this.foundProducts.map(product => {
        product = {...product};

        if (this.searchStr) {
          let regexp = new RegExp(`${this.searchStr}`, "ig");
          product.title = product.title.replace(regexp, "<span class='mark'>$&</span>")
        }

        return product;
      });
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