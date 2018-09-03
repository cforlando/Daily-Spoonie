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
                <div class="col text-center">
                    <img class="activity" src="../assets/takemedicine.svg" /><p>Take Medicine</p>
                </div>
                <div class="col text-center">
                    <img class="activity" src="../assets/wakeup.svg" /><p>Wake Up</p>
                </div>
                <div class="col text-center">
                </div>
            </div>
        </div>
        <hr />
        <div class="tier">
            <span><img class="spoon" src="../assets/twospoons.svg" />2 Spoon Activities</span>
            <hr />
            <div class="row">
                <div class="col text-center">
                    <img class="activity" src="../assets/getdressed.svg" /><p>Get Dressed</p>
                </div>
                <div class="col text-center">
                    <img class="activity" src="../assets/shower.svg" /><p>Shower</p>
                </div>
                <div class="col text-center">
                </div>
            </div>
        </div>
        <hr />
        <div class="tier">
            <span><img class="spoon" src="../assets/threespoons.svg" />3 Spoon Activities</span>
            <hr />
            <div class="row">
                <div class="col text-center">
                    <img class="activity" src="../assets/cooking.svg" /><p>Cooking</p>
                </div>
                <div class="col text-center">
                    <img class="activity" src="../assets/exercise.svg" /><p>Light Exercise</p>
                </div>
                <div class="col text-center">
                    <img class="activity" src="../assets/petcare.svg" /><p>Pet Care</p>
                </div>
            </div>
        </div>
        <hr />
        <div class="tier">
            <span><img class="spoon" src="../assets/fourspoons.svg" />4 Spoon Activities</span>
            <hr />
            <div class="row">
                <div class="col text-center">
                    <img class="activity" src="../assets/drive.svg" /><p>Drive to Work</p>
                </div>
                <div class="col text-center">
                    <img class="activity" src="../assets/doctor.svg" /><p>Doctor Visit</p>
                </div>
                <div class="col text-center">
                    <img class="activity" src="../assets/work.svg" /><p>Work</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddView",
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