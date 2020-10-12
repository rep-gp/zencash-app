import { ActionTree, MutationTree } from 'vuex'

export const namespaced = true

export const state = () => ({
    userList: []
})

export type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
}

export const actions: ActionTree<State, State> = {
    async postCheck() {
        const params = {
            name: 'Teste',
            email: 'email@a.com',
            company_id: '0',
            password: 'xpto'
        }

        await this.$api.post('users/', params)
    }
}
