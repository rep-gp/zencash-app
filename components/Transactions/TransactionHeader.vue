<template>
    <div class="transaction_header">
        <div class="column with">
            Transação
        </div>
        <div class="column type">
            Tipo
        </div>
        <div class="column date">
            Data
        </div>
        <div class="column value">
            Quantia
        </div>
        <div class="column method">
            Método
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'TransactionHeader'
})

</script>

<style lang="scss" scoped>
.transaction_header{
    display: flex;
    width: 100%;
    height: 8vh;
    align-items: center;
    justify-content: space-around;
    margin: 0% 7% 0% 7%;
    border-bottom: 1px solid var(--green);
}

.column {
    flex: 1;
    font-weight: 700;
    font-size: 0.9rem;
    color: #535366;
    border-right: 1px solid #bfc0ca;
    text-align: center;

    &:last-child{
        border-right: none;
    }
}
</style>
