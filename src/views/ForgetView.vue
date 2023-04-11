<script setup>
import { RouterLink } from "vue-router"
</script>

<script>
//https://www.bezkoder.com/vue-3-crud/#Run_Vuejs_3_CRUD_example
import AccountService from "../services/AccountService";

export default {
    name: "forget",
    data() {
        return {
            accountRequest: {
                email: ""
            }
        }
    },
    methods: {
        forget() {
            var data = {
                email: this.email
            }

            AccountService.forget(data).then(res => {
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
        <form @submit.prevent="forget"> <!--https://stackoverflow.com/a/56018317-->
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model=email required>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary w-100">Reset Password</button>
            </div>
            <div class="mb-3">
                <RouterLink to="/login" v-slot="{ navigate }">
                    <button @click="navigate" class="btn btn-secondary w-100">Login</button>
                </RouterLink>
            </div>
        </form>
    </div>
</template>