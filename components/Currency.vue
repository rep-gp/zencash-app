<template>
    <div
        :class="['currency', {'--orange': orange}]"
        :style="{'font-size': fontSize, 'font-weight': fontWeight}"
    >
        <span>R$</span><slot />
    </div>
</template>

<script>
export default {
    props: {
        fontSize: { type: String, default: '20px' },
        fontWeight: { type: Number, default: 900 },
        orange: { type: Boolean, default: false }
    }
}
</script>

<style lang="scss" scoped>
.currency {
    white-space: nowrap;

    & > span {
        margin-right: -.1em;
        color: var(--green);
    }

    &.--orange {
        & > span { color: var(--orange); }
    }
}
</style>
