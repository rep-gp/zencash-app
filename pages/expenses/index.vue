<template>
    <div class="expenses-page">
        <h1>Gastos</h1>
        <div class="expenses-content">
            <div class="expenses-list">
                <Expenses />
            </div>

            <CardChart title="Resumo de Gastos" class="donut-chart">
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
    padding: 0 30px;

    h1 {
        font-size: 40px;
    }
}

.expenses-content {
    display: flex
}

.expenses-list {
    flex: 1;
    margin-right: 2%;
}

.donut-chart {
    flex: 1;
    height: 40vh;
}
</style>
