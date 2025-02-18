HTML

```html
<div id="ljs-bar-plot" />
```

JavaScript

1. Import the entire `LatticeLib` module

```js
import * as LatticeLib from "lattice-viz";
```

2. Set `id` variable

```js
// Match this with the `id` of the `div` within your HTML
const id = 'ljs-bar-plot';
```

3. Adjust data to use this format

```js
/**
 * c: color of the datapoint,
 * x: value on x-axis (a linear scale means this should be a number)
 * y: value on y-axis (a categorical scale means this should be a string)
 */
const data = [ 
    {x: 67, y: "jnovu", c:"#96d0cb"},
    {x: 77, y: 'hbobt', c: '#96d0cb'}
    {x: 68, y: 'ipldu', c: '#96d0cb'}
    {x: 55, y: 'lbxeq', c: '#96d0cb'}
    {x: 49, y: 'jujkq', c: '#96d0cb'}
]
```

4. Adjust the plot configuration to your liking

```js
const plotConfig = {
  "parentId": 'ljs-bar-plot',
  "width": 300,
  "height": 300,
  "orientation": 1,
  "title": null,
  "padding": {
    "top": 20,
    "left": 50,
    "bottom": 50,
    "right": 50
  },
  "axis": {
    "x": {
      "scaleType": "linear",
      "title": "value",
      "orientation": "bottom",
      "padding": 0.15,
      "textAngle": 0,
      "textAnchor": null,
      "display": true,
      "hideAxis": false,
      "hideTicks": false,
      "hideLabels": false,
      "hideTitle": false,
      "min": null,
      "max": null
    },
    "y": {
      "scaleType": "categorical",
      "title": "",
      "orientation": "left",
      "padding": 0.15,
      "textAngle": 0,
      "textAnchor": null,
      "display": true,
      "hideAxis": false,
      "hideTicks": false,
      "hideLabels": false,
      "hideTitle": false,
      "min": null,
      "max": null
    },
    "c": {
      "scaleType": null,
      "domain": [],
      "range": [
        "TBA"
      ],
      "interpolator": null
    }
  },
  "tooltip": {
    "enabled": true,
    "id": "bar-plot-tooltip"
  },
  "series": []
}
```

5. Render the visualization

```js
LatticeLib.plot(data, "barplot", id, plotConfig);

```

6. Resulting visualization below: