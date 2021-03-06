import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import helpers from './helpers';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: helpers.getDefaultState,
    mutations,
    actions,
    getters
})

export default store;

