import { ActionTree, MutationTree } from 'vuex'
// import { Service } from '../plugins/firebase-service'

export const namespaced = true

export const state = () => ({
    userList: []
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
    SET_USERS(state, users: []) {
        state.userList = users
    }
}

export const actions: ActionTree<State, State> = {
    async fetchUsers({ commit }) {
        const users = await this.$api.get('users/')
        commit('SET_USERS', users)
    }
}
