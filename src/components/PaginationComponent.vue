<template>
  <nav class="pagination"
  v-if="numberOfPages > 1">
    <a href="#"
       v-for="page in numberOfPages"
       :key="page"
       @click="setPage(page)"
       :class="{
         active: activePage === page
        }">
      {{ page }}
    </a>
  </nav>
</template>

<script>
export default {
  name: "PaginationComponent",

  props: {
    numberOfPages: {
      required: false,
      type: Number,
      default: 0
    },

    activePage: {
      required: false,
      type: Number,
      default: 0
    }
  },

  methods: {
    setPage(page) {
      this.$emit("setPage", page)
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
}

.pagination > a {
  padding: 7px 12px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.pagination > a.active {
  background-color: steelblue;
  color: #fff;
}
</style>