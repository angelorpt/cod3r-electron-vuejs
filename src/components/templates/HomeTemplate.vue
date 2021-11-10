<template>
  <v-app>
    <AppBar>
      <Title title="Most Used Words" />
    </AppBar>

    <v-main class="home-template">
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

<style lang="scss" scoped>
.home-template {
  height: 100vh;
  margin: 0 1rem;
}
// ::-webkit-scrollbar {
//   display: none;
// }
</style>
