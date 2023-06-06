<script setup>
import { RouterView } from "vue-router"
import { useAccountStore } from "./stores/useAccountStore";
const accountStore = useAccountStore()
</script>

<template>
    <div id="nav">
        <div class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-brand">
                    <RouterLink to="/" class="navbar-brand">BOOQ</RouterLink>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="d-flex">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item" v-if="accountStore.user">
                                <RouterLink to="/cart" class="nav-link"><i class="bi bi-cart"></i> Cart</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/category" class="nav-link">Category</RouterLink>
                            </li>
                            <li class="nav-item" v-if="!accountStore.user">
                                <RouterLink to="/login" class="nav-link">Login</RouterLink>
                            </li>
                            <li class="nav-item" v-if="!accountStore.user">
                                <RouterLink to="/register" class="nav-link">Register</RouterLink>
                            </li>
                            <li class="nav-item" v-if="accountStore.user">
                                <RouterLink to="/logout" class="nav-link">Logout</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="main">
        <div id="content">
            <RouterView />
        </div>
    </div>
</template>
