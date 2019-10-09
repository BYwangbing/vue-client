/*vuex最核心的管理对象store */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
