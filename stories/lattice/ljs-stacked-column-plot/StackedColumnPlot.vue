<template>
    <div :id="id" />
</template>

<script lang="js">
import * as LatticeLib from "lattice-viz";

export default {
    name: 'ljs-stacked-column-plot',
    props: {
        id: {
            type: String,
            required: false,
            default: 'ljs-stacked-column-plot'
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
                    textAngle: 60, 
                    textAnchor: "start",
                    display: true,
                    hideAxis: false,
                    hideTicks: false,
                    hideLabels: false,
                    hideTitle: false,
                    },
                y: { 
                    scaleType: "linear",
                    display: true,
                    hideAxis: false,
                    hideTicks: false,
                    hideLabels: false,
                    hideTitle: false,
                    }
            })
        },
        seriesInfo: {
            type: Array,
            required: false,
            default: () => []
        },
        orientation: {
            type: Number,
            required: false,
            default: 1
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
                series: this.seriesInfo,
                orientation: this.orientation,
                axis: {
                    x: this.axis.x,
                    y: this.axis.y
                },
                tooltip: {
                    enabled: true,
                    id: "stacked-column-plot-tooltip"
                }
            }
        }
    },
    mounted() {
        LatticeLib.plot(this.data, "stackedcolumnplot", this.id, this.plotConfig);
    },
    updated() {
        LatticeLib.plot(this.data, "stackedcolumnplot", this.id, this.plotConfig);
    },
}
</script>