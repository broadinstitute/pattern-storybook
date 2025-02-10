<template>
    <div :id="id" />
</template>

<script lang="js">
import * as LatticeLib from "lattice-viz";

export default {
    name: 'ljs-bar-plot',
    props: {
        id: {
            type: String,
            required: false,
            default: 'ljs-bar-plot'
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
        }
    },
    computed: {
        plotConfig() {
            return {
                width: this.width,
                height: this.width,
                padding: {
                    top: 20,
                    left: 100,
                    bottom: 50,
                    right: 50
                },
                axis: {
                    x: {
                        title: 'Number of Cell Line Models',
                        scaleType: "linear",
                        orientation: "bottom",
                        padding: 0.15,
                        textAngle: 0,
                        textAnchor: null,
                        display: true,
                        hideAxis: false,
                        hideTicks: false,
                        hideLabels: false,
                        hideTitle: false,
                        min: 0,
                    },
                    y: {
                        orientation: "left",
                        padding: 0.15,
                        textAngle: 0,
                        textAnchor: null,
                        display: true,
                        hideAxis: false,
                        hideTicks: false,
                        hideLabels: false,
                        hideTitle: true,
                    },
                },
                tooltip: {
                    enabled: true,
                    id: "bar-plot-tooltip"
                }
            }
        }
    },
    mounted() {
        LatticeLib.plot(this.data, "barplot", this.id, this.plotConfig);
    }
}
</script>