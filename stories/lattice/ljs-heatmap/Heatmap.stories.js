// import { fn } from '@storybook/test';

import Heatmap from "./Heatmap.vue";
import * as RandomDataLib from "../../utils/random-data-lib";
import docs from "./Heatmap.docs.md?raw";


export default {
    component: Heatmap,
    title: "Lattice/Heatmap",
    parameters: {
        docs: {
            description: {
                component: docs
            },
            canvas: {
                sourceState: "none"
            }
        },
    }
};

export const Default = {
    args: {
        id: "ljs-heatmap",
        maxValue: 15,
        numRows: 15,
        numCols: 15,
        colorsObj: RandomDataLib.createHeatmapColors(15, "continuous"),
        data: RandomDataLib.createRandomHeatmapData(20, 20, 15),
        padding: { top: 0 },
    },
};
