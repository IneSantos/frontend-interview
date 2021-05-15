import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/index'
import Cell from './components/tic-tac-toe/Cell.vue';

Vue.config.productionTip = false
Vue.use(Vuex)

const store2use = new Vuex.Store(store)

new Vue({
  render: h => h(App),
  store: store2use
}).$mount('#app')
