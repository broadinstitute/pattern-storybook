HTML

```html
<div id="ljs-bar-plot" />
```

JavaScript

1. Ensure the entire `LatticeLib` module is imported

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
    {x: 77, y: 'hbobt', c: '#96d0cb'},
    {x: 68, y: 'ipldu', c: '#96d0cb'}...
]
```

4. Adjust the plot configuration to your liking

```js
const plotConfig = {
  padding: {
    top: 0
  }, 
  xAxis: {
    title: "value"
  }
}
```

5. Add all parameters into `LatticeLib.plot()` and indicate you are rendering a `"barplot"`

```js
LatticeLib.plot(data, "barplot", id, plotConfig);
```

6. Resulting visualization below: