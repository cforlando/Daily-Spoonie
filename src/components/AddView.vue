<template>
    <div>
        <div class="header text-center">
            <h1 class="planYourDay">Plan Your Day</h1>
            <h2><span class="spoonTotal">{{spoonsLeft}}</span> Spoons Left</h2>
        </div>
        <hr />
        <div class="tier">
            <span><img class="spoon" src="../assets/onespoon.svg" />1 Spoon Activities</span>
            <hr />
            <div class="row">
                <ActivitySymbol symbolFileName='takemedicine.svg' activityText='Take Medicine' />
                <ActivitySymbol symbolFileName='wakeup.svg' activityText='Wake Up' />
                <div class="col text-center"></div>
            </div>
        </div>
        <hr />
        <div class="tier">
            <span><img class="spoon" src="../assets/twospoons.svg" />2 Spoon Activities</span>
            <hr />
            <div class="row">
                <ActivitySymbol symbolFileName='getdressed.svg' activityText='Get Dressed' />
                <ActivitySymbol symbolFileName='shower.svg' activityText='Shower' />
                <div class="col text-center"></div>
            </div>
        </div>
        <hr />
        <div class="tier">
            <span><img class="spoon" src="../assets/threespoons.svg" />3 Spoon Activities</span>
            <hr />
            <div class="row">
                <ActivitySymbol symbolFileName='cooking.svg' activityText='Cooking' />
                <ActivitySymbol symbolFileName='exercise.svg' activityText='Light Exercise' />
                <ActivitySymbol symbolFileName='petcare.svg' activityText='Pet Care' />
            </div>
        </div>
        <hr />
        <div class="tier">
            <span><img class="spoon" src="../assets/fourspoons.svg" />4 Spoon Activities</span>
            <hr />
            <div class="row">
                <ActivitySymbol symbolFileName='drive.svg' activityText='Drive to Work' />
                <ActivitySymbol symbolFileName='doctor.svg' activityText='Doctor Visit' />
                <ActivitySymbol symbolFileName='work.svg' activityText='Work' />
            </div>
        </div>
    </div>
</template>

<script>
import ActivitySymbol from './ActivitySymbol';

export default {
    name: "AddView",
    components: {
        ActivitySymbol
    },
    computed: {
        spoonsLeft() {
            return this.$store.state.spoons - this.$store.state.spoonsUsed;
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

    .header {
        font-family: "Nunito";
    }

    .planYourDay {
        font-weight: 700;
        font-size: 1.5rem;
    }

    .spoonTotal {
        color: #00CC99;
    }

    .spoon {
        height: 2.5rem;
        width: 2.5rem;
    }

    .activity {
        height: 4rem;
        width: 4rem;
    }  
</style>