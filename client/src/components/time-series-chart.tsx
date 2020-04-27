import React from "react";
import ReactEcharts from "echarts-for-react";
import { Paper, Chip, makeStyles, Theme, createStyles } from "@material-ui/core";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {Constants} from "../constants";
import { TimeSeriesProps } from "../types/covid19";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 50
        },
        chip_container: {
            textAlign: "end"
        },
        chart: {
            marginTop: 5, 
            padding: 20
        }
    })
);

const TimeSeriesChart: React.FC<TimeSeriesProps> = (props) => {

    let dates: string[] = [];
    let cases: number[] = [];
    let hosp: number[] = [];
    let deaths: number[] = [];

    props.dailyData.forEach(item => {
        dates.push(item[0]);
        cases.push(item[1] !== "" ? parseInt(item[1]) : 0);
        hosp.push(item[2] !== "" ? parseInt(item[2]) : 0);
        deaths.push(item[3] !== "" ? parseInt(item[3]) : 0);
    })

    const getOptions = () => ({
        title: {
            text: "Daily Count",
            subtext: "Number of increases everyday"
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: ["Cases", "Hospitalized", "Deaths"],
            icon: "roundRect",
            left: "65%"
        },
        grid: {
            top: "25%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: dates
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                name: "Cases",
                type: "line",
                smooth: true,
                lineStyle: {
                    color: Constants.casesColor
                },
                itemStyle: {
                    color: Constants.casesColor
                },
                data: cases
            },
            {
                name: "Hospitalized",
                type: "line",
                smooth: true,
                lineStyle: {
                    color: Constants.hospColor
                },
                itemStyle: {
                    color: Constants.hospColor
                },
                data: hosp
            },
            {
                name: "Deaths",
                type: "line",
                smooth: true,
                lineStyle: {
                    color: Constants.deathsColor
                },
                itemStyle: {
                    color: Constants.deathsColor
                },
                data: deaths
            }
        ]
    });

    const classes = useStyles();

    return(        
        <div className={classes.root}>
            <div className={classes.chip_container}>
                <Chip
                    color="secondary" 
                    variant="outlined"
                    icon={<ErrorOutlineIcon />} 
                    size="small"
                    label="Due to delays in reporting,
                    recent data are incomplete."
                />
            </div>
            <Paper variant="outlined" className={classes.chart}>
                <ReactEcharts 
                    option={getOptions()}
                />
            </Paper>
        </div>
    )
}

export default TimeSeriesChart;