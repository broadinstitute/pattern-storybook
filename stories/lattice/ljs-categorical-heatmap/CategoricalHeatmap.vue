<template>
    <div :id="id" />
</template>

<script lang="js">
import * as RandomDataLib from "../../utils/random-data-lib";
import * as LatticeLib from "lattice-viz";

export default {
    name: 'ljs-categorical-heatmap',
    props: {
        id: {
            type: String,
            required: false,
            default: 'ljs-categorical-heatmap'
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
        numCategories: {
            type: Number,
            required: true,
            default: 15
        },
        numCols: {
            type: Number,
            required: true,
            default: 15
        },
        numRows: {
            type: Number,
            required: true,
            default: 15
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
                        range: this.colorsObj.range 
                    }
                },
                tooltip: {
                    enabled: true,
                    id: "categorial-heatmap-tooltip"
                }
            }
        }
    },
    mounted() {
        LatticeLib.plot(this.data, "categoricalheatmap", this.id, this.plotConfig);
    },
    updated() {
        LatticeLib.plot(this.data, "categoricalheatmap", this.id, this.plotConfig);
    },
}
</script>