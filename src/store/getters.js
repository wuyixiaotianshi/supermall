export default {
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

}