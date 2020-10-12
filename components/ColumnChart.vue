<template>
    <div>
        <apexchart type="bar" height="130%" :options="chartOptions" :series="series" />
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

    setup(_) {
        return {
            series: [{
                name: 'Day Sales',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false
                    }
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
                    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yaxis: {
                    title: {
                        text: '$ (thousands)'
                    }
                },
                fill: {
                    colors: ['#3CDA7D'],
                    opacity: 1
                },
                legend: {
                    show: false
                },
                tooltip: {
                    y: {
                        formatter (val) {
                            return '$ ' + val + ' thousands'
                        }
                    }
                }
            }

        }
    }
})
</script>

<style lang="scss" scoped>

</style>
