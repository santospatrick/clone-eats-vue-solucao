<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Header from "@/components/Header";
import data from "@/data.json";

export default {
  name: "App",
  components: {
    Header
  },
  created() {
    this.setPlaces(data);
  },
  methods: {
    ...mapMutations(["setPlaces"])
  }
};
</script>
