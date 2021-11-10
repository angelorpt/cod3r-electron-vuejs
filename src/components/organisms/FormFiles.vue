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
      const paths = files.map((file) => file.path);
      ipcRenderer.send("process-subtitles", paths);
      ipcRenderer.on("process-subtitles", (event, arg) => {
        this.$emit("processed", arg);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
