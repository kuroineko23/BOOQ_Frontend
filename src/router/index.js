import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Index",
            component: () => import("../views/IndexView.vue"),
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("../views/LoginView.vue"),
        },
        {
            path: "/register",
            name: "Register",
            component: () => import("../views/RegisterView.vue"),
        },
        {
            path: "/category",
            name: "Category",
            component: () => import("../views/CategoryView.vue"),
        },
    ],
});

export default router;

