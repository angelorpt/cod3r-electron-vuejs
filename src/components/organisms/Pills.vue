<template>
  <div>
    <Pill
      :name="pill.name"
      :amount="pill.amount"
      v-for="(pill, index) in groupedWords"
      :key="index"
    />
  </div>
</template>

<script>
import { Pill } from "../molecules";
export default {
  name: "Pills",
  components: {
    Pill,
  },
  data() {
    return {
      groupedWords: [
        {
          name: "Hi",
          amount: "246",
        },
        {
          name: "You",
          amount: "321",
        },
        {
          name: "He",
          amount: "245",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
