import { ActionTree, MutationTree } from 'vuex'

export const namespaced = true

export const state = () => ({
    companies: []
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
    SET_COMPANIES(state, companies) {
        state.companies = companies
    }
}

export const actions: ActionTree<State, State> = {
    async fetchCompanies({ commit }) {
        // Start loading
        const companies = await this.$api.get('/companies')
        commit('SET_COMPANIES', companies)
        // End loading
    }
}
