<template>
    <div class="cash-container">
        <h1>Caixa</h1>
        <div class="cash-content">
            <div class="left-column">
                <div class="main-stats">
                    <CardChart title="Vendas da Semana" class="chart">
                        <ColumnChart />
                    </CardChart>

                    <CardGrid />
                </div>
                <Transactions />
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
        height: 87.7vh;
        padding: 0 30px;

        h1 {
            font-size: 40px;
        }
    }

    .cash-content {
        display: flex;
        flex-direction: row;
        height: 90%;
        align-items: center;
    }

    .left-column {
        flex: 3;
    }

    .main-stats{
        display: flex;
        flex-direction: row;
        height: 25vh
    }

    .summary {
        flex: 1
    }

    .chart {
        flex: 1;
        height: 23.7vh;
        margin-bottom: 3%;
    }

</style>
