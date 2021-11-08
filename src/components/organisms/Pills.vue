<template>
  <div class="pills">
    <span v-for="(pill, index) in groupedWords" :key="index">
      <Pill class="pill" :name="pill.name" :amount="pill.amount" />
    </span>
  </div>
</template>

<script>
import { Pill } from "../molecules";
export default {
  name: "Pills",
  props: {
    edWords: {
      type: Array,
      required: true,
    },
  },
  components: {
    Pill,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.pills {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .pill {
    margin: 0.3rem 1rem;
  }
}
</style>
