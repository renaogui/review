import Vue from "vue";
import App from "./App.vue";
// 引入插件
import vueResource from "vue-resource";
import Vuex from "vuex";

Vue.config.productionTip = false;

// 使用插件
Vue.use(vueResource); //一个发送请求的库,和axios差不多
// 使用Vuex
Vue.use(Vuex);
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //配置全局事件总线
  },
}).$mount("#app");
