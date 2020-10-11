<template>
    <div class="transaction_row">
        <div class="column type">
            <typeIcons :is="typeIcons[String(transaction.type)]" v-if="transaction.type" class="column_icon" />
            <span :style="`color: ${colorTransaction[String(transaction.type)]}`">
                {{ transaction.type }}
            </span>
        </div>
        <div class="column date">
            <span>{{ transaction.payment_date }}</span>
        </div>

        <div class="column value">
            <span>{{ transaction.value }}</span>
        </div>
        <div class="column method">
            <paymentIcons :is="paymentIcons[String(transaction.payment_method).replace(' ', '_')]" v-if="transaction.payment_method" class="column_icon" />
            <span>{{ transaction.payment_method }}</span>
        </div>
    </div>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'

import GetnetIcon from '@/static/icons/getnet.svg'
import MoneyIcon from '@/static/icons/money.svg'

export default defineComponent({
    name: 'TransactionRow',
    components: {
        GetnetIcon,
        MoneyIcon
    },
    props: {
        transaction: { Type: Object, default: '' }
    },

    setup() {
        const paymentIcons = computed(() => ({
            credit_card: GetnetIcon,
            money: MoneyIcon
        }))

        const typeIcons = computed(() => ({
            sell: MoneyIcon,
            bill: MoneyIcon,
            investiment: MoneyIcon
        }))

        const colorTransaction = computed(() => ({
            sell: '#33E04D',
            bill: '#E02F22',
            investiment: '#3253FA'
        }))

        return {
            paymentIcons,
            typeIcons,
            colorTransaction
        }
    }
})

</script>

<style lang="scss" scoped>
.transaction_row{
    display: flex;
    background-color: white;
    align-items: center;
    border-bottom: 1px solid #d4d5db;
    height: 35px;
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 0.9rem;
}

.column {
    display: flex;
    flex: 1;
    justify-content: center;
    padding-right: 5%;
    padding-left: 5%;
}

.date{
    font-weight: 700;
}

.type {
    font-weight: 700;
    font-size: 0.95rem
}

.method {
    text-transform: capitalize;
    color: #535366;
    align-self: center;
}

.value {
    font-weight: 700;
    color: #535366;
}

.column_icon{
    height: 2.6vh;
    width: 2.6vh;
    margin-right: auto;
}
</style>
