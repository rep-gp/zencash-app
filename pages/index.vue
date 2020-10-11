<template>
    <div class="home-page">
        <h1>Home Page</h1>
    </div>
</template>

<script >

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
    h1 {
        color: black;
    }
}
</style>
