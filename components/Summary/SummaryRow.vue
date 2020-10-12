<template>
    <div class="summary_row">
        <div class="title">
            {{ data.title }}
        </div>
        <div class="value">
            <span v-if="data.money">R$ </span>{{ data.value }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'SummaryRow',
    props: {
        data: { type: Object, default: {} }
    }

})
</script>

<style lang="scss" scoped>
.summary_row {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.6%
}

.title {
    font-size: 0.8rem;
    color: rgb(230, 220, 220);
}

.value {
    font-size: 0.9rem;
    font-weight: 500;
}
</style>
