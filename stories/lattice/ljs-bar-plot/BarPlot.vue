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
                    title: 'value',
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
                    scaleType: "categorical",
                    padding: 0.15,
                    textAngle: 0,
                    textAnchor: null,
                    display: true,
                    hideAxis: false,
                    hideTicks: false,
                    hideLabels: false,
                    hideTitle: true,
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
                    y: this.axis.y,
                },
                tooltip: {
                    enabled: true,
                    id: "bar-plot-tooltip"
                }
            }
        }
    },
    methods: {
        /**
         * Renders the visualization
         */
        renderViz() {
            LatticeLib.plot(this.data, "barplot", this.id, this.plotConfig);
        },
        /**
         * Removes the SVG from the DOM
         */
        removeViz() {
            const svg = document.getElementById(`${this.id}-svg`)
            if (svg) svg.remove();
        }
    },
    mounted() {
        this.renderViz();
    },
    beforeUpdate() {
        this.removeViz();
    },
    updated() {
        this.renderViz();
    },
}
</script>