import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
/*引入资源请求插件*/
import VueResource from 'vue-resource'
/*使用VueResource插件*/
Vue.use(VueResource);

// 导入所有的 MIntUI 组件
import MIntUI from 'mint-ui'
// 导入样式表
import 'mint-ui/lib/style.css'
//将 MintUI 安装到 Vue 上
Vue.use(MIntUI);  //把所有组件注册为全局组件

// 全局配置axios
import VueAxios from 'vue-axios'

Vue.use(VueAxios);
import axios from 'axios'

import './assets/css/bootstrap.min.css'
//开启debug模式
Vue.config.debug = true;
Vue.prototype.axios = axios;
axios.defaults.withCredentials = true;//每次请求，无论是否跨域，都带上cookie信息
// 原生ajax、axios请求时，如果不显示的设置Content-Type，那么默认是text/plain，
// 这时服务器就不知道怎么解析数据了，所以才只能通过获取原始数据流的方式来进行解析请求数据。
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false;


import VueSession from 'vue-session'
Vue.use(VueSession);

import Router from 'vue-router'

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};

Vue.http.interceptors.push((request, next) => {

    request.withCredentials=true;

    next((response) => {

        return response;

    });

});

new Vue({
    router, //使用上vue-router
    store, // 使用上vuex
    render: h => h(App)
}).$mount('#app');
