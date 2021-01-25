// import { createApp } from 'vue'
// import App from './App.vue'


// createApp(App).use(store).use(router).mount('#app')
import Vue from "vue";
import App from './App.vue';
import router from "./router/index.js";
import store from './store'
// import axios from 'axios'
import { request } from "network/request";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")

// axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//     let data = res.data.data.banner.list;
//     console.log(data[0].acm)
//     for (let i = 0; i < data.length; i++) {
//         console.log(data[i].title)
//     }
// })

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 50000
//     // 并发请求
// axios.all([axios({
//     url: '/home/multidata'
// }), axios({
//     url: '/home/data',
//     params: {
//         type: 'sell',
//         page: 4
//     }
// })]).then(res => {
//     console.log(res)
// })

// request({
//     url: '/home/multidata'
// }, res => {
//     console.log(res), err => {
//         console.log(err)
//     }
// })

request({
    url: '/home/multidata'
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})