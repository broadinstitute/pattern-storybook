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
            default: () => ({
                x: {
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
                    id: "area-plot-tooltip"
                }
            }
        },
        // areaplot data input order matters for the area calculation -- sorting the random data beforehand
        sortData() {
            return this.data.sort((a, b) => {
                if (a.x < b.x) return -1;
                else if (a.x > b.x) return 1;
                else return 0;
            });
        }
    },
    mounted() {
        const data = this.sortData;
        console.log(data)
        LatticeLib.plot(data, "areaplot", this.id, this.plotConfig);
    },
    updated() {
        const data = this.sortData;
        LatticeLib.plot(data, "areaplot", this.id, this.plotConfig);
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