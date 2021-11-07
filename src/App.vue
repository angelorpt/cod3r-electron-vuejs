<template>
  <v-app>
    <AppBar>
      <Title title="Most Used Words" />
    </AppBar>

    <v-main> main </v-main>
  </v-app>
</template>

<script>
import { Title, AppBar } from "./components/atoms";

export default {
  name: "App",

  components: { AppBar, Title },

  data: () => ({
    //
  }),
};
</script>
