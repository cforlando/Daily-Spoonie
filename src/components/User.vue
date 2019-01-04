<template>
    <div class="user container-fluid px-0">
        <div class="links text-center row align-middle ml-0 mr-0">
            <Config />
            <router-link to="/dashboard" class="col tab">
                <div class="mt-2">
                    <i class="dashboard col fas fa-home"></i>
                </div>
            </router-link>
            <router-link to="/addview" class="col tab">
                <div class="mt-2">
                    <i class="addview col fas fa-plus-circle"></i>
                </div>
            </router-link>
            <router-link to="/taskview" class="col tab">
                <div class="mt-2">
                    <i class="taskview col fas fa-list"></i>
                </div>
            </router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Config from './Config';

export default {
    name: "User",
    components: {
        Config
    }
}
</script>

<style scoped>
    .user {
        width: 100%;
    }

    .links {
        background: #f2f2f2;
        height: 5rem;
        font-size: 2.5rem;
    }

    .tab {
        color: #333333;
        border-color: #BCBCBC;
        border-style: solid;
        border-width: 1px;
        border-bottom: 0;
        border-radius: 2px;
    }

    .router-link-active {
        color: #31C4F5;
        background: white;
    }
</style>