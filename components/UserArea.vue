<template>
    <div class="sidebar-login">
        {{ user }}
        <div v-if="!user">
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
                    placeholder="Password"
                    type="password"
                >

                <btn class="user-submit" @click="onLogin">
                    Login
                </btn>

            </form>
        </div>

        <div v-else>
            <btn class="user-submit" @click="onLogout">
                Logout
            </btn>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    copmputed: {
        ...mapState('auth', ['user'])
    },

    data: () => ({
        email: '',
        password: ''
    }),

    methods: {
        ...mapActions('auth', ['login', 'logout']),
        onLogin() {
            const { email, password } = this

            this.login({ email, password })
        },
        onLogout() {
            this.logout()
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
    .login-input {
        padding: 6px 0;
        width: 100%;
        margin-bottom: 10px;
        outline: none;
        border: 0;
        border-bottom: 1px solid var(--gray);

        &:focus { border-bottom: 1px solid rgb(144, 144, 144); }
    }
}
</style>
