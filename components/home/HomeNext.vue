<template>
    <div class="home-next">
        <h2> Próxima Despesa </h2>
        <div class="card">
            {{ expense }}
        </div>

        <div class="balance">
            <h2> Balanço </h2>
            <span> R$: </span> {{ balance }}
        </div>
    </div>
</template>

<script lang="ts">
import moment from 'moment'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        expense: { type: Object, default: () => ({}) },
        balance: { type: Number, default: 0 }
    },
    setup (props) {
        return {
            parsedDate: moment(props.expense.data).format('DD/MM/YYYY')
        }
    }
})
</script>

<style lang="scss" scoped>
.home-next {
    h2 {
        color: var(--tertiary-color);
    }
    .card {
        border: 1px solid red;
    }
    .balance {
        text-align: right;
    }
}
</style>
