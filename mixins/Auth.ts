import { defineComponent } from '@vue/composition-api'
import { AuthService } from '@/service/AuthService'

export default defineComponent({
    computed: {
        token() {
            return this.$ls.get('token')
        }
    },
    methods: {
        checkUser() {
            this.$api.auth.onAuthStateChanged((user) => {
                if (user) {
                    AuthService.setUser(user)
                    this.$ls.set('token', user.uid)
                    console.log('on by auth')
                } else {
                    AuthService.setUser(null)
                    this.$ls.set('token', '')
                }
            })

            this.$ls.on('token', (newToken: any) => {
                if (newToken !== this.token) {
                    window.location.reload()
                    console.log('reload')
                }
            })
        }
    }

})
