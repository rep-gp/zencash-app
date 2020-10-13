<template>
    <div class="container">
        <div class="transactions_container">
            <TableHeader class="transaction_header" :list="headers" />
            <div class="transactions_content">
                <div v-if="!transactions">
                    Nenhuma transação para mostrar
                </div>
                <div v-if="transactions">
                    <TableRow v-for="(transaction, idx) in transactions.jan" :key="idx" :transaction="transaction" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
    name: 'Transactions',

    setup (_, { root: { $accessor } }) {
        const headers = ['Transação', 'Tipo', 'Data', 'Quantia', 'Método']

        $accessor.transactions.setTransactions()
        return { transactions: computed(() => $accessor.transactions.transactions), headers }
    }
})
</script>

<style lang='scss' scoped>
    .transactions_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        height: 50vh;
        background-color: var(--primary-background);
        overflow-x: hidden;

    }

    .transactions_content {
        justify-content: center;
        align-items: center;
        flex: 1;
        width: 100%;
        overflow-y: auto;
    }

    .transaction_header {
        margin: 0% 7% 0% 7%;
    }
</style>
