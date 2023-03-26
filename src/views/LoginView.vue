<script setup>
import { RouterLink } from "vue-router"
</script>

<script>
//https://www.bezkoder.com/vue-3-crud/#Run_Vuejs_3_CRUD_example
import AccountService from "../services/AccountService";

export default {
    name: "login",
    data() {
        return {
            accountRequest: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            var data = {
                email: this.email,
                password: this.password
            }

            AccountService.login(data).then(res => {
                alert(res.data.email)
                this.$router.push('/')
            }).catch(e => {
                alert(e.response.data)
            })
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <form @submit.prevent="login"> <!--https://stackoverflow.com/a/56018317-->
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model=email required>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model=password required>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </div>
            <div class="mb-3">
                <RouterLink to="/register" v-slot="{ navigate }">
                    <button @click="navigate" class="btn btn-secondary w-100">Register</button>
                </RouterLink>
            </div>
            <div>
                <RouterLink to="/forget">Forget Password?</RouterLink>
            </div>
        </form>
    </div>
</template>