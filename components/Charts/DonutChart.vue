<template>
    <div>
        <apexchart type="donut" height="100%" class="chart" :options="chartOptions" :series="series" />
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
            series: [44, 55, 41, 17],
            chartOptions: {
                chart: {
                    type: 'donut'
                },
                colors: ['#005c39', 'var(--green)', '#9cd6e7', '#caf0f1'],
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        expandOnClick: false
                    }
                },
                legend: {
                    offsetX: -10,
                    horizontalAlign: 'left',
                    itemMargin: {
                        horizontal: 1
                    },

                    formatter: (seriesName: any) => {
                        return seriesName
                    }
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

<style>
.chart {
        max-height: 25vh
    }
</style>
