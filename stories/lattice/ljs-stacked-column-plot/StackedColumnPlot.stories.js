// import { fn } from '@storybook/test';

import StackedColumnPlot from "./StackedColumnPlot.vue";
import * as RandomDataLib from "../../utils/random-data-lib";
import docs from "./StackedColumnPlot.docs.md?raw";

export default {
    component: StackedColumnPlot,
    title: "Lattice/Stacked Column Plot",
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
        id: "ljs-stacked-column-plot",
        data: RandomDataLib.createRandomStackedCategoricalData(10, 5, "vertical"),
        seriesInfo: RandomDataLib.createSeriesColorInfo(5),
        orientation: 1
    },
};
