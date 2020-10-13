<template>
    <div class="expenses-container">
        <TableHeader :list="headers" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Expenses',
    setup () {
        const headers = ['1', '2', '3']

        return {
            headers
        }
    }
})
</script>

<style lang="scss" scoped>
    .expenses-container {
        border-radius: 5px;
        border: 1px solid var(--secondary-background)
    }
</style>
