<template>
  <div class="container">
    <h1 class="cart-title">Pagar</h1>
    <div class="cart-container">
      <ul class="cart-list">
        <li v-for="item in list" :key="`cart-${item.id}`" class="cart-item">
          <div class="cart-text">
            <div class="cart-place">{{ item.place.title }}</div>
            <div class="cart-order">{{ item.name }}</div>
          </div>
          <div class="cart-price">R$ {{ item.price }}</div>
        </li>
      </ul>
      <div class="payment">
        <button class="payment-button">Finalizar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    list() {
      return this.$store.state.cart;
    }
  }
};
</script>
