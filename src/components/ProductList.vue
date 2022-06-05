<template>
  <div class="grid">
    <product-item v-for="product in paginatedProducts"
                  :product="product"
                  :key="product.id"></product-item>
  </div>

  <pagination-component
      :number-of-pages="numberOfPages"
      :active-page="pagination.page"
      @set-page="setPage"
  ></pagination-component>
</template>

<script>
import ProductItem from "@/components/ProductItem";
import PaginationComponent from "@/components/PaginationComponent";

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
    ProductItem,
    PaginationComponent
  },

  data() {
    return {
      pagination: {
        page: 1,
        perPage: 6
      }
    }
  },

  methods: {
    setPage(page) {
      this.pagination.page = page;
    }
  },

  computed: {
    paginatedProducts() {
      let from = (this.pagination.page - 1) * this.pagination.perPage;
      let to = from + this.pagination.perPage;

      return this.products.slice(from, to)
    },

    numberOfPages() {
      return Math.ceil(this.products.length / this.pagination.perPage)
    }
  },

  watch: {
    "products": {
      handler() {
        this.pagination.page = 1;
      },
    }
  }
}
</script>

<style scoped>
</style>