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
        component: docs,
      },
      canvas: {
        sourceState: "none",
      },
    },
  },
};

export const Default = {
  args: {
    id: "ljs-area-plot",
    data: RandomDataLib.createRandomNumericalData(5, "randomInt"),
    axis: {
      x: { scaleType: "linear" },
    },
  },
};

// export const Categorical = {
//   args: {
//     id: "ljs-area-plot",
//     data: RandomDataLib.createRandomCategoricalData(5, "vertical"),
//     axis: {
//       x: { scaleType: "categorical", ticks: 5 },
//     },
//   },
// };

// export const Date = {
//   args: {
//     id: "ljs-area-plot",
//     data: [
//       { x: new Date("2023-01-01"), y: 10 },
//       { x: new Date("2023-02-01"), y: 20 },
//       { x: new Date("2023-03-01"), y: 15 },
//     ],
//     axis: {
//       x: { scaleType: "temporal", ticks: 3 },
//     },
//   },
// };
