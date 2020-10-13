<template>
    <div>
        <apexchart type="bar" height="100%" class="chart" :options="chartOptions" :series="series" />
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
            series: [{
                name: 'Day Sales',
                data: [44, 55, 57, 56, 61, 58, 63]
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false
                    }
                },
                grid: {
                    show: false
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '15%',
                        endingShape: 'rounded'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
                },
                yaxis: {
                    opposite: true,
                    title: {
                        text: '$ ( mil )'
                    }
                },
                fill: {
                    colors: ['var(--green)'],
                    opacity: 1
                },
                legend: {
                    show: false
                },
                tooltip: {
                    y: {
                        formatter (val: any) {
                            return '$ ' + val + ' mil'
                        }
                    }
                }
            }

        }
    }
})
</script>

<style lang="scss" scoped>
    .chart {
        max-height: 20vh
    }
</style>
