<template>
    <div class="transaction_row">
        <div class="column type">
            <span>{{ transaction.type }}</span>
        </div>
        <div class="column date">
            <span>{{ transaction.payment_date }}</span>
        </div>

        <div class="column value">
            <span>{{ transaction.value }}</span>
        </div>
        <div class="column method">
            <paymentIcons :is="paymentIcons[String(transaction.payment_method).replace(' ', '_')]" v-if="transaction.payment_method" class="method_icon" />
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
        const typeIcons = computed(() => ({
            credit_card: GetnetIcon
        }))

        const paymentIcons = computed(() => ({
            credit_card: GetnetIcon,
            money: MoneyIcon
        }))

        return {
            paymentIcons,
            typeIcons
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
    padding-right: 4%;
    padding-left: 4%;
}

.date{
    font-weight: 700;
}

.type {
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

.method_icon{
    height: 2.6vh;
    width: 2.6vh;
    margin-right: auto;
}
</style>
