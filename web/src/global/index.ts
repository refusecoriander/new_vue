import AllMenu from '../components/AllMenu.vue'    //PageTools/index.vue它是头部那个组件,放在components里面
export default {
  install(Vue) {
    Vue.component('allmenu', AllMenu)
  }
}