<template>
    <button @click="onClick">
        <slot />
    </button>
</template>

<script>
export default {
    methods: {
        onClick () {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    border: 2px solid var(--green);
    border-radius: 12px;
    padding: 12px 18px;
    font-size: 13pt;
    font-weight: 700;
    color: var(--green);
    background: var(--primary-background);
    cursor: pointer;
    transition: 200ms ease;
    opacity: .6;

    &:hover { opacity: 1; }
}
</style>
