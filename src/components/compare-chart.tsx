import React from "react";
import { makeStyles, Theme, createStyles, Paper } from "@material-ui/core";
import genderData from "../data/nyc/gender.json";
import ReactEcharts from "echarts-for-react";
import {Constants} from "../constants";
import { FormatterParams } from "../types/covid19";

const getOption = () => ({
    title: {
        text: "Rate by Gender"
    },
    legend: {
        data: ["Female", "Male"],
        left: "73%"
    },
    grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
    },
    xAxis: {
        type: "value"
    },
    yAxis: {
        type: "category",
        data: ["Deaths", "Hospitalized", "Total"],
        axisLabel: {
            interval: 0,
            rotate: 90,
            textStyle: {
              baseline: "bottom",
              color: "#333",
              fontSize: 11,
              fontWeight: "bold"
            }
        },
        axisLine: { lineStyle: { color: "#aaa" }, show: true },
        axisTick: { show: false },
        splitLine: { show: false },
    },
    series: [
        {
            name: "Female",
            type: "bar",
            stack: "total",
            label: {
                show: true,
                position: "inside",
                fontWeight: "bold",
                formatter: (params: FormatterParams): string => {
                    const text =  -1 * Number(params.value);
                    return `${text.toFixed(1)}%`;
                }
            },
            itemStyle: {
                color: Constants.pinkColor
            },
            barMaxWidth: "45%",
            data: [
                -genderData.death[0],
                -genderData.hospitalized[0],
                -genderData.cases[0]
            ]
        },
        {
            name: "Male",
            type: "bar",
            stack: "total",
            label: {
                show: true,
                position: "inside",
                fontWeight: "bold",
                formatter: (params: FormatterParams): string => {
                    return `${Number(params.value).toFixed(1)}%`;
                }
            },
            itemStyle: {
                color: Constants.casesColor
            },
            data: [
                genderData.death[1],
                genderData.hospitalized[1],
                genderData.cases[1]
                
            ]
        }
    ]
})

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        chart: {
            padding: 20
        }
    })
)

const CompareChart = () => {
    const classes = useStyles();
    return(
        <div>
            <Paper variant="outlined" className={classes.chart}>
                <ReactEcharts 
                    option={getOption()}
                />
            </Paper>
        </div>
    )
}

export default CompareChart;