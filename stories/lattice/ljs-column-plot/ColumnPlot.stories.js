// import { fn } from '@storybook/test';

import ColumnPlot from "./ColumnPlot.vue";
import * as RandomDataLib from "../../utils/random-data-lib";
import docs from "./ColumnPlot.docs.md?raw";


export default {
    component: ColumnPlot,
    title: "Lattice/Column Plot",
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
        id: "ljs-column-plot",
        data: RandomDataLib.createRandomCategoricalData(5, "vertical"),
        axis: {
            x: { 
                title: 'category',
                scaleType: "categorical",
                textAngle: 45, 
                textAnchor: "start",
                display: true,
                hideAxis: false,
                hideTicks: false,
                hideLabels: false,
                hideTitle: false,
                },
            y: { 
                title: "value",
                scaleType: "linear",
                display: true,
                hideAxis: false,
                hideTicks: false,
                hideLabels: false,
                hideTitle: false,
                }
        }
    },
};
