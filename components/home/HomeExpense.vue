<template>
    <div class="home-next">
        <div class="card">
            <h2> Próxima Despesa: </h2>

            <div class="card-title">
                {{ expense.gasto }}
            </div>

            <currency class="card-value" font-size="40px" orange>
                {{ expense.valor.toFixed(2).replace('.', ',') }}
            </currency>

            <div class="card-date">
                Dia {{ parsedDate }}
            </div>
        </div>

        <div class="balance">
            <h2> Balanço </h2>
            <currency font-size="40px">
                {{ balance.toFixed(2).replace('.', ',') }}
            </currency>
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
        moment.locale('pt')
        return {
            parsedDate: moment(props.expense.data).format('D MMM YYYY')
        }
    }
})
</script>

<style lang="scss" scoped>
.home-next {
    height: 100%;

    h2 {
        color: var(--tertiary-color);
        margin-bottom: 10px;
    }

    .card {
        border-radius: 4px;
        width: 100%;
        padding: 6px 10px;
        border: 1px solid var(--secundary-background);

        &-title {
            font-size: 26px;
            font-weight: 500;
            margin-top: 20px;
            margin-left: 20px;
        }

        &-value {
            margin-left: 20px;
        }

        &-date {
            font-weight: 600;
            margin-left: 20px;
            margin-bottom: 30px;
            color: var(--gray);
            font-size: 13pt;
        }
    }

    .balance {
        padding: 20px;
        border: 1px solid var(--secundary-background);
        border-radius: 4px;
        margin-top: 20px;

        h2 { color: var(--tertiary-color); }
    }
}
</style>
