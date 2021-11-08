<template>
  <Form>
    <InputFile label="Selecione as Legendas" @click="teste" />
  </Form>
</template>

<script>
import { Form } from "../bosons";
import { InputFile } from "../atoms";
import { ipcRenderer } from "electron";
// const { ipcRenderer } = require("electron");

export default {
  name: "FormFiles",
  components: {
    Form,
    InputFile,
  },
  methods: {
    teste(files) {
      console.log("files", files);
      ipcRenderer.send("blabla", "ping");
      ipcRenderer.on("pong", (event, arg) => {
        console.log("pong", arg);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
