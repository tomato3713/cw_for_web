const profile = new Vue({
    el: '#profile',
    data: {
        user: ''
    },
    methods: {
        getToken() {
            return localStorage.getItem('token')
        },
        logout() {
            localStorage.removeItem('token')
            location.href = '/'
        },
        random_message() {
            const msg = [
                "Let's do our best today.",
                "Sometimes breaks are important.",
                "It's important to continue.",
            ];
            return msg[Math.floor(Math.random() * msg.length)];
        },
    },
    created() {
        const date = new Date()
        const claims = JSON.parse(atob(this.getToken().split('.')[1]))
        this.user = claims.name
        if(claims.exp < Math.floor(date.getTime() / 1000)) {
            this.logout()
        } else {
            ;
        }
    },
})
