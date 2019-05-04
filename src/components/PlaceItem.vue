<template>
  <router-link class="place" :to="`/${id}`">
    <div :style="{ 'background-image': `url(/assets/${img})` }"></div>
    <h3>{{ title }}</h3>
    <h4>{{ category }}</h4>
  </router-link>
</template>

<script>
export default {
  name: "PlaceItem",
  props: {
    id: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    }
  }
};
</script>
