import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/Index";
import Browse from "@/components/Browse";
import Login from "@/components/Login";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },

        {
            path: '/browse',
            name: 'Browse',
            component: Browse
        },

        {
            path: '/login',
            name: 'Login',
            component: Login
        },
    ]
})