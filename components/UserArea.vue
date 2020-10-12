<template>
    <div :key="token" class="sidebar-login">
        <div v-if="!token">
            <form @submit.prevent="onLogin">
                <div class="field">
                    <label>Email</label>
                    <input
                        v-model="email"
                        class="login-input"
                        type="text"
                        @keyup.enter="onLogin"
                    >
                </div>

                <div class="field">
                    <label>Senha</label>
                    <input
                        v-model="password"
                        class="login-input"
                        type="password"
                        @keyup.enter="onLogin"
                    >
                </div>

                <SolidButton class="user-submit" @click="onLogin">
                    Login
                </SolidButton>
            </form>
        </div>

        <div v-else>
            <flat-button class="user-submit" @click="onLogout">
                Logout
            </flat-button>
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
            this.$router.push('/home')
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
    .field {
        label {
            display: block;
            font-weight: bold;
            color: #666;
            margin-bottom: 10px;
        }
        select, input {
            display: block;
            border: 2px solid var(--green);
            padding: 12px 18px;
            font-size: 13pt;
            font-weight: bold;
            font-family: Barlow;
            border-radius: 4px;
            width: 100%;
        }
    }
    .user-submit {
        margin-top: 10px;
        width: 100%;
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
