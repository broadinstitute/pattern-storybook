// import { fn } from '@storybook/test';

import StackedBarPlot from "./StackedBarPlot.vue";
import * as RandomDataLib from "../../utils/random-data-lib";
import docs from "./StackedBarPlot.docs.md?raw";

export default {
    component: StackedBarPlot,
    title: "Lattice/Stacked Bar Plot",
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
        id: "ljs-stacked-bar-plot",
        data: RandomDataLib.createRandomStackedCategoricalData(10, 5, "horizontal"),
        seriesInfo: RandomDataLib.createSeriesColorInfo(5),
        orientation: 1
    },
};
