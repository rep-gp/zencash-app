export class AuthService {
    public static user: firebase.User | null

    public static setUser (user: firebase.User | null) {
        AuthService.user = user
    }
}
