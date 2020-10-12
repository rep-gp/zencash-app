<template>
    <div class="summary-container">
        <div class="summary-title">
            Summary
        </div>

        <div class="section">
            <div class="section-title">
                Gains
            </div>
            <SummaryRow v-for="data in transactionsData" :key="data.value" :data="data" />
        </div>

        <div class="section">
            <div class="section-title">
                Gains
            </div>
            <SummaryRow v-for="data in transactionsData" :key="data.value" :data="data" />
        </div>
        <div class="balance">
            <div class="balance-title">
                Balance
            </div>
            <div class="balance-value">
                R$ 12.304,00
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
            { title: 'Total transactions received', value: 6 },
            { title: 'Sum of entries', value: 600 },
            { title: 'Average ticket', value: 0.0123 },
            { title: 'Credit card transactions', value: 50 }
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
    align-items: center;
    background-color:#00202E;
    border-radius: 5px;
    height: 75vh;
    margin-left: 2%;
    color: white;
    padding: 1.5% 2% 1.5% 2%;
    border: 1px solid var(--secondary-background)
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
    margin-top: auto;
    margin-bottom: auto;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.balance-title {
    font-size: 1.1rem;
    font-weight: 500
}

.balance-value {
    font-size: 1.1rem;
    font-weight: 500;
    color: #1691c5
}
</style>
