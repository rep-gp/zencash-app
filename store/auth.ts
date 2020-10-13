import { ActionTree, MutationTree } from 'vuex'
import { AuthService } from '@/service/AuthService'

export const namespaced = true

export const state = () => ({
    // user: null as unknown
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
    // SET_USER(state, data) {
    //     state.user = data
    // }
}

export const actions: ActionTree<State, State> = {
    // setUser({ commit }, data) {
    //     commit('SET_USER', data)
    // },
    async login (_, { email, password }) {
        await this.$api.auth.signInWithEmailAndPassword(email, password).catch((error: any) => {
            const errorCode = error.code
            const errorMessage = error.message
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.')
            } else {
                console.error(errorMessage)
            }
        })
        this.$api.auth.onAuthStateChanged((_user: any) => {
            if (_user) {
                AuthService.setUser(_user)
            } else {
                AuthService.setUser(null)
                this.$router.push('/')
            }
        })

        // dispatch('setUser', AuthService.user)
    },

    async logout () {
        let error = false
        await this.$api.auth.signOut()
            .catch(() => {
                error = true
            })
        return { error }
    }
}
