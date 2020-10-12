import { ActionTree, MutationTree } from 'vuex'

export const namespaced = true

export const state = () => ({
    isExpanded: true,
    isDarkMode: false
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
    SET_EXPAND (state, isExpanded: boolean) {
        state.isExpanded = isExpanded
    },
    SET_DARK_MODE (state, isDarkMode: boolean) {
        state.isDarkMode = isDarkMode
    }
}

export const actions: ActionTree<State, State> = {
    setExpand ({ commit }, isExpanded: boolean) {
        commit('SET_EXPAND', isExpanded)
    },
    setDarkMode ({ commit }, isDarkMode: boolean) {
        commit('SET_DARK_MODE', isDarkMode)
    }
}
