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
            name: "hello",
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
            component: Login,
            meta: {
                redirectIfLogged: true
            }
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin,
            meta: {
                requiresAuth: true
            }
        }
    ],
    mode: 'history'
})

/**
 * Check for each router if it is logged in or not.
 */
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.checkAuth()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.redirectIfLogged)) {
        if (auth.checkAuth()) {
            next({
                path: '/'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router