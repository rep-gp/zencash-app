<template>
    <div :class="['sidebar', {'--is-expanded': isExpanded}]">
        <div class="sidebar-items">
            <div class="sidebar-menu">
                <div class="sidebar-menu-toggle" @click="toggleExpand">
                    <menu-icon class="sidebar-menu-icon" />
                </div>

                <div v-if="isExpanded" class="sidebar-menu-text">
                    MENU
                </div>

                <div v-if="isExpanded" class="sidebar-menu-bulb" @click="toggleLayout">
                    <bulb-icon :class="['sidebar-menu-icon', {'--is-dark': isDarkMode}]" />
                </div>
            </div>

            <div v-if="true">
                <div v-for="(section,index) in items" :key="index">
                    <h4
                        :class="['sidebar-section-title', {'--is-active': isItemActive(section.route)}]"
                        @click="pushTo(section.routeName)"
                    >
                        {{ section.section }}
                    </h4>

                    <div v-if="section.items.length">
                        <div
                            v-for="item in section.items"
                            :key="item.route"
                            :class="['sidebar-item', {'--is-active': isItemActive(item.route)}]"
                            @click="pushTo(item.routeName)"
                        >
                            <icon :is="icons[item.icon]" v-if="item.icon" class="sidebar-item-icon" />

                            <div class="sidebar-item-name">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <user-area /> -->
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

import MenuIcon from '@/static/icons/menu.svg'
import BulbIcon from '@/static/icons/bulb.svg'
import HomeIcon from '@/static/icons/home.svg'
import TaxIcon from '@/static/icons/tax.svg'

export default defineComponent({
    components: { MenuIcon, BulbIcon },

    props: {
        items: { type: Array, default: (): [] => [] }
    },

    setup(_, { root: { $router, $accessor, $api } }) {
        const isExpanded = computed(() => $accessor.ui.isExpanded)
        const isDarkMode = computed(() => $accessor.ui.isDarkMode)

        const icons = computed(() => ({
            home: HomeIcon,
            tax: TaxIcon
        }))

        function pushTo(routeName: string) {
            $router.push({ name: routeName })
        }

        $api.listenData('/companies', (snap) => {
            const val = snap.toJSON()
            console.log(val)
        })

        return {
            icons,
            pushTo,
            isExpanded,
            isDarkMode
        }
    },

    methods: {
        toggleExpand() {
            this.$accessor.ui.setExpand(!this.isExpanded)
        },
        toggleLayout() {
            this.$accessor.ui.setDarkMode(!this.isDarkMode)
        },
        isItemActive(route: string) {
            return this.$route.path === route
        }
    }
})
</script>

<style lang="scss" scoped>
$sidebar-width: 250px;
$sidebar-tiny-width: 72px;

$sidebar-transition-duration: 250ms;
$ease-in: cubic-bezier(0.445, 0.05, 0.55, 0.95) $sidebar-transition-duration;
$ease-out: cubic-bezier(0.39, 0.575, 0.565, 1) $sidebar-transition-duration;

$sidebar-text-color: #abd6ab;

.sidebar {
    border-radius: 0 20px 20px 0;
    padding: 16px;
    color: $sidebar-text-color;
    width: $sidebar-tiny-width;
    height: 100vh;
    position: fixed;
    z-index: 999;
    background-color: rgb(74, 116, 88);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.349);
    transition: $ease-out;
    cursor: initial;

    &-items {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .sidebar-menu {
            &-toggle {
                display: grid;
                place-items: center;
            }
            &-icon {
                min-width: 20px !important;
                width: 20px !important;
                height: 20px;
                margin-left: 2px;
                fill: $sidebar-text-color;
                fill-rule: evenodd;
                clip-rule: evenodd;
                cursor: pointer;

                &.--is-dark {
                    fill-rule: initial;
                    clip-rule: initial;
                }
            }
        }

        .sidebar-section-title {
            font-weight: 800px;
            font-size: 18px;
            // margin-bottom: 16px;
            margin: 32px 0 16px;
            opacity: 0;
            transition: $ease-out;
            overflow: hidden;
            // max-height: 24px;
            padding: 8px;
            overflow: hidden;
            border-radius: 4px;
            cursor: pointer;

            &.--is-active {
                background-color: #000;//$sidebar-select;
            }

            &:hover {
                background-color: rgb(46, 83, 46);
            }
        }

        .sidebar-item {
            display: flex;
            margin-top: 4px;
            align-items: center;
            padding: 8px;
            overflow: hidden;
            border-radius: 4px;
            cursor: pointer;
            transition: 0.2s;

            &:hover {
                background-color: rgb(46, 83, 46);
            }

            &-icon {
                min-width: 20px !important;
                width: 20px !important;
                height: 20px;
                margin-left: 2px;
                fill: #fff;
                stroke: #fff;
                fill-rule: evenodd;
                clip-rule: evenodd;
            }

            &-name {
                padding-left: 16px;
                opacity: 0;
                max-height: 22px;
                overflow: hidden;
                color: #fff;
            }

            &.--is-active {
                background-color: #000;//$sidebar-select;
            }

            &:hover {
                // background-color: $sidebar-select-hover;
                transition: 0.2s;
            }
        }

        .sidebar-language {
            justify-content: center;
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

            // &-bulb, &-text {
                // opacity: 1;  visibility: vi/sible;
                // transition: $ease-in 0.6s;
            // }
        }

        .sidebar-item-name {
            max-height: 44px;
            opacity: 1;
            transition: $ease-in 0.16s;
        }
    }
}
</style>
