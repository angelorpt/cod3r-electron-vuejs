<template>
  <v-app>
    <AppBar>
      <Title title="Most Used Words" />
    </AppBar>

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
import { Title, AppBar } from "../atoms";

export default {
  name: "HomeTemplate",
  components: {
    Title,
    AppBar,
  },
};
</script>

<style lang="scss" scoped></style>
