<template>
    <div class="transaction_row">
        <div class="column with">
            <BillIcon v-if="transaction.bill_data" class="column_icon" />
            <AvatarIcon v-if="transaction.costumer_data" class="column_icon" />
            {{ getWith(transaction) }}
        </div>

        <div class="column type">
            <span :class="transaction.type">
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
            <paymentIcons :is="paymentIcons[String(transaction.payment_method).replaceAll(' ', '_')]" v-if="transaction.payment_method" class="column_icon" />
            <span>{{ transaction.payment_method }}</span>
        </div>
    </div>
    </div>
</template>

<script lan="ts">
import { defineComponent, computed } from '@vue/composition-api'

import GetnetIcon from '@/static/icons/getnet.svg'
import MoneyIcon from '@/static/icons/money.svg'
import BillIcon from '@/static/icons/bill.svg'
import AvatarIcon from '@/static/icons/avatar.svg'

export default defineComponent({
    name: 'TableRow',
    components: {
        GetnetIcon,
        MoneyIcon,
        BillIcon,
        AvatarIcon
    },
    props: {
        transaction: { Type: Object, default: '' }
    },

    setup () {
        const paymentIcons = computed(() => ({
            cartao_de_credito: GetnetIcon,
            dinheiro: MoneyIcon
        }))

        return {
            paymentIcons
        }
    },

    methods: {
        getWith (transaction) {
            if (transaction.costumer_data !== undefined) {
                return (transaction.costumer_data.name)
            } else if (transaction.bill_data !== undefined) {
                return (transaction.bill_data.title)
            }

            return ''
        }
    }
})

</script>

<style lang="scss" scoped>
.transaction_row{
    display: flex;
    background-color: var(--primary-background);
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
    align-items: center;
    padding-left: 2%;
    padding-right: 1%;
    margin-right: 2%;
}

.date{
    font-weight: 700;
    font-size: 1.8vh;
}

.with {
    font-weight: 700;
    font-size: 1.5vh;
    text-align: center;
    padding-left: 2%;
    padding-right: 0%;
    justify-content: flex-start;
}

.type {
    font-weight: 700;
    font-size: 1.8vh;
    margin-right: 2%;
    margin-left: 2%;
}

.method {
    text-transform: capitalize;
    justify-content: flex-start;
    color: var(--secundary-text);
    font-size: 1.5vh;
}

.value {
    font-weight: 700;
    font-size: 1.8vh;
    color: var(--secundary-text);
}

.column_icon{
    height: 2vh;
    width: 2vh;
    margin-right: 10%
}

.entrada {
    color: var(--green)
}

.saida {
    color: var(--orange)
}
</style>
