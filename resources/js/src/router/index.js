import Vue from 'vue';
import VueRouter from 'vue-router';

//components
import NotFound from '@/views/Notfound.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: () => import("@/views/Dashboard.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () => import("@/views/Register.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/Login.vue")
        },
        {
            path: "/admindashboard",
            name: "admindashboard",
            component: () => import("@/views/AdminDashboard.vue")
        },
        {
            path: "*",
            name: "notFound",
            component: () => import("@/views/Notfound.vue")
        }

    ]
});

export default router;