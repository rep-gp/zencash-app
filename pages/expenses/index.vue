<template>
    <div class="expenses-page">
        <h1>Gastos</h1>

        <div class="expenses-content">
            <CardChart title="Expenses" class="donut-chart">
                <DonutChart />
            </CardChart>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'taxes',
    setup (_, { root: { $route } }) {
        console.log($route)
    }
})
</script>

<style lang="scss" scoped>
.expenses-page {
    h1 {
        font-size: 40px;
    }
}

.expenses-content {
    display: flex
}

.donut-chart {
    flex: 1;
    max-width: 50%;
    height: 30vh;
}
</style>
