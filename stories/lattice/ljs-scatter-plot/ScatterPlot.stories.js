// import { fn } from '@storybook/test';

import ScatterPlot from "./ScatterPlot.vue";
import * as RandomDataLib from "../../utils/random-data-lib";
import docs from "./ScatterPlot.docs.md?raw";


export default {
    component: ScatterPlot,
    title: "Lattice/Scatter Plot",
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
        id: "ljs-scatter-plot",
        distribution: "randomExponential",
        data: RandomDataLib.createRandomNumericalData(20, "randomExponential"),
    },
};
