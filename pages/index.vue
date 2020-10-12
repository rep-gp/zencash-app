<template>
    <div class="home-page">
        <home-score :data="834" />
        <home-cash :data="{ positive: 13004.123432, negative: 7419.043923}" />
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    async asyncData({ $api, $accessor }) {
        const data = await $api.fetchData('companies/')

        await $accessor.auth.authCheck()

        await $accessor.users.fetchUsers()
        const userList = $accessor.users.userList

        return {
            data,
            userList
        }
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
