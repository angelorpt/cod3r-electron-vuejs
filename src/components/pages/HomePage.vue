<template>
  <HomeTemplate class="home-template">
    <FormFiles class="form-files" />
    <Pills />
  </HomeTemplate>
</template>

<script>
import { HomeTemplate } from "../templates";
import { Pills, FormFiles } from "../organisms";

export default {
  name: "HomePage",
  components: {
    HomeTemplate,
    Pills,
    FormFiles,
  },
};
</script>

<style lang="scss" scoped>
.form-files {
  margin-top: 2rem;
  border-bottom: 1px dotted #ccc;
}
.home-template {
  display: flex;
  flex-direction: column;
}
</style>
