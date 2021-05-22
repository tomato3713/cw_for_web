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
