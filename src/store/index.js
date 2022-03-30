import Vuex from 'vuex'
import Vue from 'vue'
import Products from './modules/Products'
//load vuex
Vue.use(Vuex)



//Create Store
export default new Vuex.Store({
    modules:{
        Products,
    }
})