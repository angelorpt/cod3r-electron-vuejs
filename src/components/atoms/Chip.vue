<template>
  <v-chip class="ma-2" color="primary" label outlined>{{ name }}</v-chip>
</template>

<script>
export default {
  name: "Chip",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
