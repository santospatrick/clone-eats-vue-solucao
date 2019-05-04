<template>
  <div class="header">
    <div class="container">
      <router-link to="/"
        ><img src="/assets/logo.svg" alt="Clone Eats logo"
      /></router-link>
      <div class="header-right">
        <div class="header-user">
          <img src="/assets/user.svg" alt="Not logged user icon" />
        </div>
        <router-link class="header-cart" to="/cart"
          ><img src="/assets/cart.svg" alt="Cart icon"
        /></router-link>
        <span>{{ orders }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    orders() {
      return this.$store.state.cart.length;
    }
  }
};
</script>
