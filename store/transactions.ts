import moment from 'moment'
import { ActionTree, MutationTree } from 'vuex'
import { formatter } from './utils'
import { Service } from '~/service/Service'

export const namespaced = true

export const state = () => ({
    transactions: []
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
    SET_TRANSACTIONS (state, transactions) {
        state.transactions = transactions
    }
}

export const actions: ActionTree<State, State> = {
    setTransactions ({ commit }) {
        const data = Service.get('companies/0/transactions')
        if (!data) { return }

        const parsed = Object.values(data).map((element: any) => {
            element.map((transaction: any) => {
                transaction.payment_date = moment(transaction.payment_date).isSame(new Date(), 'day')
                    ? transaction.payment_date = 'Today'
                    : moment(transaction.payment_date).format('DD.MM')

                transaction.payment_method = String(transaction.payment_method).replace('_', ' ')
                transaction.value = formatter.format(transaction.value)
            })
        })

        commit('SET_TRANSACTIONS', parsed)
    }
}
