<template>
    <div class="home-score">
        <header>
            <h2> Índice de Crédito </h2>
            <div class="score">
                {{ data }} pontos
                <span> /{{ maxScore }} </span>
            </div>
        </header>

        <scorebar :width="percentage" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        data: { type: Number, default: 900 }
    },
    setup(props) {
        const maxScore = 1000

        const percentage = computed(() =>
            props.data / maxScore * 100 + '%'
        )

        return {
            percentage,
            maxScore
        }
    }
})
</script>

<style lang="scss" scoped>
.home-score {
    & > header {
        display: flex;
        justify-content: space-between;
        align-content: flex-end;
        margin-bottom: 6px;

        & > h2 {
            margin-top: auto;
            font-weight: initial;
            font-size: 24px;
            height: fit-content;
            color: var(--main-color)
        }

        & > .score {
            font-size: 36px;
            & > span {
                font-size: 24px;
            }
        }
    }
}
</style>
