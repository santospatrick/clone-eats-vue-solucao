<template>
  <div>
    <div
      class="place-header"
      :style="{ 'background-image': `url(/assets/${place.img})` }"
    >
      <div class="container">
        <div class="place-title">{{ place.title }}</div>
      </div>
    </div>
    <OptionList :list="place.options" :id-place="place.id" />
  </div>
</template>

<script>
import OptionList from "@/components/OptionList";
export default {
  name: "Place",
  components: {
    OptionList
  },
  computed: {
    place() {
      const { id } = this.$route.params;
      return this.$store.state.places.find(
        item => item.id === parseInt(id, 10)
      );
    }
  }
};
</script>
