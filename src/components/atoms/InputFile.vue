<template>
  <v-file-input
    :label="label"
    prepend-icon="mdi-message-text"
    append-outer-icon="mdi-send"
    outlined
    multiple
    chips
    v-model="files"
    @click:append-outer="$emit('click', files)"
  />
</template>

<script>
export default {
  name: "InputFile",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      files: [],
    };
  },
};
</script>

<style lang="scss" scoped></style>
