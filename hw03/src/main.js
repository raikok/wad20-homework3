import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex);

// const store = new Vuex.Store({
//   state: {
//     cart: new Post(),
//     items: [
//       new Item("Programming books bundle", 50.0, "./images/image1.jpg",),
//       new Item("Java Programming", 23.0, "./images/image5.jpg"),
//       new Item("Programming in C++", 15.0, "./images/image6.jpg"),
//       new Item("Programming and fundamentals of Python", 5.50, "./images/image7.jpg"),
//       new Item("My first coding book", 10.90, "./images/image8.jpg")
//     ]
//   },
//   mutations: {
//     toggleItem: (state, id) => {
//
//       let item = state.items[id];
//       let index = state.cart.selected.indexOf(id);
//
//       if (index > -1) {
//         state.cart.selected.splice(index, 1);
//         state.cart.total -= item.price;
//         return false;
//       }
//
//       state.cart.selected.push(id);
//       state.cart.total += item.price;
//       return true;
//     }
//   },
//   getters: {
//     itemIsSelected: (state) => (id) => {
//       return state.cart.selected.indexOf(id) > -1
//     },
//     getItem: (state) => (id) => {
//       return state.items[id]
//     },
//   }
// });

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
