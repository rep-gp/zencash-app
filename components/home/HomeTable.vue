<template>
    <div class="home-table">
        <header class="--capitalize">
            <div> gasto </div>
            <div> valor </div>
            <div> data </div>
        </header>

        <div class="home-table-list">
            <home-table-row v-for="(expense, idx) in data" :key="idx" v-bind="expense" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        data: { type: Array, default: () => ([]) }
    }
})
</script>

<style lang="scss" scoped>
.home-table {
    padding: 6px;
    border: 1px solid var(--secundary-background);

    & > header {
        color: var(--tertiary-text);
        font-weight: bold;
        font-size: 24px;
        padding: 10px;
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr;
    }

    &-list {
        overflow-y: auto;
        max-height: 230px;
    }
}
</style>
