/*
    通过mutation间接更新state的多个方法的对象
    通过执行: commit()来触发 mutation 的调用, 间接更新 state
    触发: 组件中: $store.dispatch('action 名称', data1)
    可以包含异步代码(定时器, ajax)
 */
import {logout, operateListReq, findOperateUser, reqEditOperateUser} from '../api'
import {
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_OPERATE_LIST,
    FIND_OPERATE_USER,
    EDIT_OPERATE_USER
} from './mutation-types'

export default {
    // 同步记录用户信息
    recordUser({commit}, userInfo) {
        commit(RECEIVE_USER_INFO, {userInfo})
    },
    // 异步登出
    async login_Out({commit}) {
        const result = await logout();
        if (result.code === 0) {
            commit(RESET_USER_INFO)
        }
    },

    // 异步获取运营人员列表
    async reqOperateList({commit}) {
        // 发送异步ajax请求
        const result = await operateListReq();
        if (result.code === 0) {
            var operateList = result.data;
            commit(RECEIVE_OPERATE_LIST, {operateList})
        }
    },
    // 查找运营人员
    async searchOperate({commit}, keywords) {
        // 发送异步ajax请求
        const result = await findOperateUser(keywords);
        if (result.code === 0) {
            var operateList = result.data;
            commit(RECEIVE_OPERATE_LIST, {operateList});
        }
    },
    // 获取修改运营人员信息
    async editOperate({commit}, id) {
        // 发送异步ajax请求
        const result = await reqEditOperateUser(id);
        if (result.code === 0) {
            var modifyOperate = result.data;
            commit(EDIT_OPERATE_USER, {modifyOperate})
        }
    }
};
