<template>
    <div :key="token">
        <div v-if="token" class="home-page">
            <home-score :data="834" />
            <home-cash :data="{ positive: 13004.123432, negative: 7419.043923}" />
            <area-chart :data="[]" class="chart" />
        </div>

        <div v-else>
            identidade
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
})

</script>

<style lang="scss" scoped>
.home-page {
    padding: 0 50px;

    .chart {
        margin-top: 30px;
    }
}
</style>
