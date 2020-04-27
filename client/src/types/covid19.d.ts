export type FormatterParams = {
    componentType: 'series',
    // Series type
    seriesType: string,
    // Series index in option.series
    seriesIndex: number,
    // Series name
    seriesName: string,
    // Data name, or category name
    name: string,
    // Data index in input data array
    dataIndex: number,
    // Original data as input
    data: Object,
    // Value of data. In most series it is the same as data.
    // But in some series it is some part of the data (e.g., in map, radar)
    value: number|Array<any>|Object,
    // encoding info of coordinate system
    // Key: coord, like ('x' 'y' 'radius' 'angle')
    // value: Must be an array, not null/undefined. Contain dimension indices, like:
    // {
    //     x: [2] // values on dimension index 2 are mapped to x axis.
    //     y: [0] // values on dimension index 0 are mapped to y axis.
    // }
    encode: Object,
    // dimension names list
    dimensionNames: Array<String>,
    // data dimension index, for example 0 or 1 or 2 ...
    // Only work in `radar` series.
    dimensionIndex: number,
    // Color of data
    color: string,
};

export type AppData = {
    summary: SummaryData,
    dailyData: string[][],
    genderData: GenderData,
    boroData: string[][],
    testingData: string[][]
};

export type SummaryProps = {
    summaryData: SummaryData
};

export type TimeSeriesProps = {
    dailyData: string[][]
};

export type CompareChartProps = {
    genderData: GenderData
};

export type BoroProps = {
    boroData: string[][]
};

export type BarChartProps = {
    genderData: GenderData,
    boroData: string[][]
};

export type TestingProps = {
    testingData: string[][]
};

export type SummaryData = {
    cases: string,
    increase: string,
    hospitalized: string,
    deaths: string,
    lastUpdated: string
};

export type GenderData = {
    cases: number[],
    hospitalized: number[],
    death: number[]
};