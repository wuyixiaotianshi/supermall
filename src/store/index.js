import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

//共享同一个数据的状态，单一状态树
export default new Vuex.Store({
    //都是响应式的数据
    state: {
        // 状态
        counter: 1000,
        students: [
            { id: 110, name: 'why', age: 18 },
            { id: 111, name: 'kobe', age: 21 },
            { id: 112, name: 'lucy', age: 25 },
            { id: 113, name: 'lilei', age: 30 }
        ],
        info: { id: 113, name: 'lilei', age: 30 }
    },
    // 只能同步操作
    mutations,
    // 相当于计算属性
    getters,
    // 异步操作
    actions: {},
    modules: {
        a: moduleA
    }
})