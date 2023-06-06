import http from "../common"

class CategoryService{
    get() {
        return http.get("/category", data)
    }
}

export default new CategoryService();