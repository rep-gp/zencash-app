<template>
    <div class="summary-container">
        <div class="summary-title">
            Sumário
        </div>

        <div class="section">
            <div class="section-title">
                Entradas
            </div>
            <SummaryRow v-for="data in transactionsData" :key="data.value" :data="data" />
        </div>

        <div class="summary-finish">
            <div class="summary-finish-item">
                <div class="summary-finish-title">
                    Saldo
                </div>
                <div class="summary-finish-value">
                    R$ 12.304,00
                </div>
            </div>

            <div class="summary-finish-item">
                <div class="summary-finish-title">
                    Saque Rápido Temporário
                </div>
                <div class="summary-finish-value saque">
                    R$ 2.607,00
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Summary',
    data () {
        const transactionsData = [
            { title: 'Total de Transações Recebidas', value: 12 },
            { title: 'Soma de Entradas', value: 10.146, money: true },
            { title: 'Ticket Médio', value: 153.51, money: true },
            { title: 'Total de Transações no Cartão de Crédito', value: 50, money: true }
        ]
        return {
            transactionsData
        }
    }
})
</script>

<style lang="scss" scoped>
.summary-container {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-top: 2.3vh;
    align-items: center;
    background-color: var(--darker-green);
    border-radius: 5px;
    height: 40vh;
    margin-left: 2%;
    padding: 1.5% 2% 1.5% 2%;
    border: 1px solid var(--secundary-background)
}

.summary-title {
    align-self: flex-start;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 700;
    border-bottom: 1px solid #36363f;
    padding-bottom: 1.5%;

}

.section {
    width: 100%;
    border-bottom: 1px solid #36363f;
    padding-bottom: 3%;
}

.section-title {
    align-self: flex-start;
    margin-top: 2%;
    margin-bottom: 1%;
    font-size: 1.1rem;
    font-weight: 500
}

.balance {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.summary-finish {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: auto;
    margin-bottom: auto
}

.summary-finish-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 5%;
}

.summary-finish-title {
    font-size: 1.1rem;
    font-weight: 500
}

.summary-finish-value {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--blue)
}

.saque{
    color: var(--green)
}
</style>
