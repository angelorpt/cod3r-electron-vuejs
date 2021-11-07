<template>
  <v-badge color="primary" :content="amount" offset-x="12" offset-y="25">
    <slot></slot>
  </v-badge>
</template>

<script>
export default {
  name: "Badge",
  props: {
    amount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
