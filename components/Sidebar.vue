<template>
    <div :key="token" :class="['sidebar', {'--is-expanded': isExpanded}]">
        <div class="sidebar-arrow" @click="toggleExpand">
            <arrow-icon :class="['sidebar-arrow-icon', {'--left': isExpanded}]" />
        </div>
        <div class="sidebar-items">
            <div class="sidebar-logo">
                <img v-if="isExpanded" src="@/static/logo.png" alt="ZenCash Logo" class="sidebar-logo-img">
                <img v-else src="@/static/icon.png" alt="ZenCash Icon" class="sidebar-logo-icon">
            </div>

            <div v-if="token">
                <div v-for="(section,index) in items" :key="index">
                    <h4
                        :class="['sidebar-section', {'--is-active': isItemActive(section.route)}]"
                        @click="pushTo(section.routeName)"
                    >
                        <div v-if="isExpanded" class="sidebar-section-title">
                            {{ section.section }}
                        </div>

                        <icon
                            :is="icons[section.icon]"
                            v-if="section.icon"
                            class="sidebar-section-icon"
                        />
                    </h4>

                    <div v-if="section.items.length">
                        <div
                            v-for="item in section.items"
                            :key="item.route"
                            :class="['sidebar-item', {'--is-active': isItemActive(item.route)}]"
                            @click="pushTo(item.routeName)"
                        >
                            <div v-if="isExpanded" class="sidebar-item-name">
                                {{ item.name }}
                            </div>

                            <icon :is="icons[item.icon]" v-if="item.icon" class="sidebar-item-icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="token" class="theme" @click="changeTheme">
                <div v-if="isExpanded" class="theme-text">
                    {{ darkText }}
                </div>
                <icon :is="darkIcon" class="theme-icon" />
            </div>
            <user-area :class="['user', {'--no-user': !token}]" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'

import ArrowIcon from '@/static/icons/arrow-right.svg'
import MoonIcon from '@/static/icons/moon.svg'
import SunIcon from '@/static/icons/sun.svg'
import MenuIcon from '@/static/icons/menu.svg'
import BulbIcon from '@/static/icons/bulb.svg'
import HomeIcon from '@/static/icons/home.svg'
import PeopleIcon from '@/static/icons/people.svg'
import TaxIcon from '@/static/icons/tax.svg'
import ItemsIcon from '@/static/icons/items.svg'
import WalletIcon from '@/static/icons/wallet.svg'
import MoneyIcon from '@/static/icons/monetization.svg'
import ConfigIcon from '@/static/icons/config.svg'

const { useActions: uiActions } = createNamespacedHelpers('ui')

export default defineComponent({
    components: { MenuIcon, BulbIcon, ArrowIcon },

    props: {
        items: { type: Array, default: (): [] => [] }
    },

    setup (_, { root: { $router, $accessor } }) {
        const isExpanded = computed(() => $accessor.ui.isExpanded)
        const isDarkMode = computed(() => $accessor.ui.isDarkMode)

        const darkText = computed(() => isDarkMode.value ? 'Modo claro' : 'Modo escuro')
        const darkIcon = computed(() => isDarkMode.value ? SunIcon : MoonIcon)

        const { setDarkMode, setExpand } = uiActions(['setDarkMode', 'setExpand'])

        const icons = computed(() => ({
            home: HomeIcon,
            tax: TaxIcon,
            wallet: WalletIcon,
            items: ItemsIcon,
            people: PeopleIcon,
            money: MoneyIcon,
            config: ConfigIcon
        }))

        function pushTo (routeName: string) {
            $router.push({ name: routeName })
        }

        function toggleExpand () {
            setExpand(!isExpanded.value)
        }
        function changeTheme () {
            setDarkMode(!isDarkMode.value)
        }

        return {
            icons,
            pushTo,
            isExpanded,
            toggleExpand,
            changeTheme,
            isDarkMode,
            darkText,
            darkIcon
        }
    },

    methods: {
        isItemActive (route: string) {
            return this.$route.path === route
        }
    }
})
</script>

<style lang="scss" scoped>
.sidebar {
    color: var(--primary-text);
    width: $sidebar-tiny-width;
    height: 100vh;
    position: fixed;
    z-index: 999;
    background: var(--primary-background);
    border-right: 1px solid var(--green);
    transition: $ease-out;
    cursor: initial;

    &-arrow {
        transition: $ease-in;
        position: absolute;
        border-radius: 0 10px 10px 0;
        background: var(--green);
        color: var(--primary-background);
        font-weight: 900;
        top: 60px; left: $sidebar-tiny-width;
        width: 20px;
        height: 66px;
        cursor: pointer;
        padding: 20px 0;

        &-icon {
            height: 20px;
            fill: var(--primary-background);
            margin: 2px;
            padding-left: 2px;

            &.--left {
                padding-left: 4px;
                transition: $ease-in;
                transform: rotate(.5turn);
            }
        }
    }

    &-items {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 0 20px;

        .sidebar-logo {
            min-height: 70px;
            margin: 60px auto;
            display: grid;
            place-items: center;

            &-img {
                width: 85%;
                transition: $ease-in;
            }

            &-icon {
                object-fit: contain;
                height: 50px;
                width: 50px;
                transition: $ease-in;
            }
        }

        .sidebar-item, .sidebar-section {
            padding: 8px;
            font-weight: 800px;
            font-size: 20px;
            opacity: .6;
            cursor: pointer;

            display: flex;
            justify-content: space-between;
            align-items: center;

            &:hover {
                opacity: 1;
            }

            &.--is-active {
                opacity: 1;
            }
        }

        .sidebar-section {
            margin: 32px 0 16px;
            transition: $ease-out;

            &-title {
                opacity: 0;
            }

            &-icon {
                width: 26px;
                height: 26px;
                fill: var(--green);
                fill-rule: evenodd;
                clip-rule: evenodd;
            }
        }

        .sidebar-item {
            margin: 8px 0;

            &-icon {
                width: 28px;
                height: 28px;
                fill: var(--green);
                fill-rule: evenodd;
                clip-rule: evenodd;
            }

            &-name {
                font-weight: 800;
                padding-left: 10px;
                opacity: 0;
            }
        }

        .theme {
            margin-top: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px;
            opacity: .6;
            cursor: pointer;

            &:hover {
                opacity: 1;
            }

            &-text {
                font-weight: 800px;
                font-size: 20px;
            }

            &-icon {
                width: 20px;
                fill: var(--primary-color);
                // stroke: var(--green);
            }
        }

        .user {
            visibility: hidden;
            margin-bottom: 40px;
            margin-top: auto;

            &.--no-user {
                margin-top: 40px;
            }
        }
    }

    &.--is-expanded {
        width: $sidebar-width;
        transition: $ease-in;

        .sidebar-item, .sidebar-section {
            padding: 8px 20px;
        }

        .sidebar-arrow {
            left: $sidebar-width;
            transition: $ease-in;
        }

        .sidebar-section-title {
            opacity: 1;
            transition: $ease-in 0.12s;
        }

        .sidebar-menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .sidebar-item-name {
            opacity: 1;
            max-height: 44px;
            transition: $ease-in 0.16s;
        }

        .theme {
            padding: 8px 20px;
            transition: $ease-in;
        }

        .user {
            transition: $ease-in;
            visibility: visible;
        }
    }
}
</style>
