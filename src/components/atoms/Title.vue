<template>
  <v-toolbar-title>{{ title }}</v-toolbar-title>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      required: true,
      default: "Most Used Words",
    },
  },
};
</script>

<style lang="scss" scoped></style>
