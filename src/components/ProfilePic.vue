<template>
    <div>
        <img :src=picUrl class="profilePic"/>
    </div>
</template>

<script>
export default {
    name: "ProfilePic",
    props: {
        picFileName: String
    },
    computed: {
        picUrl() {
            return require('../assets/' + this.picFileName);
        }
    }
}
</script>

<style>
    .profilePic {
        border-radius: 50%;
        border-width: 4px;
        border-color: #31C4F5;
        border-style: solid;
    }
</style>
