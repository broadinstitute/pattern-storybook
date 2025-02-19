import * as d3 from "d3";

/** Random data generator helper functions */
function generateRandomString(n=10) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return [...Array(n)].map(()=>alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
}

/**
 * Random int generator. Min inclusive and max exclusive
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {Integer} min 
 * @param {Integer} max 
 */
function generateRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function createRandomNumericalData(n, distribution="randomNormal", color="rgba(70, 130, 180, 0.4)") {
    let points = d3.range(0, n).map(()=>{
        return {
            x: undefined,
            y: undefined,
            r: 1,
            c: color
        };
    });

    switch(distribution) {
    case "randomNormal":  
        points.forEach((p)=>{
            let mu = 200;
            let sigma = 50;
            p.x = d3.randomNormal(mu, sigma)(); //randomNormal(mu, sigma)
            p.y = d3.randomNormal(mu, sigma)();
        });
        break;
    case "randomInt": 
        points.forEach((p)=>{
            let n = 100;
            p.x = Math.floor(Math.random()*n); 
            p.y = Math.floor(Math.random()*n);
        });
        break;
    case "randomExponential":    
        points.forEach((p)=>{
            let lambda = 3;
            p.x = d3.randomExponential(lambda)(); 
            p.y = d3.randomExponential(lambda)(); 
        });
        break;
    default:
        throw "Unrecognized distribution";
    }

    return points;
}

function createSeries(nSeries) {
    return d3.range(0, nSeries).map(d => `series-${d}`);
}

/**
 * Generate a list of points {x:random number, y:random number} based on a normal distribution of specified mu and sigma. 
 * @param {Integer} n: number of points to generate
 * @param {Boolean} verbose: to print more information
 * @param {Object?} x: {mu: mean value, sigma: sd}, 
 * @param {Object?} y: {mu: mean value, sigma: sd}
 * @returns Objects[] a list of random points {x: a random number, y: a random number}
 */
function createRandomPoints(n, verbose=false, x={mu:20, sigma:5}, y={mu:50, sigma:10}){
    let points = d3.range(0, n).map(()=>{
        let pX = d3.randomNormal(x.mu, x.sigma)();
        let pY = d3.randomNormal(y.mu, y.sigma)();
        return {
            x: pX,
            y: pY,
            r: 5,
            c: "rgba(70, 130, 180, 0.6)"
        };
    });
    if (verbose){
        let allX = points.map((d)=>d.x);
        let allY = points.map((d)=>d.y);
        let allR = points.map((d)=>d.r);
        console.info("V1");
        console.info(points);
        console.info(d3.mean(allX), d3.extent(allX));
        console.info(d3.mean(allY), d3.extent(allY));
        console.info(d3.mean(allR), d3.extent(allR));
    }
    return points;
}

function createRandomCategoricalData(n, axis="vertical", labelLength=10, color="rgba(70, 130, 180, 0.4)", verbose=false) {
    let data = d3.range(0, n).map(() => {
        let category = generateRandomString(labelLength);
        let val = Math.floor(Math.random() * 101);
        if (axis == "vertical") {
            return {
                x: category,
                y: val,
                c: color
            };
        } else {
            return {
                x: val,
                y: category,
                c: color
            };
        }
    });
    if (verbose) {
        console.log(data);
    }
    return data;
}

/**
 * @param {Integer} rows 
 * @param {Integer} cols 
 * @param {Integer} n - specifies the max of integers generated; range of integers generated will be 0 < int < n
 */
function createRandomHeatmapData(rows=5, cols=5, n=5) {
    const data = [];
    const rowCategories = d3.range(0, cols).map(() => generateRandomString(5));
    const colCategories = d3.range(0, rows).map(() => generateRandomString(5));
    rowCategories.map((y) => {
        colCategories.map((x) => {
            const dataCategory = generateRandomInt(0, n);
            data.push({x: x, y: y, c: dataCategory});
        });
    });
    return data;
}

/**
 * Creates object to use for color axis input
 * @param {Integer} n - specifies the number of colors to generate for categorical heatmaps,
 *                      and the max value for continuous heatmaps.
 * @param {String} type - color scale type. expected: "discrete" | "continuous"
 * @param {Array} colorRange - an array of colors (optional);
 */
function createHeatmapColors(n, type, colorRange = d3.schemeCategory10) {
    if (type == "discrete") {
        const series = createSeries(n);
        const colorScale = d3.scaleOrdinal().domain(series).range(colorRange);
        const colors = d3.range(0, n).map((d) => colorScale(d));
        return {
            domain: [...Array(colors.length).keys()],
            range: colors
        };
    } else if (type == "continuous") {
        return {
            domain: [0, n],
            interpolator: d3.interpolateBlues
        };
    }
}

function createContinuousColors(n, color="Purples"){
    const interpolators = {
        BuGn: d3.interpolateBuGn,
        OrRd: d3.interpolateOrRd,
        PuBu: d3.interpolatePuBu,
        YlGnBu: d3.interpolateYlGnBu,
        Blues: d3.interpolateBlues,
        Oranges: d3.interpolateOranges,
        Greens: d3.interpolateGreens,
        Purples: d3.interpolatePurples,
        Reds: d3.interpolateReds,
        Greys: d3.interpolateGreys,
        Grays: d3.interpolateGreys,

        // diverging color schemes
        RdBu: d3.interpolateRdBu,
        RdGy: d3.interpolateRdGy,
        PiYG: d3.interpolatePiYG,
        PuOr: d3.interpolatePuOr,
        RdYlBu: d3.interpolateRdYlBu,

        // lattice
        Lattice: d3.interpolateRgb("#6bafa9", "white")
 
    };
    return {
        domain: [0, n],
        interpolator: interpolators[color]
    };
}

/**
 * Creates data for stacked bar/column charts
 * @param {Integer} nBars 
 * @param {Integer} nSeries 
 * @param {String} axis - accepted values: "vertical", "horizontal"
 * @param {Integer} labelLength 
 * @param {Boolean} verbose 
 */
function createRandomStackedCategoricalData(nBars, nSeries, axis="vertical", labelLength=10, verbose=false) {
    const series = createSeries(nSeries);
    const data = [];
    d3.range(0, nBars).forEach(() => {
        const category = generateRandomString(labelLength);
        series.forEach(s => {
            const val = generateRandomInt(1, 11);
            if (axis == "vertical") {
                data.push({
                    x: category,
                    y: val,
                    series: s
                });
            } else {
                data.push({
                    x: val,
                    y: category,
                    series: s
                });
            }
        });
    });
    if (verbose) {
        console.log(series);
        console.log(data);
    }
    return data;
}

function createSeriesColorInfo(nSeries, colors=d3.schemeCategory10, verbose=false) {
    const series = createSeries(nSeries);
    const colorScale = d3.scaleOrdinal().domain(series).range(colors);
    const seriesInfo = series.map((d, i) => {
        return {
            name: d,
            color: colorScale(i)
        };
    });

    if (verbose) {
        console.log(seriesInfo);
    }
    console.log(seriesInfo)
    return seriesInfo;
}

export {
    createRandomPoints,
    createRandomCategoricalData,
    createRandomStackedCategoricalData,
    createRandomNumericalData,
    createHeatmapColors,
    createContinuousColors,
    createRandomHeatmapData,
    createSeriesColorInfo
};

export default class RandomDataLib{}