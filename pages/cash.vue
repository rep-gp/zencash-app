<template>
    <div class="cash-container">
        <h1>Caixa</h1>
        <div class="cash-content">
            <div class="column">
                <Card class="card" />
                <Transactions class="transactions-table" />
            </div>
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
    .cash-container {
        height: 90vh;

        h1 {
            font-size: 40px;
        }
    }

    .cash-content {
        display: flex;
        flex-direction: row;
        height: 100%;
        align-items: center;
    }

    .column {
        flex: 2;
    }

    .card {
        flex: 1;
        height: 10vh;
        margin-bottom: 3%;
    }

    .transactions-table {
    }

    .summary {
        flex: 1
    }
</style>
