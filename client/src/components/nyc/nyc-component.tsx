import React, { useState, useEffect } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Summary from "../summary/summary-component";
import TitleComponent from "../title-component";
import ZCTest from "../test-component";
import TimeSeriesChart from "../time-series-chart";
import BarCharts from "../bar-chart-component";
import axios from "axios";
import { AppData } from "../../types/covid19";
import ErrorBoundary from "../errro-boundary/error-boundary";
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, Theme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        spinner: {
            height: "60vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    })
);

const NycDashboard: React.FC = () => {
    const classes = useStyles();
    const [data, setData] = useState<AppData | undefined>();
    const [hasError, setHasError] = useState(false);
    
    useEffect(() => {
        axios({
            url: "data",
            method: "GET"
        }).then(res => {

            const tempData = res.data;
            const summary = tempData.summary;
            const genderData = tempData.genderData;
            const boroData = tempData.boroData.value
                .map((item: string[], index: number) => {
                    return item[index];
                });
            const dailyData = tempData.dailyData.value
                .map((item: string[], index: number) => {
                    return item[index];
                });
            const testingData = tempData.testingData.value
                .map((item: string[], index: number) => {
                    return item[index];
                });

            setData({
                summary,
                genderData,
                boroData,
                dailyData,
                testingData
            });
            setHasError(false);
        }).catch(error => {
            setData(undefined);
            setHasError(true);
            console.log(error);
        }) 
    }, []);   

    if(hasError) {
        return(
            <ErrorBoundary />
        )
    };

    if(data) {
        const summaryData = data.summary;
        const dailyData = data.dailyData;
        const genderData = data.genderData;
        const boroData = data.boroData;
        const testingData = data.testingData;

        return(
            <div>
                <Container maxWidth="md">
                    <CssBaseline />
                    <TitleComponent 
                        name={"NYC"} 
                        lastUpdated={summaryData.lastUpdated} 
                        datasource={"NYC DOH"}
                        link={"https://github.com/nychealth/coronavirus-data"}
                    />
                    <Summary summaryData={summaryData} />
                    <TimeSeriesChart dailyData={dailyData} />
                    <BarCharts 
                        genderData={genderData} 
                        boroData={boroData}
                    />
                    <ZCTest testingData={testingData} />
                </Container>
            </div>
    
        )
    } else {
        return(
            <Container maxWidth="md">
                <div className={classes.spinner}>
                    <CircularProgress  />
                </div>                
            </Container>
        )
    }
}

export default NycDashboard;