import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import ViewProduct from "@/components/ViewProduct"
import Login from "@/components/Login"
import Admin from "@/components/Admin"

import auth from '../auth/index'

Vue.use(Router);

let router = new Router({
    routes: [{
            path: "/",
            name: "HelloWorld",
            component: HelloWorld
        },
        {
            path: "/product/:productId",
            name: "view-product",
            component: ViewProduct,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/admin",
            name: "admin",
            component: Login,
            meta: {
                requiresAuth: true
            }
        }
    ],
})

router.beforeEach((to, from, next) => {
    let userLoggedIn = auth.user.authenticated
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && !userLoggedIn) next('login')
    else if (!requiresAuth && userLoggedIn) next('admin')
    else next()
});

export default router