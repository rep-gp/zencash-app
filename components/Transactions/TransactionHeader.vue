<template>
    <div class="transaction_header">
        <div class="column with">
            With
        </div>
        <div class="column type">
            Type
        </div>
        <div class="column date">
            Date
        </div>
        <div class="column value">
            Amount
        </div>
        <div class="column method">
            Method
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

    -webkit-box-shadow: 0px 4px 7px 3px rgba(196,184,196,1);
    -moz-box-shadow: 0px 4px 7px 3px rgba(196,184,196,1);
    box-shadow: 0px 4px 7px 3px rgba(196,184,196,1);
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
