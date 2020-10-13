<template>
    <div class="expenses-container">
        <TableHeader :list="headers" />

        <div class="expenses-rows">
            <ExpensesRow
                v-for="(item, idx) in data"
                :key="idx"
                :expense="item"
            />
        </div>
    </div>
</template>

<script lang="
                ts"
            >
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Expenses',
    setup () {
        const headers = ['Gasto', 'Valor', 'Data']

        const data = [
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-11-03') },
            { gasto: 'Aluguel', valor: 324.43, data: new Date('2020-11-02') },
            { gasto: 'Conta de luz', valor: 41.05, data: new Date('2020-11-01') },
            { gasto: 'Conta de agua', valor: 2174.465, data: new Date('2020-10-20') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-10') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-02') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-01') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-02') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-01') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-02') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-01') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-02') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-01') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-02') },
            { gasto: 'Conta', valor: 414.465, data: new Date('2020-10-01') }
        ]

        return {
            headers,
            data
        }
    }
})
</script>

<style lang="scss" scoped>
    .expenses-container {
        border-radius: 5px;
        border: 1px solid var(--secondary-background);
    }

    .expenses-rows{
        max-height: 70vh;
        overflow-y: auto
    }
</style>
