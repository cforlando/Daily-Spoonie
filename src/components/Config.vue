<template>
    <div>
        <b-dropdown variant="link" no-caret>
            <template slot="button-content">
                <i class="fas fa-cogs" />
            </template>
            <b-dropdown-item>Add Spoons</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item>Log Out</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Config",
        components: {
        }
    }
</script>

<style scoped>

</style>