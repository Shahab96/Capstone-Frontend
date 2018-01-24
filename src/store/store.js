import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loginIn:3,
        loggedIn: false
    },
    getters,
    actions,
    mutations
});