// 包含n个由action触发用于直接更新状态的方法的对象模块
// 触发: action 中的 commit('mutation 名称')

import {RECEIVE_USER_INFO, RESET_USER_INFO, RECEIVE_OPERATE_LIST, FIND_OPERATE_USER} from './mutation-types'

export default {
    [RECEIVE_USER_INFO](state, {userInfo}) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state) {
        state.userInfo = {}
    },
    // 运营人员列表
    [RECEIVE_OPERATE_LIST](state, {operateList}) {
        state.operateList = operateList
    },
    // 查找运营人员
    [FIND_OPERATE_USER](state, {operateList}) {
        state.operateList = operateList
    }
}

