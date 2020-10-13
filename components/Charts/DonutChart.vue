<template>
    <div class="chart-container">
        <div>
            <div class="main-value">
                R$ 7842.29
            </div>
            <div class="main-description">
                Total
            </div>
        </div>
        <apexchart
            type="donut"
            height="100%"
            class="chart"
            :options="chartOptions"
            :series="series"
        />
        <div class="legend-list">
            <ChartLegend v-for="(item, idx) in labels" :key="item" :color="chartOptions.colors[idx]" :value="item" :description="descriptions[idx]" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import VueApexCharts from 'vue-apexcharts'

export default defineComponent({
    name: 'ColumnChart',
    components: {
        apexchart: VueApexCharts
    },

    setup (_) {
        return {
            series: [4415, 2073, 1794, 3113, 1457],
            labels: [4415, 2073, 1794, 3113, 2457],
            descriptions: ['Funcionários', 'Impostos', 'Espaço Físico', 'Matéria Prima', 'Taxas'],

            chartOptions: {
                chart: {
                    type: 'donut'
                },
                tooltip: {
                    enabled: false
                },
                colors: ['var(--darker-green)', 'var(--green)', '#9cd6e7', '#caf0f1', 'var(--blue)'],
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        expandOnClick: false
                    }
                },
                legend: {
                    show: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                    }
                }]
            }
        }
    }

})
</script>

<style scoped lang="scss">
.chart-container{
    display: flex;
    flex-direction: row;
    max-height: 35vh
}

.chart {
    max-height: 25vh;
}

.main-value {
    font-size: 2.5vh;
    font-weight: 700;
    margin-top:5%;
}

.main-description {
    font-size: 1.8vh;
}

.legend-list {
    flex: 1;
    margin-left: 10%;
}
</style>
