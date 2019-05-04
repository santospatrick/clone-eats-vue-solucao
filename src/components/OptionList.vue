<template>
  <div class="container">
    <div class="options">
      <OptionItem
        v-for="item in list"
        v-bind="item"
        :id-place="idPlace"
        :key="`option-${item.id}`"
      />
    </div>
    <div class="payment">
      <router-link class="payment-button" to="/cart">Pagamento</router-link>
    </div>
  </div>
</template>

<script>
import OptionItem from "@/components/OptionItem";
export default {
  name: "OptionList",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    idPlace: {
      type: Number,
      default: null
    }
  },
  components: {
    OptionItem
  }
};
</script>
