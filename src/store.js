import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    places: [],
    cart: [],
    search: ""
  },
  mutations: {
    setPlaces(state, places) {
      state.places = places;
    },
    addToCart(state, newItem) {
      state.cart = [...state.cart, newItem];
    },
    setSearch(state, search) {
      state.search = search;
    }
  },
  actions: {
    addToCart({ commit, state }, { item, place }) {
      if (state.cart.some(order => order.id === item.id)) return;

      const newItem = { ...item, place };
      commit("addToCart", newItem);
    }
  },
  getters: {
    filteredList({ places, search }) {
      return search
        ? places.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase().trim())
          )
        : places;
    }
  }
});
