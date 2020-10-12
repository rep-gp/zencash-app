import { ActionTree, MutationTree } from 'vuex'

export const namespaced = true

export const state = () => ({
    userId: '',
    user: null as unknown
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
    SET_USER_ID(state, id) {
        state.userId = id
    }
}

export const actions: ActionTree<State, State> = {
    setUserId({ commit }, id) {
        commit('SET_USER_ID', id)
    },
    async postCheck() {
        const params = {
            name: 'Teste',
            email: 'email@a.com',
            company_id: '0',
            password: 'xpto'
        }

        await this.$api.post('users/', params)
    },

    login(_, payload: {}) {
        this.$api.login(payload)
    },

    logout() {
        this.$api.logout()
    }
}
