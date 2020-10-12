import moment from 'moment'

export const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
})

export const parseTransaction = (data: any): any => {
    Object.values(data).map((element: any) => {
        Object.values(element).map((transaction: any) => {
            transaction.payment_date = moment(transaction.payment_date).isSame(
                new Date(),
                'day'
            )
                ? (transaction.payment_date = 'Today')
                : moment(transaction.payment_date).format('DD.MM')
            transaction.payment_method = String(
                transaction.payment_method
            ).replace('_', ' ')
            transaction.value = formatter.format(transaction.value)
        })
    })

    return data
}
