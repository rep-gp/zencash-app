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
                },
                {
                    section: 'Configurações',
                    routeName: 'configuration',
                    route: '/configuration',
                    icon: 'config',
                    items: []
                }]
        }
    }
})
</script>

<style lang="scss">
:root {
    --main-color: #{$main-color--light};
    --primary-text: #{$primary-text--light};
    --gray: #{$gray--light};
    --green: #{$green--light};
    --orange: #{$orange--light};

    // background
    --main-background: #{$main-background--light};
    --secondary-background: #{$secondary-background--light};
    --tertiary-background: #{$tertiary-background--light};

    // sidebar light colors
    --sidebar-background: #{$sidebar-background--light};
    --sidebar-item: #{$sidebar-item--light};
    --sidebar-section: #{$sidebar-section--light};
    --sidebar-hover: #{$sidebar-hover--light};
    --sidebar-selected: #{$sidebar-selected--light};
}
.dark {
    --main-color: #{$main-color--dark};
    --primary-text: #{$main-text--dark};

    // background
    --main-background: #{$main-background--dark};
    --secondary-background: #{$secondary-background--dark};
    --tertiary-background: #{$tertiary-background--dark};

    // sidebar dark colors
    --sidebar-background: #{$sidebar-background--dark};
    --sidebar-item: #{$sidebar-item--dark};
    --sidebar-section: #{$sidebar-section--dark};
    --sidebar-hover: #{$sidebar-hover--dark};
    --sidebar-selected: #{$sidebar-selected--dark};
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
    padding: 60px;
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
