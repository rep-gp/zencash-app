<template>
    <div :class="[{'dark': isDarkMode}]">
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
        ...mapState('ui', ['isExpanded', 'isDarkMode']),

        items() {
            return [
                {
                    section: 'Home',
                    routeName: 'index',
                    route: '/',
                    icon: 'home',
                    items: []
                },
                {
                    section: 'Caixa',
                    routeName: 'cash',
                    route: '/cash',
                    icon: 'wallet',
                    items: []
                },
                {
                    section: 'Gastos',
                    routeName: 'expenses',
                    route: '/expenses',
                    icon: 'items',
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
:root {
    --main-background: #{$main-background--light};
    --primary-text: #{$primary-text--light};
    --gray-light: #{$gray-light--light};
    --green: #{$green--light};
    --orange: #{$orange--light};
}
.dark {
    --main-background: #{$main-background--dark};
    --primary-text: #{$primary-text--dark};
    --green: #{$green--dark};
}

html {
    font-family: Barlow,
        Roboto,
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
    // color: #202020;
    // background-color: var(--main-background) !important;
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
    background-color: var(--main-background);
    color: var(--main-color);

    &.--is-expanded {
        padding-left: ($sidebar-width + 32px);
        transition: $ease-in;
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
