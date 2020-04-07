import React from "react";
import { makeStyles, createStyles, Paper, Theme } from "@material-ui/core";
import ReactEcharts from "echarts-for-react";
import {Constants} from "../constants";
import boroData from "../data/nyc/boro.json";

const getOption = () => {
    const categories: string[] = [];
    const cases: number[] = [];

    boroData.forEach(item => {
        categories.push(item[0]);
        cases.push(parseInt(item[1]));
    });

    return {
        title: {
            text: "Borough Cases",
            subtext: "Total cases of each borough"
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            data: categories,
            axisLabel: {
                interval: 0,
                textStyle: {
                  baseline: "top",
                  color: "#333",
                  fontSize: 11,
                  fontWeight: "bold"
                }
            },
            axisLine: { lineStyle: { color: "#aaa" }, show: true },
            axisTick: { show: false },
            splitLine: { show: false },
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                name: "Count",
                type: "bar",
                label: {
                    show: true,
                    position: "top",
                    fontWeight: "bold",
                    color: "black"
                },
                itemStyle: {
                    color: Constants.casesColor
                },
                barMaxWidth: "45%",
                data: cases
            }
        ]
    }
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        chart: {
            padding: 20
        }
    })
)

const Boro = () => {
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

export default Boro;