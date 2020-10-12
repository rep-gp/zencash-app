<template>
    <div class="taxes-page">
        <h1>Impostos</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'expensesTaxes'
    // setup(_, { root: { $route } }) {}
})
</script>

<style lang="scss" scoped>
.taxes-page {
    h1 {
        font-size: 40px;
    }
}
</style>
