// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
    posts: []
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    getPosts({ commit }) {
        axios.get('https://private-anon-682fe31944-wad20postit.apiary-mock.com/posts')
            .then(response => {
                commit('SET_POSTS', response.data)
            })
    }
}

//to handle mutations
const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    }
}

//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})