<template>
  <main class="container">
    <div class="search">
      <img src="/assets/search.svg" alt="Search Icon" /><input
        type="text"
        placeholder="Pesquisar restaurante"
        v-model="search"
      />
    </div>
    <PlaceList />
  </main>
</template>

<script>
import PlaceList from "@/components/PlaceList";

export default {
  name: "home",
  components: {
    PlaceList
  },
  computed: {
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("setSearch", value);
      }
    }
  }
};
</script>
