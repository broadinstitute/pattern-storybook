<template>
    <div :id="id" />
</template>

<script lang="js">
import * as LatticeLib from "lattice-viz";

export default {
    name: 'ljs-heatmap',
    props: {
        id: {
            type: String,
            required: false,
            default: 'ljs-heatmap'
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
        maxValue: {
            type: Number,
            required: true,
            default: 15
        },
        numCols: {
            type: Number,
            required: true,
            default: 20
        },
        numRows: {
            type: Number,
            required: true,
            default: 20
        },
        colorsObj: {
            type: Object,
            required: false,
            default: () => {}
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
                    c: { 
                        domain: this.colorsObj.domain, 
                        interpolator: this.colorsObj.interpolator
                    }
                },
                tooltip: {
                    enabled: true,
                    id: "heatmap-tooltip"
                }
            }
        }
    },
    mounted() {
        LatticeLib.plot(this.data, "heatmap", this.id, this.plotConfig);
    },
    updated() {
        LatticeLib.plot(this.data, "heatmap", this.id, this.plotConfig);
    },
}
</script>