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
    <div class="mt-2">
        <h3>Recently Added</h3>
    </div>
    <div class="mt-2">
        <h3>Most Popular</h3>
    </div>
</template>