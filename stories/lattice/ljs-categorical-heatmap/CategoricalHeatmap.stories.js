// import { fn } from '@storybook/test';

import CategoricalHeatmap from "./CategoricalHeatmap.vue";
import * as RandomDataLib from "../../utils/random-data-lib";
import docs from "./CategoricalHeatmap.docs.md?raw";


export default {
    component: CategoricalHeatmap,
    title: "Lattice/Categorical Heatmap",
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
        id: "ljs-categorical-heatmap",
        numCategories: 15,
        numRows: 15,
        numCols: 15,
        colorsObj: RandomDataLib.createHeatmapColors(15, "discrete"),
        data: RandomDataLib.createRandomHeatmapData(15, 15, 15),
    },
};
