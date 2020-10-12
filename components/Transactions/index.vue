<template>
    <div class="container">
        <div class="transactions_container">
            <TransactionHeader class="transaction_header" />
            <div class="transactions_content">
                <div v-if="!transactions">
                    Nenhuma transação para mostrar
                </div>
                <div v-if="transactions">
                    <TransactionRow v-for="(transaction, idx) in transactions.jan" :key="idx" :transaction="transaction" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
    name: 'Transactions',

    setup(_, { root: { $accessor } }) {
        $accessor.transactions.setTransactions()
        return { transactions: computed(() => $accessor.transactions.transactions) }
    }
})
</script>

<style lang='scss' scoped>
    .transactions_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #e6e6e6;
        border-radius: 5px;
        height: 50vh;
        background-color: white;
        overflow-x: hidden;

    }

    .transactions_content {
        justify-content: center;
        align-items: center;
        flex: 1;
        width: 100%;
        overflow-y: auto;
        margin-top: 10px;
    }
</style>
