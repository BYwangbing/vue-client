/**
 * @Description:
 * @author BY
 * @date 2019/9/30-17:06
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import Home from '../pages/demo' // 测试
import Login from '../pages/Login/Login' // 登录
import Register from '../pages/Register/Register' // 注册
import BaseIndex from '../pages/Admin/AdminIndex' // 基本信息页
import UserList from '../pages/Admin/AdminUserList' // 运营人员列表页
import InformList from '../pages/Admin/AdminInformList' // 信息管理列表页
import TechnologyList from '../pages/Admin/AdminTechnologyListList'// 技术动态列表页

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
        // 基本信息页
        {path: '/admin', name: 'BaseIndex', component: BaseIndex},
        // 运营人员列表页
        {path: '/admin/userList', name: 'UserList', component: UserList},
        // 信息管理列表页
        {path: '/admin/informList', name: 'InformList', component: InformList},
        // 技术动态列表页
        {path: '/admin/technologyList', name: 'TechnologyList', component: TechnologyList}
    ]
})
