// import { fn } from '@storybook/test';

import BarcodePlot from "./BarcodePlot.vue";
import * as RandomDataLib from "../../utils/random-data-lib";
import docs from "./BarcodePlot.docs.md?raw";


export default {
    component: BarcodePlot,
    title: "Lattice/Barcode Plot",
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
        id: "ljs-barcode-plot",
        data: RandomDataLib.createRandomNumericalData(20, "randomInt"),
        padding: {
            top: 20
        }
    },
};
