<script>
    import { Pie } from 'vue-chartjs';

    export default {
        name: "SpoonChart",
        extends: Pie,
        props: ['data'],
        computed: {
            spoonsLeft() {
                return this.$store.state.spoons - this.$store.state.spoonsUsed;
            }
        },
        mounted() {
            this.renderChart({
                labels: ['Spoons Left', 'Spoons Used'],
                datasets: [
                {
                    backgroundColor: ['#AEEB41', '#5E9EDA'],
                    data: [this.spoonsLeft, this.$store.state.spoonsUsed]
                }]
            }, 
            {
                maintainAspectRatio: true
            })
        }
    }
</script>