<template>
    <div class="employees-page">
        <h1>Funcionários</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'expensesEmplooyes',
    setup(_, { root: { $route } }) {
        console.log($route)
    }
})
</script>

<style lang="scss" scoped>
.employees-page {
    h1 {
        font-size: 40px;
    }
}
</style>
