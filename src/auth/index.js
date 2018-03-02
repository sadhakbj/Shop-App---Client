import axios from "axios";
const LOGIN_URL = "http://localhost:8081/users/login";
const SIGNUP_URL = "http://localhost:8081/users/signup";

export default {
    user: {
        authenticated: false
    },
    /**
     *
     * @param {*} context
     * @param {*} credentials
     * @param {*} redirect
     */
    login(context, credentials, redirect) {
        axios
            .post(LOGIN_URL, credentials, {
                headers: { "Content-type": "application/json" }
            })
            .then(response => {
                const userToken = response.data.token;
                context.variant = "success";
                context.message = response.data.message;
                localStorage.setItem("access_token", userToken);
                this.user.authenticated = true;
                context.$router.go(redirect);
            })
            .catch(error => {
                context.variant = "danger";
                context.message = error.response.data.message;
            });
    },
    /**
     *
     * @param {*} context
     * @param {*} creds
     * @param {*} redirect
     */
    signup(context, creds, redirect) {
        axios
            .post(SIGNUP_URL, credentials, response => {
                localStorage.setItem("access_token", response.data.token);

                this.user.authenticated = true;
                if (redirect) {
                    $router.push(redirect);
                }
            })
            .error(err => {
                context.error = err;
            });
    },

    logout(context) {
        localStorage.removeItem("access_token");
        this.user.authenticated = false;
        context.$router.go('/');
    },
    checkAuth() {
        let token = localStorage.getItem("access_token");
        if (token) {
            this.user.authenticated = true;
        } else {
            this.user.authenticated = false;
        }
    },
    getAuthHeader() {
        return {
            Authorization: "Bearer" + localStorage.getItem("access_token")
        };
    }
};