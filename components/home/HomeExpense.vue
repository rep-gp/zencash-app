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
    // height: 100%;

    .card {
        border-radius: 4px;
        width: 100%;
        padding: 6px 10px;
        border: 1px solid var(--secondary-background);

        &-title {
            text-align: center;
            font-size: 26px;
            font-weight: 500;
            margin-top: 20px;
        }

        &-value {
            text-align: center;
        }

        &-date {
            text-align: right;
            font-weight: 600;
            margin-top: 20px;
            color: var(--tertiary-color);
            justify-items: flex-end;
            font-size: 30px;
        }
    }

    .balance {
        padding: 6px 10px;
        border: 1px solid var(--secondary-background);
        border-radius: 4px;
        text-align: right;
        margin-top: 20px;

        h2 { color: var(--tertiary-color); }
    }
}
</style>
