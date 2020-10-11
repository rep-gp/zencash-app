<template>
    <div class="transaction_row">
        <div class="date">
            {{ transaction.payment_date }}
        </div>
        <div class="type">
            {{ transaction.type }}
        </div>
        <div class="method">
            {{ transaction.payment_method }}
        </div>
        <div class="value">
            {{ transaction.value }}
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'TransactionRow',
    props: {
        transaction: { Type: Object, default: '' }
    }
})

</script>

<style lang="scss" scoped>
.transaction_row{
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    margin: 1.5% 2% 1% 2%;
    font-size: 0.9rem;
}

.date{
    font-weight: 700;
}

.type {
}
</style>
