<template>
    <div class="cash-container">
        <h1>Caixa</h1>
        <div class="cash-content">
            <div class="column-2">
                <div class="main-stats">
                    <Card class="week-sales column-1">
                        Week
                    </Card>
                    <div class="grid column-1">
                        <div class="column-1 grid-">
                            <Card class="card-grid">
                                Week 1
                            </Card>
                            <Card class="card-grid">
                                Week 2
                            </Card>
                        </div>

                        <div class="column-1">
                            <Card class="card-grid">
                                Week 3
                            </Card>
                            <Card class="card-grid">
                                Week 4
                            </Card>
                        </div>
                    </div>
                </div>
                <Transactions class="transactions-table" />
            </div>
            <Summary class="summary column-1" />
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

    .column-1 {
        flex: 1
    }

    .column-2 {
        flex: 2;
    }

    .week-sales {
        height: 10vh;
        margin-bottom: 3%;
        margin-right: 1.5%
    }

    .grid {
        display: flex;
    }

    .card-grid {
        flex: 1;
        height: 9vh;
        margin: 0% 0% 3% 3%!important;

        &::last-child {
            margin-top:  5%
        }
    }

    .main-stats{
        display: flex;
        flex-direction: row;
        height: 20vh
    }

    .transactions-table {
    }
</style>
