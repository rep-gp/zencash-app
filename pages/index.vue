<template>
    <div class="home-page">
        <h1>Home Page</h1>
        <div class="user-score">score on bar</div>

        <div class="user-cash">cash</div>

        <div class="user-expenses">
            <div class="user-expenses-chart">grafico bonito</div>
            <div class="user-expenses-data"> gastos </div>
        </div>
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
        font-size: 40px;
        margin-bottom: 20px;
    }

    & > .user-score {
        border: 1px solid red;
        margin-bottom: 20px;
    }

    & > .user-cash {
        border: 1px solid red;
        margin-bottom: 20px;
    }

    .user-expenses {
        border: 1px solid red;
        display: flex;
        justify-content: space-between;

        &-chart {}
        &-data {}
    }
}
</style>
