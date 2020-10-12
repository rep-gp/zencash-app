<template>
    <div class="card-container">
        <div class="card-title">
            {{ title }}
        </div>
        <slot class="chart" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Card',
    props: {
        title: { type: String, default: 'Card' },
        value: { type: Number, default: 0 },
        percentage: { type: Number, default: 0 },
        type: { type: String, default: '' }
    }
})
</script>

<style lang="scss" scoped>
    .card-container {
        flex: 1;
        padding: 1.5% 1.5% 0% 1.5%;
        background-color: white;
        border-radius: 5px;

        border: 1px solid var(--secondary-background)
    }

    .card-title {
        font-weight: 600;
        font-size: 2.3vh;
        color: #413f4d
    }

    .chart {
        flex: 1;
    }
</style>
