<template>
    <div class="card-container">
        <div class="card-title">
            {{ title }}
        </div>
        <div class="card-value">
            <div>
                <span v-if="money">
                    R$
                </span> {{ value }} <span v-if="total">
                    / {{ total }}
                </span>
            </div>

            <div class="percentage-value">
                <UpArrow v-if="percentage > 0" class="arrow-icon up-arrow" />
                <DownArrow v-if="percentage < 0" class="arrow-icon down-arrow" />

                {{ String(percentage).replace('-', '') }} %
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import UpArrow from '../../static/icons/arrow-up.svg'
import DownArrow from '../../static/icons/arrow-down.svg'

export default defineComponent({
    name: 'Card',
    components: {
        UpArrow,
        DownArrow
    },
    props: {
        title: { type: String, default: 'Card' },
        value: { type: Number, default: 0 },
        total: { type: Number },
        percentage: { type: Number, default: 0 },
        type: { type: String, default: '' },
        money: { type: Boolean }
    }
})
</script>

<style lang="scss" scoped>
    .card-container {
        background-color: var(--primary-background);
        border-radius: 5px;

        border: 1px solid var(--secundary-background)
    }

    .card-title {
        font-weight: 600;
        font-size: 1.8vh;
        color: var(--secundary-text)
    }

    .card-value {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-size: 2.3vh;
        font-weight: 600;
        margin-top: 13%
    }

    .percentage-value {
        font-size: 1.9vh;
        font-weight: 700;
    }
</style>
