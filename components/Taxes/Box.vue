<template>
    <div class="box">
        <div class="title">
            {{ title }}
        </div>
        <div class="table">
            <div class="header row">
                <div class="column">
                    Tributo
                </div>
                <div class="column">
                    Alíquota
                </div>
                <div class="column">
                    Valor
                </div>
            </div>
            <div v-for="(row,idx) in rows" :key="idx" :class="['row', { '--is-solid': row.length === 4 }]">
                <div class="column">
                    {{ row[0] }}
                </div>
                <div class="column">
                    %{{ (+row[1]).toFixed(2) }}
                </div>
                <div class="column">
                    R${{ (+row[2]).toFixed(2) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaxesBox',
    props: {
        title: {
            type: String,
            default: ''
        },
        rows: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>

.box {
    padding: 15px;
    border: 2px solid $green--light;
    border-radius: 6px;
    color: #555;
    .title {
        font-weight: bold;
        font-size: 20pt;
        color: $green--light;
        margin-bottom: 20px;
    }
    .table {
        .row {
            display: grid;
            grid-template-columns: 3fr 1fr 1fr;
            grid-gap: 15px;
            padding: 10px 5px;
            border-bottom: 1px solid #eee;

            &.header {
                font-weight: bold;
                padding: 15px 5px;
                border-bottom: 1px solid #aaa;
            }
            &.--is-solid {
                color: #000;
                padding: 15px 5px;
                font-weight: bold;
            }
            &:last-of-type {
                border-bottom: 0;
            }
        }
    }
}
</style>
