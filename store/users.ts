import { ActionTree, MutationTree } from 'vuex'
import { Service } from '../plugins/firebase-service'

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
    fetchUsers({ commit }) {
        Service.listenData('users/', (snap) => {
            const data = snap.val()

            commit('SET_USERS', data)
        })
    }
}
