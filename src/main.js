import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// var MyPlugin = {};
// MyPlugin.install = function(Vue) {
//   // 3. 注入组件选项
//   Vue.mixin({

//   });
// };
// Vue.use(MyPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
