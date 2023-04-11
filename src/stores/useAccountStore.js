import { defineStore } from "pinia";
import AccountService from "../services/AccountService";

export const useAccountStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    actions: {
        login(data) {
            this.user = data
        },
        logout() {
            this.user = null;
        }
    }
})