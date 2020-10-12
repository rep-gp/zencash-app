<template>
    <div class="sidebar-login">
        <form @submit.prevent="login">
            <input
                v-model="email"
                class="login-input"
                placeholder="Email"
                type="text"
            >

            <input
                v-model="password"
                class="login-input"
                placeholder="password"
                type="password"
            >

            <flat-button :loading="loading" class="user-submit">
                {{ $t('userArea.login') }}
            </flat-button>
        </form>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'

const { useActions: authActions } = createNamespacedHelpers('auth')

export default defineComponent({
    setup() {
        const { login } = authActions(['login'])

        return {
            login,
            email: '',
            password: ''
        }
    },
     method: {
        async login () {
            const { email, password } = this

            await this.login({ email, password })
        },
        logout () {
            this.$router.push('/')
        }
     }
})

</script>

<style lang="scss" scoped>
.sidebar-login {
    & > .btn {
        border: 1px solid red;
        height: 20px;
    }
}
</style>
