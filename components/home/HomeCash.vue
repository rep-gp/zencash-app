<template>
    <div class="home-cash">
        <home-cash-card :value="positiveValue" label="Recebido" />
        <home-cash-card :value="negativeValue" label="Devendo" icon="down" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
    props: {
        data: { type: Object, default: () => ({}) }
    },

    setup (props) {
        const positiveValue = computed(() => props.data.positive)
        const negativeValue = computed(() => props.data.negative)

        return {
            positiveValue,
            negativeValue
        }
    }
})
</script>

<style lang="scss" scoped>
.home-cash {
    margin-top: 80px;
    display: flex;
    width: 95%;
    align-items: center;
}
</style>
