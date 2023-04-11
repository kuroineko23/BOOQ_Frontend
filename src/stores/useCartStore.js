import { defineStore } from "pinia";

export const useAccountStore = defineStore('cart', {
    state: () => ({
        book: [],
    }),
    actions: {
        add(data) {
            var index = this.book.indexOf((x => x.uuid == data.uuid));
            if(index > -1) {
                this.book[index].data.qty++;
            } else {
                this.book.push(data)
            }
        },
        delete(data) {
            var index = this.book.indexOf(data);
            if(index > -1) {
                this.book.splice(index, 1);
            }
        },
        update(data){
            var index = this.book.indexOf((x => x.uuid == data.uuid));
            if(index > -1) {
                this.book[index] = data;
            }
        }
    }
})