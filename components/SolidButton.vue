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
    border-radius: 12px;
    padding: 12px 18px;
    font-size: 13pt;
    font-weight: 700;
    color: var(--main-background);
    background: var(--green);
    border: 0;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
        opacity: .5;
    }
}
</style>
