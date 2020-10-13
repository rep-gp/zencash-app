<template>
    <div class="employees-page">
        <h1>Funcionários</h1>

        <employees-table :list="employeesList" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'employees',

    setup () {
        return {
            employeesList: [
                { name: 'João', value: 414.465, date: new Date('2020-11-03'), job: 'Gerente', status: false },
                { name: 'Marcia', value: 324.43, date: new Date('2020-11-02'), job: 'Gerente', status: true },
                { name: 'José', value: 41.05, date: new Date('2020-11-01'), job: 'Gerente', status: true },
                { name: 'Luiza', value: 2174.465, date: new Date('2020-10-20'), job: 'Senior', status: false },
                { name: 'Carmen', value: 414.465, date: new Date('2020-10-10'), job: 'Senior', status: true },
                { name: 'Felipe Mello', value: 414.465, date: new Date('2020-10-02'), job: 'Estagiário', status: false },
                { name: 'Lucio', value: 414.465, date: new Date('2020-10-01'), job: 'Estagiário', status: true },
                { name: 'Carla', value: 414.465, date: new Date('2020-10-02'), job: 'Estagiário', status: true },
                { name: 'Pedro', value: 414.465, date: new Date('2020-10-01'), job: 'Estagiário', status: false }
            ]
        }
    }
})
</script>

<style lang="scss" scoped>
.employees-page {
    padding: 0 30px;

    h1 {
        font-size: 40px;
    }
}
</style>
