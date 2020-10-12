<template>
    <div class="card-container">
        Card
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'Card'
})
</script>

<style lang="scss" scoped>
    .card-container {
        background-color: white;
        border-radius: 5px;

        -webkit-box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.75);
    }
</style>
