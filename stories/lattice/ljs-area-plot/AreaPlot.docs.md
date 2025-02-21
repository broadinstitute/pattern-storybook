HTML

```html
<div id="ljs-area-plot" />
```

JavaScript

1. Ensure the entire `LatticeLib` module is imported

```js
import * as LatticeLib from "lattice-viz";
```

2. Set `id` variable

```js
// Match this with the `id` of the `div` within your HTML
const id = 'ljs-area-plot';
```

3. Adjust data to use this format

```js
/**
 * c: color of the datapoint,
 * x: value on x-axis (number)
 * y: value on y-axis (number)
 */
const data = [ 
  {x: 19, y: 91, c: 'rgba(70, 130, 180, 0.4)'},
  {x: 22, y: 9,  c: 'rgba(70, 130, 180, 0.4)'},
  {x: 24, y: 96, c: 'rgba(70, 130, 180, 0.4)'}...
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


* Set the color of the area plot using CSS