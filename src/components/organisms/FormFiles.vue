<template>
  <Form>
    <InputFile label="Selecione as Legendas" @click="teste" />
  </Form>
</template>

<script>
import { Form } from "../bosons";
import { InputFile } from "../atoms";

export default {
  name: "FormFiles",
  components: {
    Form,
    InputFile,
  },
  methods: {
    teste(files) {
      console.log("files", files);
    },
  },
};
</script>

<style lang="scss" scoped></style>
