<template>
    <div :id="id" />
</template>

<script lang="js">
import * as LatticeLib from "lattice-viz";

export default {
    name: 'ljs-scatter-plot',
    props: {
        id: {
            type: String,
            required: false,
            default: 'ljs-scatter-plot'
        },
        width: {
            type: Number,
            required: false,
            default: 300
        },
        height: {
            type: Number,
            required: false,
            default: 300
        },
        data: {
            type: Array,
            required: true,
            default: () => []
        },
        distribution: {
            type: String,
            required: true,
            default: "randomExponential"
        },
        padding: {
            type: Object,
            required: false,
            default: () => ({
                top: 0,
            })
        },
        axis: {
            type: Object,
            required: false,
            default: () => { }
        }
    },
    computed: {
        plotConfig() {
            return {
                padding: {
                    top: this.padding.top
                },
                axis: {
                    axis: {
                        y: { 
                            title: this.distribution, 
                            ticks: 10
                        },
                        x: { 
                            title: this.distribution 
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    id: "scatter-plot-tooltip"
                }
            }
        }
    },
    mounted() {
        LatticeLib.plot(this.data, "scatterplot", this.id, this.plotConfig);
    },
    updated() {
        LatticeLib.plot(this.data, "scatterplot", this.id, this.plotConfig);
    },
}
</script>