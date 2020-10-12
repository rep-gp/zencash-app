<template>
    <div class="expenses-page">
        <h1>Gastos</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'expenses',
    setup(_, { root: { $route } }) {
        console.log($route)
    }
})
</script>

<style lang="scss" scoped>
.expenses-page {
    h1 {
        font-size: 40px;
    }
}
</style>
