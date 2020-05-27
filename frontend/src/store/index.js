import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const serverPath = process.env.VUE_APP_API_URL || 'http://localhost:3000'


export default new Vuex.Store({
    state: {
        restaurants: [],
        restaurant: {},
        comments: [],
        hotRestaurants: [],
        subscribers: []
    },
    mutations: {
        SET_RES(state, data) {
            state.restaurants = data
        },
        SET_ARES(state, data) {
            state.restaurant = data
        },
        SET_HOTRES(state, data) {
            state.hotRestaurants = data
        },
        ADD_RES(state, data) {
            state.restaurants.unshift(data)
        },
        ADD_COMMENT(state, data) {
            const index = state.restaurants.findIndex(e => e._id === data._id)
            state.restaurant = data
            Vue.set(state.restaurants, index, data)
                // 객체 자체를 바꾸는게 아니라 그 안에 있는 예를 들어 Array 안에 있는 특정한 거 바꿀 때는 Vue.set 써야함!
        },
        LIKE_RES(state, data) {
            const index = state.restaurants.findIndex(e => e._id === data._id)
            state.restaurant = data
            Vue.set(state.restaurants, index, data);
        },
        DEL_RES(state, data) {
            const index = state.restaurants.findIndex(e => e._id === data._id)
            state.restaurants.splice(index, 1)
        },
        EDIT_RES(state, data) {
            const index = state.restaurants.findIndex(e => e._id === data._id)
            if (index !== -1) {
                state.restaurants.splice(index, 1, data)
            }
            console.log(data)
        },
        SUBSCRIBE(state, data) {
            state.subscribers.unshift(data)
        }
    },
    actions: {

        async fetchRes({ commit }) {
            const restaurants = await axios.get(`${serverPath}/restaurants`)
            commit('SET_RES', restaurants.data)
        },
        async fetchARes({ commit }, id) {
            const restaurant = await axios.get(`${serverPath}/restaurants/${id}`)
            commit('SET_ARES', restaurant.data)
        },
        async fetchHotRes({ commit }) {
            const hotRes = await axios.get(`${serverPath}/restaurants/hot/show`)
            commit('SET_HOTRES', hotRes.data)
        },
        async addRes({ commit }, res) {
            const newRes = await axios.post(`${serverPath}/restaurants/new`, res)
            commit('ADD_RES', newRes.data)
        },
        async addComment({ commit }, [comment, id]) {
            const newComment = await axios.post(`${serverPath}/restaurants/${id}`, comment)
            commit('ADD_COMMENT', newComment.data)
        },
        async likeRes({ commit }, id) {
            const likedRes = await axios.put(`${serverPath}/restaurants/like/${id}`)
            commit('LIKE_RES', likedRes.data)
        },
        async delRes({ commit }, id) {
            const deletedRes = await axios.delete(`${serverPath}/restaurants/${id}`)
            commit('DEL_RES', deletedRes.data)
        },
        async editRes({ commit }, [id, editedInfo]) {
            const editedRes = await axios.put(`${serverPath}/restaurants/update/${id}`, editedInfo)
            commit('EDIT_RES', editedRes.data)
            console.log(editedRes)
        },
        async subscribe({ commit }, data) {
            const userdata = await axios.post(`${serverPath}/subscribe`, data)
            commit('SUBSCRIBE', userdata.data)
        }
    }

})