<template>
    <div class="button" @click="handleClick" :style="{ opacity: !disabled }">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        disabled: { type: Boolean, default: false }
    },

    setup(props, { emit }) {
        const handleClick = (event: any) => {
            if (!props.disabled) { emit('click', event) }
        }
        return {
            handleClick
        }
    }
})

</script>

<style lang="scss" scoped>
.button {
    background: var(--green);
    color: var(--primary-text);
    border-radius: 4px;
    padding: 8px;
    font-weight: 500;
    display: grid;
    place-items: center;
    cursor: pointer;

}
</style>
