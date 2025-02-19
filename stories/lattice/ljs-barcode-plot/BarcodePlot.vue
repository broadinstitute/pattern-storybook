<template>
    <div :id="id" />
</template>

<script lang="js">
import * as LatticeLib from "lattice-viz";

export default {
    name: 'ljs-barcode-plot',
    props: {
        id: {
            type: String,
            required: false,
            default: 'ljs-barcode-plot'
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
        plotConfig() {
            return {
                padding: {
                    top: this.padding.top,
                    left: this.padding.left,
                    bottom: this.padding.bottom,
                    right: this.padding.right
                },
                tooltip: {
                    enabled: true,
                    id: "barcode-plot-tooltip"
                }
            }
        }
    },
    mounted() {
        console.log(this.data)
        LatticeLib.plot(this.data, "barcodeplot", this.id, this.plotConfig);
    },
    updated() {
        LatticeLib.plot(this.data, "barcodeplot", this.id, this.plotConfig);
    },
}
</script>