<script setup>
import { RouterLink } from "vue-router"
</script>

<script>
//https://www.bezkoder.com/vue-3-crud/#Run_Vuejs_3_CRUD_example
import AccountService from "../services/AccountService";

export default {
    name: "register",
    data() {
        return {
            accountRequest: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        register() {
            var data = {
                email: this.email,
                password: this.password
            }

            AccountService.register(data).then(res => {
                alert(res.data)
                this.$router.push('/login')
            }).catch(e => {
                alert(e.response.data)
            })
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <form @submit.prevent="register"> <!--https://stackoverflow.com/a/56018317-->
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model=email required>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model=password required>
            </div>
            <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" v-model=confirmPassword required>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary w-100">Register</button>
            </div>
            <div class="mb-3">
                <RouterLink to="/login" v-slot="{ navigate }">
                    <button @click="navigate" class="btn btn-secondary w-100">Login</button>
                </RouterLink>
            </div>
        </form>
    </div>
</template>