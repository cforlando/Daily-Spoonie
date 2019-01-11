<template>
    <div>
        <b-dropdown variant="link" no-caret>
            <template slot="button-content">
                <i class="fas fa-cogs" />
            </template>
            <b-dropdown-item>Add Spoons</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Config",
        components: {
        },
        methods: {
            logout: function() {
                this.$store.dispatch("LOG_OUT");
            }
        }
    }
</script>

<style scoped>

</style>