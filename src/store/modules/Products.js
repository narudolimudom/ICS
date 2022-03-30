import ProductData from '../../assets/example.json'
const state = {
    ProductsList:ProductData,
    non: ''
}

const mutations ={

}

const actions = {
 async GetProdByID({commit}, ID){
     let itemINDEX  = state.ProductsList.filter(item => item.id == ID)
     commit('non')
     return itemINDEX
 }
}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}