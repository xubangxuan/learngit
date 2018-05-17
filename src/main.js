// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局引入vant库
// import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
//Vue.use(Vant)

//bable引入  需要在babellrc下面设置引入
import { Button, Row, Col, Search, Swipe, SwipeItem, lazyload, List } from "vant"
Vue.use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use(lazyload).use(List)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})