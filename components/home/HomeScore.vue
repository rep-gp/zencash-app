<template>
    <div class="home-score">
        <div class="home-score-card">
            <h1>
                {{ data }}
                <div> pontos </div>
            </h1>
        </div>

        <home-score-bar :width="percentage" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        data: { type: Number, default: 0 }
    },
    setup (props) {
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
    margin: 60px 0;
    position: relative;

    &-card {
        position: absolute;
        top: -50px;
        left: 44%;
        z-index: 10;
        background: var(--main-background);
        padding: 0 16px;

        & > h1 {
            font-size: 90px;
            display: grid;
            place-items: center;
            font-weight: 900;

            & > div {
                margin-top: -20px;
                font-weight: 500;
                font-size: 40px;
                color: var(--gray-light);
            }
        }
    }
}
</style>
