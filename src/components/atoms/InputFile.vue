<template>
  <v-file-input
    :label="label"
    prepend-icon="mdi-message-text"
    append-outer-icon="mdi-send"
    outlined
    multiple
    chips
    v-model="value"
    @click:append-outer="$emit('click', value)"
  />
</template>

<script>
export default {
  name: "InputFile",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
