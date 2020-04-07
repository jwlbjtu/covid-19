import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Summary from "../summary/summary-component";
import TitleComponent from "../title-component";
import summaryData from "../../data/nyc/summary.json";
import ZCTest from "../test-component";
import TimeSeriesChart from "../time-series-chart";
import BarCharts from "../bar-chart-component";

const NycDashboard: React.FC = () => {
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
                <TimeSeriesChart />
                <BarCharts />
                <ZCTest />
            </Container>
        </div>

    )
}

export default NycDashboard;