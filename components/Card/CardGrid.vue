<template>
    <div class="grid column-1">
        <div class="column-1">
            <Card class="card-grid">
                <div class="card-title">
                    Total Sales
                </div>

                <div class="card-value">
                    R$ 1000
                    <div class="percentage-value">
                        1%
                    </div>
                </div>
            </Card>
            <Card class="card-grid">
                <div class="card-title">
                    Sales today
                </div>
                <div class="card-value">
                    R$ 800
                    <div class="percentage-value">
                        1%
                    </div>
                </div>
            </Card>
        </div>

        <div class="column-1">
            <Card class="card-grid">
                <div class="card-title">
                    Total clients
                </div>
                <div class="card-value">
                    20
                    <div class="percentage-value">
                        1%
                    </div>
                </div>
            </Card>
            <Card class="card-grid">
                <div class="card-title">
                    Month Paid Bills
                </div>
                <div class="card-value">
                    3 / 23
                    <div class="percentage-value">
                        1%
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'CardGrid'
})
</script>

<style lang="scss">
    .grid {
        display: flex;
        flex: 1;
    }

    .column-1 {
        flex: 1;
    }

    .card-grid {
        flex: 1;
        height: 11.4vh;
        margin: 0% 0% 3% 3%;
        padding: 5% 5% 5% 5%;
    }

    .card-title {
        font-weight: 600;
        font-size: 0.9rem;
        color: #413f4d
    }

    .card-value {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-size: 2rem;
        font-weight: 600;
        margin-top: 13%
    }

    .percentage-value {
        font-size: 1.4rem;
        font-weight: 700;
    }
</style>
