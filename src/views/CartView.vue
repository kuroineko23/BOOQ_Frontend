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
    <h2>Recently Added Book</h2>
</template>