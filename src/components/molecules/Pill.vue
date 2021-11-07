<template>
  <div>
    <Badge :amount="amount">
      <Chip :name="name" />
    </Badge>
  </div>
</template>

<script>
import { Chip, Badge } from "../atoms";
export default {
  name: "Pill",
  components: {
    Chip,
    Badge,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
