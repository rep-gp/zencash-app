<template>
    <div class="transaction_header">
        <div v-for="item in list" :key="item" class="column">
            {{ item }}
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'TableHeader',
    props: {
        list: { type: Array, default: [] }
    }
})

</script>

<style lang="scss" scoped>
.transaction_header{
    display: flex;
    width: 100%;
    height: 8vh;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid var(--green);
}

.column {
    flex: 1;
    font-weight: 700;
    font-size: 0.9rem;
    color: #535366;
    border-right: 1px solid #bfc0ca;
    text-align: center;

    &:last-child{
        border-right: none;
    }
}
</style>
