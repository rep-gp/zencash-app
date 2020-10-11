import { ActionTree, MutationTree } from 'vuex'

export const namespaced = true

export const state = () => ({
    isExpanded: true
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
    SET_EXPAND(state, isExpanded: boolean) {
        state.isExpanded = isExpanded
    }
}

export const actions: ActionTree<State, State> = {
    setExpand({ commit }, isExpanded: boolean) {
        commit('SET_EXPAND', isExpanded)
    }
}
