import React from "react";
import CardComponent from "../card-component";
import { Grid } from "@material-ui/core";
import {Constants, formatNum} from "../../constants";
import { SummaryProps } from "../../types/covid19"; 

const Summary: React.FC<SummaryProps> = (props) => {
    const {cases, increase, hospitalized, deaths} = props.summaryData;
    
    const computeRate = (total: number, number: number):string => {
        const percentage = (number / total) * 100;
        return percentage.toFixed(1);
    }

    const hRate = computeRate(parseFloat(cases), parseFloat(hospitalized));
    const dRate = computeRate(parseFloat(cases), parseFloat(deaths));

    const increaseNum = parseInt(increase);
    let increaseResult = "0";
    if(increaseNum > 0) {
        increaseResult = `+ ${formatNum(increaseNum)}`;
    } else if(increaseNum < 0) {
        increaseResult = `- ${formatNum(increaseNum)}`;
    }
    return(
        <Grid container spacing={6}>
            <CardComponent 
                title="TOTAL CASES"
                number={formatNum(cases)}
                rate={increaseResult}
                rateText={" cases"}
                rateColor={parseInt(increase) > 0 ? Constants.pinkColor : Constants.greenColor}
            />
            <CardComponent 
                title="HOSPITALIZED"
                number={formatNum(hospitalized)}
                rate={`${hRate}%`}
                rateText={" of total cases"}
                rateColor={Constants.hospColor}
            />
            <CardComponent 
                title="DECEASED"
                number={formatNum(deaths)}
                rate={`${dRate}%`}
                rateText={" of total cases"}
                rateColor={Constants.deathsColor}
            />
        </Grid>
    );
}

export default Summary;