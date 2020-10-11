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
                        :class="['sidebar-section', {'--is-active': isItemActive(section.route)}]"
                        @click="pushTo(section.routeName)"
                    >
                        <icon :is="icons[section.icon]" v-if="section.icon" class="sidebar-section-icon" />

                        <div class="sidebar-section-title">
                            {{ section.section }}
                        </div>
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
.sidebar {
    border-radius: 0 20px 20px 0;
    color: var(--sidebar-section);
    width: $sidebar-tiny-width;
    height: 100vh;
    position: fixed;
    z-index: 999;
    background-color: var(--sidebar-background);
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.349);
    transition: $ease-out;
    cursor: initial;

    &-items {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .sidebar-menu {
            padding: 16px;
            height: 60px;

            &-toggle {
                display: grid;
                place-items: center;
            }

            &-icon {
                min-width: 20px !important;
                width: 20px !important;
                height: 20px;
                margin-left: 2px;
                fill: var(--sidebar-section);
                fill-rule: evenodd;
                clip-rule: evenodd;
                cursor: pointer;

                &.--is-dark {
                    fill-rule: initial;
                    clip-rule: initial;
                }
            }
        }

        .sidebar-section {
            font-weight: 800px;
            font-size: 20px;
            margin: 32px 0 16px;
            transition: $ease-out;
            padding: 8px 20px;
            display: flex;
            align-items: center;
            cursor: pointer;

            &-title {
                padding-left: 16px;
                opacity: 0;
                color: var(--sidebar-item);
            }

            &-icon {
                min-width: 20px !important;
                width: 20px !important;
                height: 20px;
                fill: var(--sidebar-item);
                stroke: var(--sidebar-item);
                fill-rule: evenodd;
                clip-rule: evenodd;
            }
        }

        .sidebar-item, .sidebar-section {
            &:hover {
                background-color: var(--sidebar-hover);
            }

            &.--is-active {
                color: #fff;
                background-color: var(--sidebar-selected);
                border-left: 3px solid #fff;
            }
        }

        .sidebar-item {
            display: flex;
            margin-top: 4px;
            align-items: center;
            padding: 8px 30px;
            overflow: hidden;
            cursor: pointer;
            transition: 0.2s;

            &-icon {
                min-width: 20px !important;
                width: 20px !important;
                height: 20px;
                margin-left: 2px;
                fill: var(--sidebar-item);
                stroke: var(--sidebar-item);
                fill-rule: evenodd;
                clip-rule: evenodd;
            }

            &-name {
                padding-left: 16px;
                opacity: 0;
                max-height: 22px;
                color: var(--sidebar-item);
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
