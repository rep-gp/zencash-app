<template>
    <div class="chart">
        <chart
            width="100%"
            height="300px"
            type="line"
            :options="options"
            :series="series"
        />
    </div>
</template>

<script>
export default {
    computed: {
        options () {
            return {
                xaxis: {
                    categories: this.axis
                },
                chart: {
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 3,
                        opacity: 0.2
                    }
                },
                markers: {
                    size: 0
                },
                colors: this.colors(this.series.length, 200, 255),
                datalabel: {}
            }
        },
        axis () {
            // return this.interval.map(({ date }) => capitalize(moment(date).format('MMM/YY')))
        },
        series () {
            const { brand } = this.appliedFilter
            return this.isCategory
                ? Object.entries(this.data).map(([k, v]) => ({
                    name: k,
                    data: v.map(({ count }) => count)
                }))
                : [
                    {
                        name: brand,
                        data: this.data.map(({ count }) => count)
                    }
                ]
        },
        interval () {
            return this.isCategory ? Object.values(this.data).sort().pop() : this.data
        }
    }
}
</script>

<style>

</style>
