import Vue from 'vue'

export default {
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
}