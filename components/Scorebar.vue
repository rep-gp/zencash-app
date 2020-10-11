<template>
    <div class="scorebar-container">
        <div class="scorebar" :style="{ 'width': width }" />
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
.scorebar-container {
    background: rgb(170, 170, 170);
    border-radius: 10px;
    width: 100%;
    height: 10px;

    .scorebar {
        height: 10px;
        border-radius: 10px;
        background: rgb(59, 90, 59);
    }
}
</style>
