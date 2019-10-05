import Vue from 'vue'
import App from './App.vue'
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

Vue.prototype.axios = axios;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
