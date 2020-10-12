<template>
    <div v-if="token" class="home-page">
        <home-score :data="834" />
        <home-cash :data="homeCash" />
        <area-chart :data="[]" class="chart" />
        <div class="grid">
            <home-table :data="homeTable" />
            <home-expense :balance="dif" :expense="homeTable[3]" />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed } from '@vue/composition-api'

export default defineComponent({
    setup () {
        const homeTable = ref([
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-11-03') },
            { gasto: 'Aluguel', valor: 324.43, data: new Date('2020-11-02') },
            { gasto: 'Conta de luz', valor: 41.05, data: new Date('2020-11-01') },
            { gasto: 'Conta de agua', valor: 2174.465, data: new Date('2020-10-20') },
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-10-10') },
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-10-02') },
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-10-01') },
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-10-02') },
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-10-01') },
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-10-02') },
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-10-01') }
        ])
        const homeCash = ref({ positive: 14004.123432, negative: 7419.043923 })
        const dif = computed(() => homeCash.value.positive - homeCash.value.negative)

        return {
            homeTable,
            homeCash,
            dif
        }
    }
})

</script>

<style lang="scss" scoped>
.home-page {
    padding: 0 50px;

    .chart {
        margin-top: 30px;
    }

    .grid {
        margin-top: 30px;
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 20px;
    }
}
</style>
