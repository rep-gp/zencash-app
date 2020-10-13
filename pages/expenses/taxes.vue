<template>
    <div class="taxes-page">
        <h1>
            <div class="title">
                Impostos
            </div>

            <OutlineButton class="simulation-btn" @click="toggleSimulation">
                {{ simulateText }}
            </OutlineButton>
        </h1>
        <div v-if="simulationOpen" class="simulation-fields">
            <div class="field">
                <label>Faturamento Mensal</label>
                <input v: any-model="monthlyRevenue" type="number">
            </div>
            <div class="field">
                <label>Salário Bruto Mensal</label>
                <input v-model="monthlyPayroll" type="number">
            </div>
            <div class="field">
                <label>Pró-Labore Mensal</label>
                <input v-model="wageCompensation" type="number">
            </div>

            <div class="field">
                <SolidButton class="apply-btn" @click="recalculate">
                    {{ simulationLoading ? 'Carregando...' : 'Aplicar' }}
                </SolidButton>
            </div>
        </div>
        <div v-if="taxes" class="best-option">
            O melhor regime de imposto para a sua empresa poder ser o <strong>{{ bestOptionText.taxName }}</strong>, te fazendo economizar até <strong>R${{ bestOptionText.taxDifference }}</strong>!
        </div>
        <div class="grid">
            <TaxesBox title="Simples Nacional" :rows="simplesNacionalData" />
            <TaxesBox title="Lucro Presumido" :rows="lucroPresumidoData" />
        </div>
    </div>
</template>

<script lang="ts">
import TaxesBox from '@/components/Taxes/Box.vue'

import { defineComponent } from '@vue/composition-api'
import { TaxesService } from '~/service/TaxesService'

export default defineComponent({
    components: {
        TaxesBox
    },
    async asyncData () {
        const { monthlyRevenue, monthlyPayroll, wageCompensation, ...taxes } = await TaxesService.calculate('0')
        return {
            taxes,
            monthlyRevenue,
            monthlyPayroll,
            wageCompensation,
            simulationOpen: false,
            simulationLoading: false
        }
    },
    computed: {
        simplesNacionalData (): any {
            const $ = this.taxes as any
            return this.taxes ? [
                ['Anexo III', $.S_ALIQUOTA_ANEXOIII, $.S_VALOR_ANEXOIII],
                ['Anexo IV', $.S_ALIQUOTA_ANEXOIV, $.S_VALOR_ANEXOIV],
                ['Anexo V', $.S_ALIQUOTA_ANEXOV, $.S_VALOR_ANEXOV],
                ['ISS', $.S_ALIQUOTA_ISS, $.S_VALOR_ISS],
                ['Total Carga Tributária', $.S_ALIQUOTA_TOTAL, $.S_VALOR_TOTAL, true],
                ['INSS S/ Salário', $.S_INSS_SALARIO_ALIQUOTA, $.S_INSS_SALARIO],
                ['INSS Pró-Labore', $.S_INSS_PROLABORE_ALIQUOTA, $.S_INSS_PROLABORE],
                ['FGTS S/ Salário', $.S_IRRF_PROLABORE_ALIQUOTA, $.S_IRRF_PROLABORE],
                ['Total Carga Folha de Pagamento', $.S_TOTAL_FOLHA_ALIQUOTA, $.S_TOTAL_FOLHA, true],
                ['Total de Encargos', $.S_ALIQUOTA_FINAL, $.S_VALOR_FINAL, true]
            ] : []
        },
        lucroPresumidoData () {
            const $ = this.taxes as any
            return this.taxes ? [
                ['IRPJ', $.LP_ALIQUOTA_IRPJ, $.LP_VALOR_IRPJ],
                ['CSLL', $.LP_ALIQUOTA_CSLL, $.LP_VALOR_CSLL],
                ['PIS', $.LP_ALIQUOTA_PIS_PASEP, $.LP_VALOR_PIS_PASEP],
                ['COFINS', $.LP_ALIQUOTA_COFINS, $.LP_VALOR_COFINS],
                ['ISS', $.LP_ALIQUOTA_ISS, $.LP_VALOR_ISS],
                ['CPP', $.LP_ALIQUOTA_CPP, $.LP_VALOR_CPP],
                ['Total Carga Tributária', $.LP_ALIQUOTA_TOTAL, $.LP_VALOR_TOTAL, true],
                ['INSS S/ Salário', $.INSS_SALARIO_ALIQUOTA, $.INSS_SALARIO],
                ['INSS Pró-Labore', $.INSS_PROLABORE_ALIQUOTA, $.INSS_PROLABORE],
                ['FGTS S/ Salário', $.IRRF_PROLABORE_ALIQUOTA, $.IRRF_PROLABORE],
                ['Total Carga Folha de Pagamento', $.LP_TOTAL_FOLHA_ALIQUOTA, $.LP_TOTAL_FOLHA, true],
                ['Total de Encargos', $.LP_FINAL_ALIQUOTA, $.LP_FINAL, true]
            ] : []
        },
        bestOption () {
            const totalSimplesNacional = ((this.simplesNacionalData as []).slice(-1)[0] || [])[2]
            const totalLucroPresumido = ((this.lucroPresumidoData as []).slice(-1)[0] || [])[2]
            return this.taxes ? {
                tax: totalSimplesNacional < totalLucroPresumido ? 'SN' : 'LP',
                difference: Math.abs(totalSimplesNacional - totalLucroPresumido),
                totalSimplesNacional,
                totalLucroPresumido
            } : null
        },
        bestOptionText () {
            if (this.taxes) {
                const taxName = (this.bestOption as any).tax === 'SN' ? 'Simples Nacional' : 'Lucro Nacional'
                const taxDifference = (this.bestOption as any).difference.toFixed(2)
                return {
                    taxName,
                    taxDifference
                }
            } else {
                return null
            }
        },
        simulateText () {
            return this.simulationOpen ? 'Fechar Simulação' : 'Abrir Simulação'
        }
    },
    methods: {
        toggleSimulation () {
            this.simulationOpen = !this.simulationOpen
        },
        async recalculate () {
            this.simulationLoading = true
            this.taxes = await TaxesService.calculate('0', {
                monthlyRevenue: this.monthlyRevenue as number || 0,
                monthlyPayroll: this.monthlyPayroll as number || 0,
                wageCompensation: this.wageCompensation as number || 0
            })
            this.simulationLoading = false
        }
    }

})
</script>

<style lang="scss" scoped>
.taxes-page {
    h1 {
        font-size: 40px;
        display: flex;
        .simulation-btn {
            margin-left: auto;
        }
    }
    .simulation-fields {
        display: grid;
        grid-template-columns: repeat(3, 2fr) 1fr;
        grid-gap: 20px;
        margin-bottom: 20px;
        .field {
            label {
                display: block;
                font-weight: bold;
                color: var(--secundary-color);
                margin-bottom: 10px;
            }
            select, input {
                display: block;
                border: 2px solid var(--green);
                padding: 12px 18px;
                font-size: 13pt;
                font-weight: bold;
                font-family: Barlow;
                border-radius: 4px;
                width: 100%;
            }
            .apply-btn {
                position: relative;
                top: 30px;
                width: 100%;
            }
        }
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px;
    }
    .best-option {
        text-align: center;
        font-size: 16pt;
        margin: 25px 0;
        strong {
            color: var(--green);
        }
    }
}
</style>
