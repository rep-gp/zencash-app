<template>
    <div class="home-page">
        <home-score :data="834" />
        <home-cash :data="{ positive: 13004.123432, negative: 7419.043923}" />
        <area-chart :data="[]" class="chart"/>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    async asyncData({ $accessor }) {
        await $accessor.users.fetchUsers()
        const userList = $accessor.users.userList

        return {
            userList
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
}
</style>
