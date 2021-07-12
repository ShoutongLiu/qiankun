import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false;
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue-app',
    entry: '//localhost:8081',
    container: '#vueApp',
    activeRule: '/vue',
    props: {userName: 'tom'}
  },
  {
    name: 'react-app',
    entry: '//localhost:8082',
    container: '#reactApp',
    activeRule: '/react',
    props: {userName: 'tom'}
  }
]);

// setDefaultMountApp('/vue/home')
// 启动 qiankun
start();

// 严格模式
// start({
//   sandbox :{strictStyleIsolation: true}
// })

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

