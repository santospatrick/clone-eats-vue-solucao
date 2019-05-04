<template>
  <div @click="handleAddToCart" class="option">
    <div class="option-text">
      <div class="option-title">{{ name }}</div>
      <div class="option-price">R$ {{ price }}</div>
    </div>
    <div
      class="option-image"
      :style="{ 'background-image': `url(/assets/${img})` }"
    ></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "OptionItem",
  props: {
    id: {
      type: Number,
      default: null
    },
    img: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: null
    },
    idPlace: {
      type: Number,
      default: null
    }
  },
  methods: {
    ...mapActions(["addToCart"]),
    handleAddToCart() {
      const place = this.$store.state.places.find(
        item => item.id === this.idPlace
      );
      const item = place.options.find(item => item.id === this.id);
      this.addToCart({ item, place });
    }
  }
};
</script>
