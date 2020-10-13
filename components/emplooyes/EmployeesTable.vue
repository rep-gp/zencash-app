<template>
    <div class="employees-table">
        <header class="--capitalize">
            <div> name </div>
            <div> salário </div>
            <div> cargo </div>
            <div> status </div>
            <div> pagamento </div>
        </header>

        <div class="employees-table-list">
            <employees-row
                v-for="(employee, idx) in list"
                :key="idx"
                v-bind="employee"
            />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        list: { type: Object, default: () => ({}) }
    }
}
</script>

<style lang="scss" scoped>
.employees-table {
    header {
        padding-bottom: 10px;
        font-size: 30px;
        font-weight: 600px;
        color: var(--secundary-color);

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    // &-list {}
}
</style>
