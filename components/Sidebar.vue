<template>
    <div :class="['sidebar', {'--is-expanded': isExpanded}]">
        <div class="sidebar-items">
            <div class="sidebar-menu">
                <div class="sidebar-menu-toggle" @click="toggleExpand">
                    3
                </div>
                MENU
                <div class="sidebar-menu-toggle" @click="toggleLayout">
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
import { mapState, mapActions } from 'vuex'
import { defineComponent } from '@vue/composition-api'

import HomeIcon from '@/static/icons/home.svg'

export default defineComponent({
    props: {
        items: { type: Array, default: (): [] => [] }
    },

    computed: {
        ...mapState('ui', ['isExpanded']),
        icons () {
            return {
                // tag: TagIcon,
                // badge: BadgeIcon,
                // setup: SetupIcon,
                // cart: CartIcon,
                // comment: CommentIcon,
                // hash: HashIcon,
                home: HomeIcon
            }
        }
    },

    methods: {
        ...mapActions('ui', ['setExpand']),
        toggleExpand () {
            console.log(this.isExpanded, '@@@@@')
            // this.setExpand(!this.isExpanded.value)
        },
        toggleLayout () {
            console.log('THEME')
        },
        isItemActive (route: string) {
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
    background-color: #fff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.349);
    transition: $ease-out;
    cursor: initial;

    &-items {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .sidebar-menu {
            display: flex;
            justify-content: space-between;

            &-toggle {
                cursor: pointer;

                // &-icon {
                //     object-fit: contain;
                //     height: 50%;
                //     margin-top: 16px;
                //     transition: $ease-in;
                // }
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

        .sidebar-item-name {
            max-height: 44px;
            opacity: 1;
            transition: $ease-in 0.16s;
        }
    }
}
</style>
