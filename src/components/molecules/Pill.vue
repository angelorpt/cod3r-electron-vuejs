<template>
  <div>
    <span>{{ name }}</span>
    <span>{{ amount }}</span>
  </div>
</template>

<script>
export default {
  name: "Pill",
  props: {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
