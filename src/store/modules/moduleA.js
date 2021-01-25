export default {
    state: () => ({
        name: 'papan'
    }),
    mutations: {
        add(state) {
            state.name = state.name + '111'
        }
    }
}