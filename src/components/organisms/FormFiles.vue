<template>
  <Form>
    <InputFile label="Selecione as Legendas" @click="proccessSubtitle" />
  </Form>
</template>

<script>
import { Form } from "../bosons";
import { InputFile } from "../atoms";
import { ipcRenderer } from "electron";

export default {
  name: "FormFiles",
  components: {
    Form,
    InputFile,
  },
  methods: {
    proccessSubtitle(files) {
      console.log("files", files);
      ipcRenderer.send("process-subtitles", "ping");
      ipcRenderer.on("process-subtitles", (event, arg) => {
        console.log("pong");
        this.$emit("processed", arg);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
