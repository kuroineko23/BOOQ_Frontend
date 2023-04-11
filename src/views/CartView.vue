<script>
import { useAccountStore } from '../stores/useAccountStore';

export default {
    setup() {
        const accountStore = useAccountStore();
        return { accountStore };
    },
};
</script>

<template>
    <h1>Hello</h1>
</template>