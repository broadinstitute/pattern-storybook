<template>
    <div :id="id" />
</template>

<script lang="js">
import * as LatticeLib from "lattice-viz";

export default {
    name: 'ljs-column-plot',
    props: {
        id: {
            type: String,
            required: false,
            default: 'ljs-column-plot'
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
        padding: {
            type: Object,
            required: false,
            default: () => ({
                top: 20,
                right: 50,
                left: 50,
                bottom: 50
            })
        },
        axis: {
            type: Object,
            required: false,
            default: () => ({
                x: { 
                    scaleType: "categorical",
                    textAngle: 0, 
                    textAnchor: "start",
                    display: true,
                    hideAxis: false,
                    hideTicks: false,
                    hideLabels: false,
                    hideTitle: false,
                    },
                y: { 
                    title: "value",
                    scaleType: "linear",
                    display: true,
                    hideAxis: false,
                    hideTicks: false,
                    hideLabels: false,
                    hideTitle: false,
                    }
            })
        }
    },
    computed: {
        plotConfig() {
            return {
                width: this.width,
                height: this.width,
                padding: {
                    top: this.padding.top,
                    left: this.padding.left,
                    bottom: this.padding.bottom,
                    right: this.padding.right
                },
                axis: {
                    x: this.axis.x,
                    y: this.axis.y
                },
                tooltip: {
                    enabled: true,
                    id: "column-plot-tooltip"
                }
            }
        }
    },
    mounted() {
        LatticeLib.plot(this.data, "columnplot", this.id, this.plotConfig);
    },
    updated() {
        LatticeLib.plot(this.data, "columnplot", this.id, this.plotConfig);
    },
}
</script>