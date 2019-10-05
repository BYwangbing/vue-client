/**
 * @Description:
 * @author BY
 * @date 2019/9/30-17:06
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/demo'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import UserList from '../pages/Admin/AdminUserList'

export default new VueRouter({
    // meta: {requireAuth: true},  // 判断是否需要登录
    mode: 'history',
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/Home', component: Home, meta: {requireAuth: true}},
        // 登录
        {path: '/login', name: 'Login', component: Login},
        // 注册
        {path: '/register', name: 'Register', component: Register},
        // 用户列表页
        {path: '/admin', name: 'UserList', component: UserList}
    ]
})
