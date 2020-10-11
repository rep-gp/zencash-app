<template>
    <div :class="['sidebar', {'--is-expanded': isExpanded}]">
        <div class="sidebar-items">
            <div class="sidebar-menu">
                <div class="sidebar-menu-toggle" @click="toggleExpand">
                    <menu-icon class="sidebar-menu-toggle-icon" />
                </div>

                <div v-if="isExpanded" class="sidebar-menu-text">
                    MENU
                </div>

                <div v-if="isExpanded" class="sidebar-menu-bulb" @click="toggleLayout">
                    bulb
                </div>
            </div>

            <div v-if="true">
                <div v-for="(section,index) in items" :key="index">
                    <h4 v-if="section.items.length" class="sidebar-section-title">
                        {{ section.section }}
                    </h4>

                    <div
                        v-for="item in section.items"
                        :key="item.route"
                        :class="['sidebar-item', {'--is-active': isItemActive(item.route)}]"
                        @click="pushTo(item.routeName, item.name)"
                    >
                        <!-- <icon :is="icons[item.icon]" v-if="item.icon" class="sidebar-item-icon" /> -->

                        <div class="sidebar-item-name">
                            {{ item.name }}
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
import HomeIcon from '@/static/icons/home.svg'

export default defineComponent({
    components: { MenuIcon },

    props: {
        items: { type: Array, default: (): [] => [] }
    },

    setup(_, { root: { $router, $accessor, $api } }) {
        const isExpanded = computed(() => $accessor.ui.isExpanded)

        const icons = computed(() => ({
            home: HomeIcon
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
            isExpanded
            // toggleExpand
        }
    },

    methods: {
        toggleExpand() {
            // this.$accessor.ui.setExpand(!this.isExpanded)
        },
        toggleLayout() {
            console.log('THEME')
        },
        isItemActive(route: string) {
            return this.$route.path.includes(route)
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

.sidebar {
    padding: 16px;
    color: #abd6ab;
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
            // display: flex;
            // justify-content: center;

            // &-bulb, &-text { opacity: 0; visibility: hidden; }

            &-toggle {
                cursor: pointer;

                &-icon {
                    border: 1px solid red;
                    min-width: 20px !important;
                    width: 20px !important;
                    height: 20px;
                    margin-left: 2px;
                    fill: #fff;
                    stroke: #fff;
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                }
            }
        }

        .sidebar-section-title {
            font-weight: 800px;
            font-size: 18px;
            margin-bottom: 16px;
            margin-top: 32px;
            opacity: 0;
            transition: $ease-out;
            overflow: hidden;
            max-height: 24px;
        }

        .sidebar-item {
            display: flex;
            margin-bottom: 4px;
            align-items: center;
            padding: 8px;
            overflow: hidden;
            border-radius: 4px;
            cursor: pointer;
            transition: 0.2s;

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
