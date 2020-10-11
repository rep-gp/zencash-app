import { ActionTree, MutationTree } from 'vuex'
import { Service } from '../plugins/firebase-service'

export const namespaced = true

export const state = () => ({
    userList: []
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
    ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
        if (!authUser) {
            claims = null
            console.log(state, authUser, claims)
            // perform logout operations
        } else {
            // Do something with the authUser and the claims object...
        }
    }
}

export const actions: ActionTree<State, State> = {
    authCheck() {
        Service.teste()
    }
}
