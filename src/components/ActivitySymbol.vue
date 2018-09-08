<template>
    <div class="col text-center">
        <img class="activity" :src=symbolUrl /><p>{{activityText}}</p>
    </div>
</template>

<script>
    // important note: this is a temporary setup until user authentication is
    // implemented and the user can customize the symbols and what they stand for.
    export default {
        name: "ActivitySymbol",
        props: {
            symbolFileName: String,
            activityText: String
        },
        computed: {
            symbolUrl() {
                return require('../assets/' + this.symbolFileName);
            }
        }
    }
</script>

<style scoped>
.activity {
    height: 4rem;
    width: 4rem;
}
</style>