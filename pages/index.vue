<template>
    <div v-if="token" class="home-page">
        <home-score :data="834" />
        <home-cash :data="{ positive: 13004.123432, negative: 7419.043923}" />
        <area-chart :data="[]" class="chart" />
        <div class="grid">
            <home-table :data="homeTable" />
            <home-next :balance="345" :expense="homeTable[0]"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup () {
        const homeTable = [
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-10-03') },
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-10-02') },
            { gasto: 'Conta de luz', valor: 414.465, data: new Date('2020-10-01') }
        ]

        return {
            homeTable
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
        margin-top: 50px;
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 20px;
    }
}
</style>
