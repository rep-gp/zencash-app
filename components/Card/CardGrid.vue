<template>
    <div class="grid column-1">
        <div class="column-1">
            <Card
                title="Total Sales"
                :value="Number(total_sales.value)"
                :percentage="Number(total_sales.percentage)"
                class="card-grid"
            />

            <Card
                title="Sales Today"
                :value="Number(sales_today.value)"
                :percentage="Number(sales_today.percentage)"
                class="card-grid"
            />
        </div>

        <div class="column-1">
            <Card
                title="Total Clients"
                :value="Number(total_clients.value)"
                :percentage="Number(total_clients.percentage)"
                class="card-grid"
            />

            <Card
                title="Mounth Paid Bills"
                :value="Number(month_paid_bills.value)"
                :total="Number(month_paid_bills.total)"
                :percentage="Number(month_paid_bills.percentage)"
                class="card-grid"
            />
        </div>
    </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'CardGrid',
    setup() {
        return {
            total_sales: {
                value: 1000,
                percentage: 60
            },
            sales_today: {
                value: 1000,
                percentage: -20
            },
            total_clients: {
                value: 1000,
                percentage: 12
            },
            month_paid_bills: {
                value: 3,
                total: 33,
                percentage: -17
            }
        }
    }
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

    .arrow-icon {
        height: 1.6vh
    }

    .up-arrow {
        fill: var(--green)
    }

    .down-arrow {
        fill: var(--orange)
    }
</style>
