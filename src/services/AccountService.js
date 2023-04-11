import http from "../common"

class AccountService{
    login(data) {
        return http.post("/account/login", data)
    }

    register(data) {
        return http.post("/account/register", data)
    }

    // forget(data) {
    //     return http.post("/account/forget", data)
    // }
}

export default new AccountService();