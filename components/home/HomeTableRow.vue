<template>
    <div class="home-table-row">
        <div> {{ gasto }} </div>
        <div class="value">
            R${{ valor.toFixed(2).replace('.', ',') }}
        </div>
        <div> {{ parsedDate }} </div>
    </div>
</template>

<script lang="ts">
import moment from 'moment'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        gasto: { type: String, default: '' },
        valor: { type: Number, default: 0 },
        data: { type: Date, default: () => new Date() }
    },

    setup (props) {
        return {
            parsedDate: moment(props.data).format('DD/MM/YYYY')
        }
    }
})
</script>

<style lang="scss" scoped>
.home-table-row {
    padding: 10px;
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    font-size: 22px;
    font-weight: 500;
    color: var(--tertiary-color);

    .value {
        font-weight: bold;
        color: var(--orange);
    }
}
</style>
