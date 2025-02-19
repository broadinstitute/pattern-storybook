// import { fn } from '@storybook/test';

import BarPlot from "./BarPlot.vue";
import * as RandomDataLib from "../../utils/random-data-lib";
import docs from "./BarPlot.docs.md?raw";


export default {
    component: BarPlot,
    title: "Lattice/Bar Plot",
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
        id: "ljs-bar-plot",
        data: RandomDataLib.createRandomCategoricalData(
            5,
            "horizontal",
            5,
            "#96d0cb"
        ),
    },
};
