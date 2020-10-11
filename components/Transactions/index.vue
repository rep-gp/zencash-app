<template>
    <div class="transactions_container">
        <div class="title">
            Latest Gains
        </div>

        <div class="transactions_content">
            <div v-if="!transactions.gains">
                Nenhuma transação para mostrar
            </div>
            <div v-if="transactions.gains">
                <TransactionRow v-for="(transaction, idx) in transactions.gains.jan" :key="idx" :transaction="transaction" />
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
        border-radius: 15px;
        max-width: 40%;
        height: 60vh;
    }

    .title {
        font-size: 1.2rem;
        font-weight: 700;
        margin: 2% 0% 1% 0%
    }

    .transactions_content {
        flex: 1;
        width: 100%
    }
</style>
