<template>
    <div class="employees-row">
        <div> {{ name }} </div>
        <div class="value"> R${{ value.toFixed(2).replace('.', ',') }} </div>
        <div> {{ job }} </div>
        <div :class="['status', {'--orange': !status}]"> {{ statusText }} </div>
        <div> {{ parsedDate }} </div>
    </div>
</template>

<script lang="ts">
import moment from 'moment'
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
    props: {
        name: { type: String, default: '' },
        value: { type: Number, default: 0 },
        job: { type: String, default: '' },
        status: { type: Boolean, default: false },
        date: { type: Date, default: () => new Date() }
    },

    setup (props) {
        const data = computed(() => moment(props.date).format('DD/MM/YYYY'))

        const statusText = computed(() => props.status ? 'Pago' : 'A pagar')

        return {
            parsedDate: data,
            statusText
        }
    }
})
</script>

<style lang="scss" scoped>
$shadow: 0px 4px 8px rgba(0, 0, 0, 0.20);

.employees-row {
    padding: 20px 0;
    border-radius: 4px;
    font-size: 24px;
    font-weight: 700px;
    color: var(--primary-color);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    &:hover {
        transition: .2s;
        box-shadow: $shadow;
    }
    .value {
        font-weight: 700;
    }

    .status {
        font-weight: 800;
        color: var(--green);

        &.--orange { color: var(--orange); }
    }
}
</style>
