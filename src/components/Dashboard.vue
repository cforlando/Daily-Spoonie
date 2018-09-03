<template>
  <div class="text-center h-100">
    <div class="header ml-0 mr-0 row">
        <div class="col-4 d-flex justify-content-center flex-column">
            <ProfilePic picFileName='jaredface.png' />
        </div>
        <div class="col-8 text-left pr-0">
            <p class="yourDay">Your Day</p>
            <p>{{currentDate}}</p>
        </div>
    </div>
    <div class="reminder d-flex justify-content-center flex-column">
        <div class="d-flex justify-content-center flex-row">
            <div class="mr-2">
                <i class="fas fa-bell"></i>
            </div>
            <div>
                <span>Reminder: (Take your medication!)</span>
            </div>
            <div class="ml-2">
                <span>(Edit)</span>
            </div>
        </div>
    </div>    
    <div class="spoonDiagram">
      <SpoonChart />
    </div>
    <div class="spoonCounts container">
        <div class="spoonsTotal d-flex justify-content-center align-items-center row">
            <div class="col text-right">
                <span>{{spoons}}</span>
            </div>
            <div class="col mb-3">
                <span>Spoons Total</span>
            </div>
            <div class="col text-left">
                <span>(Edit)</span>
            </div>
        </div>
        <div class="spoonsUsed d-flex justify-content-center align-items-center row">
            <div class="col text-right">
                <span>{{spoonsUsed}}</span>
            </div>
            <div class="col mb-3">
                <span>Spoons Used</span>
            </div>
            <div class="col text-left">
                <span>(Edit)</span>
            </div>
        </div>
        <div class="spoonsLeft d-flex justify-content-center align-items-center row">
            <div class="col text-right">
                <span>{{spoonsLeft}}</span>
            </div>
            <div class="col mb-3">
                <span>Spoons Left</span>
            </div>
            <div class="col text-left">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProfilePic from './ProfilePic';
import SpoonChart from './SpoonChart';
import moment from 'moment';

export default {
    name: "Dashboard",
    components: {
        ProfilePic,
        SpoonChart
    },
    computed: {
        spoons() {
            return this.$store.state.spoons;
        },
        spoonsUsed() {
            return this.$store.state.spoonsUsed;
        },
        spoonsLeft() {
            return this.$store.state.spoons - this.$store.state.spoonsUsed;
        },
        currentDate() {
            return new moment().format("dddd[,] MMM DD");
        }
    }
}
</script>

<style scoped>
    @font-face {
        font-family: "Nunito";
        src: url('../assets/fonts/Nunito-Bold.ttf');
        font-weight: normal;
        font-style: normal;
    }

    .reminder {
        font-size: .8em;
        font-weight: bold;
        color: white;
        background: #31C4F5;
        height: 3.5rem;
    }

    .yourDay {
        font-family: "Nunito";
        font-size: 2.5rem;
    }

    .spoonDiagram {
        width: 200px;
        height: 200px;
        margin: auto;
    }

    .spoonCounts ul {
        list-style-type: none;
        padding: 0;
    }

    .spoonCounts ul li {
        text-align: left;
    }

    .spoonsTotal > div:nth-child(1) {
        font-size: 3rem;
        color: #31C4F5;
    }

    .spoonsTotal > div:nth-child(2) {
        font-size: 1.5rem;
        font-family: "Nunito";
    }

    .spoonsTotal > div:nth-child(3) {
        color: #5E9EDA;
    }

    .spoonsUsed > div:nth-child(1) {
        font-size: 3rem;
        color: #B3ECF0;
    }

    .spoonsUsed > div:nth-child(2) {
        font-size: 1.5rem;
        font-family: "Nunito";
    }

    .spoonsUsed > div:nth-child(3) {
        color: #5E9EDA;
    }

    .spoonsLeft > div:nth-child(1) {
        font-size: 3rem;
        color: #AEEB41;
    }

    .spoonsLeft > div:nth-child(2) {
        font-size: 1.5rem;
        font-family: "Nunito";
    }
</style>