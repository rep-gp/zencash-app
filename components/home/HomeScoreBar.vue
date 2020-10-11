<template>
    <div class="home-score">
        <div class="home-scorebar" :style="{ 'width': width }" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        width: { type: String, default: '0%' }
    }
})
</script>

<style lang="scss" scoped>
.home-score {
    background: #dfdfdf;
    border-radius: 10px;
    width: 100%;
    height: 40px;

    &bar {
        height: 40px;
        border-radius: 10px;
        background: var(--green);
    }
}
</style>
