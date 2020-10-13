<template>
    <div class="expenses_row">
        <div class="column expense">
            {{ expense.gasto }}
        </div>

        <div class="column value">
            $ {{ expense.valor }}
        </div>

        <div class="column date">
            {{ parsedDate }}
        </div>
    </div>
</template>

<script lan="ts">
import { defineComponent } from '@vue/composition-api'
import moment from 'moment'

export default defineComponent({
    name: 'ExpensesRow',
    props: {
        expense: { Type: Object, default: '' }
    },
    setup (props) {
        return {
            parsedDate: moment(props.data).format('DD/MM/YYYY')
        }
    }
})
</script>

<style lang="scss" scoped>
.expenses_row{
    display: flex;
    background-color: var(--primary-background);
    align-items: center;
    border-bottom: 1px solid #d4d5db;
    height: 35px;
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 0.9rem;
}

.column {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-left: 2%;
    padding-right: 1%;
    margin-right: 2%;
}

.expense {
    font-weight: 400;
    font-size: 1.8vh;
}

.date{
    font-weight: 700;
    font-size: 1.8vh;
}

.value {
    font-weight: 700;
    font-size: 1.8vh;
    color: var(--secundary-text);
}
</style>
