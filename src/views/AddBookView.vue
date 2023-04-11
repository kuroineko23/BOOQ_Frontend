<script>
import { useAccountStore } from '../stores/useAccountStore';

export default {
    setup() {
        const accountStore = useAccountStore();
        return { accountStore };
    },
    data() {
        return {
            previewImage: null
        }
    },
    methods: {
        uploadImage(e) {
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.previewImage = e.target.result;
            };
        }
    }
};
</script>

<template>
    <div class="container-fluid">
        <form @submit.prevent="addBook">
            <div class="mb-3">
                <label class="form-label">Thumbnail</label>
                <img :src="previewImage" class="uploading-image" />
                <input type="file" accept="image/jpeg,image/jpg,image/png" @change=uploadImage>
            </div>
            <div class="mb-3">
                <label class="form-label">Title</label>
                <input type="text" id="title" v-model=title>
            </div>
            <div class="mb-3">
                <label class="form-label">Author</label>
                <input type="text" id="title" v-model=author>
            </div>
            <div class="mb-3">
                <label class="form-label">Category</label>
                <select v-model=category>
                    <option value="" disabled></option>
                    <!-- populate options from db -->
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Description</label>
                <textarea v-model=description></textarea>
            </div>
            <div class="mb-3">
                <label class="form-label">Condition</label>
                <select v-model=condition>
                    <option value="" disabled></option>
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label">Quantity</label>
                <input type="number" id="qty" v-model=qty>
            </div>
            <div class="mb-3">
                <label class="form-label">Price</label>
                <input type="number" id="price" v-model=price>
            </div>
            <div class=" mb-3">
                <button type="submit" class="btn btn-primary w-100">Add Book</button>
            </div>
        </form>
    </div>
</template>