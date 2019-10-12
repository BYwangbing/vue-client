// 包含n个由action触发用于直接更新状态的方法的对象模块
// 触发: action 中的 commit('mutation 名称')

import {RECEIVE_USER_INFO, RESET_USER_INFO, RECEIVE_OPERATE_LIST, EDIT_OPERATE_USER} from './mutation-types'

export default {
    [RECEIVE_USER_INFO](state, {userInfo}) {
        state.userInfo = userInfo;
        localStorage.user = JSON.stringify(state.userInfo); // 可以顺手存入 localStorage 中
    },
    [RESET_USER_INFO](state) {
        state.userInfo = {}
    },
    // 运营人员列表 &
    [RECEIVE_OPERATE_LIST](state, {operateList}) {
        state.operateList = operateList
    },
    // 获取修改运营人员信息
    [EDIT_OPERATE_USER](state, {modifyOperate}) {
        state.modifyOperate = modifyOperate;
    }
}

