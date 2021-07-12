import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router';
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//以下都是重点

let router = null;
let instance = null;


  //下面的 /star  与主应用  registerMicroApps 中的  activeRule 字段对应
function render(props = {}) {
  console.log(props);
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
 //props 包含主应用传递的参数  也包括为子应用 创建的节点信息
  console.log(props)
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
