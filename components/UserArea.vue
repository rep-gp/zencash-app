<template>
    <div :key="token" class="sidebar-login">
        <div v-if="!token">
            <form @submit.prevent="onLogin">
                <input
                    v-model="email"
                    class="login-input"
                    placeholder="Email"
                    type="text"
                    @keyup.enter="onLogin"
                >

                <input
                    v-model="password"
                    class="login-input"
                    placeholder="Password"
                    type="password"
                    @keyup.enter="onLogin"
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
import { mapActions } from 'vuex'
import { defineComponent } from '@vue/composition-api'
// import { AuthService } from '@/service/AuthService'

export default defineComponent({
    data: () => ({
        email: '',
        password: ''
    }),

    methods: {
        ...mapActions('auth', ['login', 'logout']),
        async onLogin () {
            const { email, password } = this

            await this.login({ email, password })
            this.checkUser()
        },
        async onLogout () {
            console.log('logout')
            await this.logout()
            this.checkUser()
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
