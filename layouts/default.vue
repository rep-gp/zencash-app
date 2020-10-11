<template>
    <div>
        <sidebar :items="items" />
        <div :class="['main-container', {'--is-expanded': isExpanded}]">
            <nuxt />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapState } from 'vuex'

import Sidebar from '@/components/Sidebar.vue'

export default defineComponent({
    components: { Sidebar },
    computed: {
        ...mapState('ui', ['isExpanded']),

        items() {
            return [
                {
                    section: 'Home',
                    routeName: 'index',
                    items: []
                },
                {
                    section: 'Caixa',
                    routeName: 'cash',
                    items: []
                },
                {
                    section: 'Gastos',
                    routeName: 'expenses',
                    items: [
                        {
                            name: 'Impostos',
                            icon: 'tax',
                            route: '/expenses/taxes',
                            routeName: 'expenses-taxes'
                        },
                        {
                            name: 'Funcionários',
                            // icon: 'tax',
                            route: '/expenses/employees',
                            routeName: 'expenses-employees'
                        }
                    ]
                }]
        }
    }
})
</script>

<style lang="scss">
$sidebar-transition-duration: 250ms;
$ease-in: cubic-bezier(0.445, 0.05, 0.55, 0.95) $sidebar-transition-duration;
$ease-out: cubic-bezier(0.39, 0.575, 0.565, 1) $sidebar-transition-duration;

$sidebar-width: 250px;
$sidebar-tiny-width: 72px;

html {
    font-family: 'Nunito',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: #202020;
    background-color: #f9fffb;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.main-container {
  padding: 32px 40px 32px ($sidebar-tiny-width + 32px);
  transition: $ease-out;

    &.--is-expanded {
        padding-left: ($sidebar-width + 32px);
        transition: $ease-in;
    }
    &.--is-filter-open {
        padding-right: ($sidebar-width + 32px);
    }
}

.fade-enter-active, .fade-leave-active {
    transition: .2s;
    opacity: 0;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    transition: .2s;
}
</style>
