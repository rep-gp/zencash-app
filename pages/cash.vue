<template>
    <div class="cash_container">
        <h1>Caixa</h1>
        <div class="cash-content">
            <Transactions class="transactions-table" />
            <Summary class="summary" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({

})
</script>

<style lang="scss" scoped>
.cash_container {
    h1 {
        font-size: 40px;
    }
}

.cash-content {
    display: flex;
    flex-direction: row;
}

.transactions-table {
    flex:2
}

.summary {
   flex: 1
}
</style>
