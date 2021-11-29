import Vue from 'vue'

import router from './router'
import store from './store'


import App from './App.vue'

//third party libs

import './libs/index';



new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
  