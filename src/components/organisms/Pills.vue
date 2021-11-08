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
  components: {
    Pill,
  },
  data() {
    return {
      groupedWords: [
        { name: "Hi", amount: 246 },
        { name: "You", amount: 321 },
        { name: "He", amount: 245 },
        { name: "She", amount: 123 },
        { name: "It", amount: 567 },
        { name: "It", amount: 567 },
        { name: "Içlkjfklçsdt", amount: 567 },
        { name: "It", amount: 567 },
        { name: "It", amount: 567 },
        { name: "It", amount: 567 },
        { name: "rewrew", amount: 567 },
        { name: "It", amount: 567 },
        { name: "It", amount: 567 },
        { name: "Içlkjfklçsdt", amount: 567 },
        { name: "It", amount: 567 },
        { name: "It", amount: 567 },
        { name: "It", amount: 567 },
        { name: "rewrew", amount: 567 },
        { name: "It", amount: 567 },
        { name: "It", amount: 567 },
        { name: "It", amount: 567 },
      ],
    };
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
