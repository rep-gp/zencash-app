<template>
    <div :class="['sidebar', {'--is-expanded': isExpanded}]">
        <div class="sidebar-items">
            <div class="sidebar-logo" @click="onLogoClick">
                <img src="@/static/logo.png" alt="ZenCash Logo" class="sidebar-logo-img">
            </div>

            <div v-if="true">
                <div v-for="(section,index) in items" :key="index">
                    <h4
                        :class="['sidebar-section', {'--is-active': isItemActive(section.route)}]"
                        @click="pushTo(section.routeName)"
                    >
                        <div class="sidebar-section-title">
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
                            <div class="sidebar-item-name">
                                {{ item.name }}
                            </div>

                            <icon :is="icons[item.icon]" v-if="item.icon" class="sidebar-item-icon" />
                        </div>
                    </div>
                </div>
            </div>

            <login />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'

import MenuIcon from '@/static/icons/menu.svg'
import BulbIcon from '@/static/icons/bulb.svg'
import HomeIcon from '@/static/icons/home.svg'
import TaxIcon from '@/static/icons/tax.svg'
import ItemsIcon from '@/static/icons/items.svg'
import WalletIcon from '@/static/icons/wallet.svg'
import MoneyIcon from '@/static/icons/monetization.svg'

const { useActions: uiActions } = createNamespacedHelpers('ui')

export default defineComponent({
    components: { MenuIcon, BulbIcon },

    props: {
        items: { type: Array, default: (): [] => [] }
    },

    setup(_, { root: { $router, $accessor } }) {
        const isExpanded = computed(() => $accessor.ui.isExpanded)
        const isDarkMode = computed(() => $accessor.ui.isDarkMode)
        const { setDarkMode, setExpand } = uiActions(['setDarkMode', 'setExpand'])

        const icons = computed(() => ({
            home: HomeIcon,
            tax: TaxIcon,
            wallet: WalletIcon,
            items: ItemsIcon,
            money: MoneyIcon
        }))

        function pushTo(routeName: string) {
            $router.push({ name: routeName })
        }

        function toggleExpand() {
            setExpand(!isExpanded.value)
        }
        function changeTheme() {
            setDarkMode(!isDarkMode.value)
        }

        return {
            icons,
            pushTo,
            isExpanded,
            toggleExpand,
            changeTheme,
            isDarkMode
        }
    },

    methods: {
        isItemActive(route: string) {
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
    background: var(--main-background);
    border-right: 3px solid var(--green);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.349);
    transition: $ease-out;
    cursor: initial;

    &-items {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 0 14px;

        .sidebar-logo {
            width: 100%;
            margin: 30px 0 100px;
            display: grid;
            place-items: center;

            &-img {
                width: 85%;
            }
        }

        .sidebar-item, .sidebar-section {
            font-weight: 800px;
            font-size: 20px;
            padding: 8px 20px;
            opacity: .6;
            cursor: pointer;

            display: flex;
            justify-content: space-between;
            align-items: center;

            &:hover {
                opacity: 1;
                box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
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
                font-weight: 600;
                padding-left: 10px;
                opacity: 0;
            }
        }
    }

    &.--is-expanded {
        width: $sidebar-width;
        transition: $ease-in;

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
    }
}
</style>
