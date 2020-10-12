<template>
    <div class="chart">
        <chart
            width="100%"
            height="200px"
            type="area"
            :options="options"
            :series="series"
        />
    </div>
</template>

<script lang="ts">
// import moment from 'moment'

export default {
    props: {
        data: { type: Array, default: () => ([]) }
    },

    data: () => ({
        options: {
            stroke: {
                width: 0,
                curve: 'smooth'
            },
            grid: { show: false },
            colors: ['#00000099', '#DA883C99', '#3CDA7D99'],
            fill: { type: 'solid' },
            dataLabels: { enabled: false },
            legend: { show: false },
            xaxis: {
                categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                labels: {
                    style: { colors: '#777' }
                }
            },
            yaxis: { show: false }
        },
        series: [
            {
                name: 'Diferença',
                data: [209, 490, 6000, 700, 923, 2131, 654, 3242, 2133, 3422]
            },
            {
                name: 'Dividas',
                data: [579, 5000, 490, 6000, 700, 923, 2131, 654, 3242, 213]
            },
            {
                name: 'Recebidos',
                data: [30, 3500, 5000, 490, 6000, 700, 923, 2131, 654, 3242]
            }
        ]
    })
}
</script>

<style>

</style>
