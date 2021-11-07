<template>
  <HomeTemplate class="home-template">
    <Pills />
  </HomeTemplate>
</template>

<script>
import { HomeTemplate } from "../templates";
import { Pills } from "../organisms";

export default {
  name: "HomePage",
  components: {
    HomeTemplate,
    Pills,
  },
};
</script>

<style lang="scss" scoped>
.home-template {
  display: flex;
  flex-direction: row;
}
</style>
