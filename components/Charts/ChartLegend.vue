<template>
    <div class="legend-container">
        <div class="color" :style="`background-color: ${color}`" />
        <div class="legend-text">
            <div class="value">
                $ {{ value }}
            </div>
            <div class="description">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'ChartLegend',
    props: {
        value: { type: Number, default: 0 },
        description: { type: String, default: '' },
        color: { type: String, default: '' }
    }
})
</script>

<style lang="scss" scoped>
.legend-container{
    display: flex;
}

.legend-text{
    margin-bottom: 8%;
}

.value {
    font-weight: 700;
    font-size: 2.3vh;
}

.color{
    margin-top: 10%;
    margin-right: 10%;
    height: 1.5vh;
    width: 1.5vh;
    border-radius: 100%;
}

.description {
    font-size: 1.5vh;
    color: #3d3838;
    font-weight: 300
}
</style>
