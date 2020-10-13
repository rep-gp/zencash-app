<template>
    <div :class="[{'dark': isDarkMode}]">
        <sidebar :items="items" />

        <div v-if="token">
            <div :class="['main-container', {'--is-expanded': isExpanded}]">
                <nuxt />
            </div>
        </div>

        <div v-else class="error">
            <div class="unauthorized">
                401
                <div class="unauthorized-text">
                    Unauthorized
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { defineComponent } from '@vue/composition-api'

import { AuthService } from '@/service/AuthService'

export default defineComponent({
    asyncData ({ $api }) {
        $api.auth.onAuthStateChanged((user) => {
            if (user) {
                AuthService.setUser(user)
                this.$ls.set('token', user.uid)
            } else {
                AuthService.setUser(null)
                this.$ls.set('token', '')
                this.$router.push('/')
            }
        })
    },

    computed: {
        ...mapState('ui', ['isExpanded', 'isDarkMode']),
        items () {
            return [
                {
                    section: 'Home',
                    routeName: 'home',
                    route: '/home',
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
                            icon: 'people',
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
                }
            ]
        }
    }
})
</script>

<style lang="scss">
:root {
    --primary-text: #{$primary-text--light};
    --secundary-text: #{$secundary-text--light};
    --tertiary-color: #{$tertiary-color--light};
    --gray: #{$gray--light};
    --green: #{$green--light};
    --orange: #{$orange--light};

    // background
    --primary-background: #{$primary-background--light};
    --secondary-background: #{$secondary-background--light};
    --tertiary-background: #{$tertiary-background--light};
}
.dark {
    --primary-text: #{$primary-text--dark};
    --gray: #{$gray--dark};
    --green: #{$green--dark};
    --orange: #{$orange--dark};

    // background
    --primary-background: #{$primary-background--dark};
    --secondary-background: #{$secondary-background--dark};
    --tertiary-background: #{$tertiary-background--dark};
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
    // background-color: var(--primary-background) !important;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.main-container {
    padding: 60px;
    padding-left: ($sidebar-tiny-width + 40px);
    transition: $ease-out;
    background-color: var(--primary-background);
    color: var(--main-color);

    &.--is-expanded {
        padding-left: ($sidebar-width + 40px);
        transition: $ease-in;
    }

    h1 {
        color: #555;
        margin-bottom: 30px;
        font-weight: 900;
    }
}

.error {
    height: 80vh;
    display: grid;
    place-items: center;

    .unauthorized {
        font-size: 8vw;
        text-align: center;
        color: var(--green);
        font-weight: 800;

        &-text {
            font-size: 2vw;
        }
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
