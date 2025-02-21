<template>
    <div :id="id" />
</template>

<script lang="js">
import * as LatticeLib from "lattice-viz";

export default {
    name: 'ljs-area-plot',
    props: {
        id: {
            type: String,
            required: false,
            default: 'ljs-area-plot'
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
            default: () => {}
        }
    },
    computed: {
        /**
         * Turns Vue props into a singular plotConfig
         * to insert as Lattice parameter
         */
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
                    id: "area-plot-tooltip"
                }
            }
        },
        /**
         * Areaplot data input order matters
         * for area calculation
         * 
         * Sorts x values from least to greatest
         */
        sortData() {
            return this.data.sort((a, b) => a.x - b.x);
        }
    },
    methods: {
        renderViz() {
            const data = this.sortData;
            LatticeLib.plot(data, "areaplot", this.id, this.plotConfig);
        },
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

<style lang="css">
.ljs--areaplot-path {
    fill: #6bafa9;
    stroke: #96d0cb;
    fill-opacity: .5;
    stroke-width: .75;
    stroke-linejoin: round;
    stroke-linecap: round;
}
</style>