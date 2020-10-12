<template>
    <div :class="['home-cash-card', {'--orange': icon === 'down'}]">
        <icon :is="icons[icon]" class="card-icon" />

        <div class="card-info">
            <div class="card-info-label">
                {{ label }}
            </div>
            <div class="card-info-text">
                <span>R$</span>
                {{ value.toFixed(2).replace('.', ',') }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import UpIcon from '@/static/icons/trending-up.svg'
import DownIcon from '@/static/icons/trending-down.svg'

export default defineComponent({
    props: {
        label: { type: String, default: '' },
        icon: { type: String, default: 'up' },
        value: { type: Number, default: 0 }
    },

    setup () {
        const icons = computed(() => ({
            up: UpIcon,
            down: DownIcon
        }))

        return {
            icons
        }
    }
})
</script>

<style lang="scss" scoped>
.home-cash-card {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 500;
    width: 90%;

    .card-icon {
        margin-right: 50px;
        width: 80px;
        fill: var(--green);
    }

    .card-info {
        &-label {
            margin-bottom: -10px;
            color: var(--gray-light);

        }

        &-text {
            font-weight: 800;
            font-size: 80px;
            color: var(--primary-color);

            & > span {
                font-weight: 900;
                color: var(--green);
                margin-right: -10px;
            }
        }
    }

    &.--orange {
        .card-icon { fill: var(--orange); }
        .card-info-text > span { color: var(--orange); }
    }

}
</style>
