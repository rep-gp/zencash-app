<template>
    <div class="home-page">
        <h1>Zen Cash</h1>

        <home-score />
    </div>
</template>

<script>

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    async asyncData({ $api }) {
        const data = await $api.fetchData('companies/')

        return { data }
    }
})

</script>

<style lang="scss" scoped>
.home-page {
    min-height: 93.4vh;

    h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }
}
</style>
