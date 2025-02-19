// import { fn } from '@storybook/test';

import AreaPlot from "./AreaPlot.vue";
import * as RandomDataLib from "../../utils/random-data-lib";
import docs from "./AreaPlot.docs.md?raw";


export default {
    component: AreaPlot,
    title: "Lattice/Area Plot",
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
        id: "ljs-area-plot",
        data: RandomDataLib.createRandomNumericalData(20, "randomInt"),
        axis: {
            x: {scaleType: "linear"}
        }
    },
};
