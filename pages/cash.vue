<template>
    <div class="cash-container">
        <h1>Caixa</h1>
        <div class="cash-content">
            <div class="left-column">
                <div class="main-stats">
                    <Card class="week-sales">
                        <div class="card-title">
                            Week Sales
                        </div>
                        <ColumnChart />
                    </Card>

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

    .left-column {
        flex: 3;
    }

    .main-stats{
        display: flex;
        flex-direction: row;
        height: 25vh
    }

    .week-sales {
        flex: 1;
        height: 23.7vh;
        margin-bottom: 3%;
        padding: 1.5% 1.5% 0% 1.5%;
    }

    .card-title {
        font-weight: 600;
        font-size: 0.9rem;
        color: #413f4d
    }

    .summary {
        flex: 1
    }

</style>
