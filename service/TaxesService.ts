import axios from 'axios'
import { Service } from './Service'

const API_URL = 'https://hxqsh0c52k.execute-api.us-east-1.amazonaws.com/bypass?url=https://neositecontabil.topcontroller.com.br/load_analisetributaria/analisar'

export class TaxesService extends Service {
    public static async calculate (companyId: string, options?: { monthlyRevenue: number | unknown, monthlyPayroll: number | unknown, wageCompensation: number | unknown }) {
        const { monthlyRevenue, monthlyPayroll, wageCompensation } = await Service.get('/companies/' + companyId) || {}
        const requestBody = [
            'atividade=19',
            `faturamento_mensal%5B%5D=${encodeURIComponent((options?.monthlyRevenue || monthlyRevenue) + ',00')}`,
            'tabela_anexo%5B%5D=5',
            'base_calculo_irpj%5B%5D=32.00',
            'aliq_iss%5B%5D=5%2C00',
            `salario_mensal=${encodeURIComponent((options?.monthlyPayroll || monthlyPayroll) + ',00')}`,
            `prolabore_mensal=${encodeURIComponent((options?.wageCompensation || wageCompensation) + ',00')}`,
            'rat='
        ].join('&')
        const { data } = (await axios.post(API_URL, { body: requestBody }))
        return { ...data, monthlyRevenue, monthlyPayroll, wageCompensation }
    }
}
