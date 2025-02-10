// import { fn } from '@storybook/test';

import Barplot from "./Barplot.vue";
import * as RandomDataLib from "../utils/random-data-lib";

export default {
    component: Barplot,
    title: "Lattice/Barplot",
};

export const Default = {
    args: {
        id: "ljs-bar-plot",
        data: RandomDataLib.createRandomCategoricalData(5,
            "horizontal",
            5,
            "#96d0cb"
        ),
    },
};
