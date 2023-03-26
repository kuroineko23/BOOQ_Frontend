<script setup>
import { RouterView } from "vue-router"
</script>

<template>
    <div id="nav">
        <div class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-brand">
                    <RouterLink to="/" class="navbar-brand">Home</RouterLink>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink to="/login" class="nav-link">Login</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/register" class="nav-link">Register</RouterLink>
                        </li>
                    </ul>
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
