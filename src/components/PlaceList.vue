<template>
  <div class="places">
    <PlaceItem v-for="item in list" :key="`place-${item.id}`" v-bind="item" />
  </div>
</template>

<script>
import PlaceItem from "@/components/PlaceItem";

export default {
  components: {
    PlaceItem
  },
  computed: {
    list() {
      return this.$store.getters.filteredList;
    }
  }
};
</script>
