<template>
    <div>
        <div class="header text-center">
            <h1>Plan Your Day</h1>
            <h2><span>{{spoonsLeft}}</span> Spoons Left</h2>
        </div>
        <hr />
        <div class="list text-center">
            <div class="todo">
                <h2>To do:</h2> 
                <ul class="list-unstyled">
                    <li>
                        <div class="row">
                            <div class="col">
                                <input type="checkbox" />
                                <span>Take a bath</span><p>2 spoons</p>
                            </div>
                            <div class="col delsym"><i class="fas fa-times"></i></div>
                        </div>
                    </li>
                    <hr />
                    <li>
                        <div class="row">
                            <div class="col custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="check1" />
                                <label class="custom-control-label" for="check1">Clean Room</label><p>4 spoons</p>
                            </div>
                            <div class="col delsym"><i class="fas fa-times"></i></div>
                        </div>
                    </li>
                    <hr />
                    <li>
                        <div class="row">
                            <div class="col">
                                <input type="checkbox" />
                                <span>Dr Appointment</span><p>4 spoons</p>
                            </div>
                            <div class="col delsym"> <i class="fas fa-times"></i> </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="done">
                <h2>Done:</h2>
                <ul class="list-unstyled">
                    <li>
                        <div class="row">
                            <div class="col">
                                <input type="checkbox" checked />
                                <span>Dr Appointment</span><p>4 spoons</p>
                            </div>
                            <div class="col delsym"> <i class="fas fa-times"></i></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskView",
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

    .header > h1 {
        font-size: 1.5rem;
    }

    .header > h2 > span {
        color: #00CC99;
    }

    .delsym {
        color: #FF493C;
        font-size: 1.3rem;
    }

    .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
        background-color: #caca4c;
        height: 1.5rem;
        width: 1.5rem;
    }
    .custom-control-input:checked~.custom-control-label::before {
        color: #fff;
        background-color: #caca4c;
        height: 1.5rem;
        width: 1.5rem;
    }
</style>