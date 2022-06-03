<template>
  <div class="notification"
  :class="type"
  v-if="isVisible">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "NotificationItem",

  props: {
    type: {
      type: String,
      required: false,
      default: "error"
    },

    message: {
      type: String,
      required: false,
      default: "Some error has occurred"
    },

    isVisible: {
      type: Boolean,
      required: false,
      default: false
    }
  },

}
</script>

<style scoped>
  .notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 15px;
    border-radius: 6px;
    max-width: 280px;
    width: 100%;
    color: #fff;
    line-height: 1.2;
  }

  .notification.error {
    background-color: indianred;
  }

  .notification.success {
    background-color: mediumseagreen;
  }
</style>