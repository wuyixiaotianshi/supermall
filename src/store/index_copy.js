import Vue from 'vue'
import Vuex from 'vuex'

const moduleA = {
    state: () => ({
        name: 'papan'
    }),
    mutations: {
        add(state) {
            state.name = state.name + '111'
        }
    }
}


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
    mutations: {
        //方法,更新为一方式
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        addCounter(state, payload) {
            // state.counter += count
            // console.log(payload);

            state.counter += payload.count
        },
        addStu(state, stu) {
            state.students.push(stu)
        },
        modifyStu(state) {
            // state.info['address'] = '11q'
            // 响应式的设置
            Vue.set(state.info, 'address', '洛杉矶')
        }
    },
    // 相当于计算属性
    getters: {
        getPowerCount(state) {
            return state.counter * state.counter
        },
        more20stu(state) {
            return state.students.filter(s => {
                return s.age > 20
            })
        },
        more20stucount(state, getters) {
            //返回年龄大于20的人数
            return getters.more20stu.length
        },
        moreAgestu(state) {
            return age => {
                return state.students.filter(s => s.age > age)
            }
        },
        moreAgestuLen(state, getters) {
            return getters.moreAgestu.length
        }

    },
    // 异步操作
    actions: {},
    modules: {
        a: moduleA
    }
})