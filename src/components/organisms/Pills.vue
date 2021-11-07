<template>
  <div>
    <span class="pills" v-for="(pill, index) in groupedWords" :key="index">
      <Pill :name="pill.name" :amount="pill.amount" />
    </span>
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

<style lang="scss" scoped>
.pills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
</style>
