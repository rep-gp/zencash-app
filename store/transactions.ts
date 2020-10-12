import { ActionTree, MutationTree } from 'vuex'
import { parseTransaction } from '../utils/transactions'

export const namespaced = true

export const state = () => ({
    transactions: []
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
    SET_TRANSACTIONS(state, transactions) {
        state.transactions = transactions
    }
}

export const actions: ActionTree<State, State> = {
    async setTransactions({ commit }) {
        const data = await this.$api.get('companies/0/transactions')
        commit('SET_TRANSACTIONS', parseTransaction(data))
    }
}
