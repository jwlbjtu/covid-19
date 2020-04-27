import React from "react";
import { Grid } from "@material-ui/core";
import CompareChart from "./compare-chart";
import Boro from "./boro-component";
import { BarChartProps } from "../types/covid19";

const BarCharts: React.FC<BarChartProps> = (props) => {
    return(
        <Grid container spacing={1} style={{marginTop: 3}}>
            <Grid item xs={12} sm={12} md={5}>                        
                <CompareChart genderData={props.genderData}/>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Boro boroData={props.boroData} />
            </Grid>
        </Grid>  
    )
}

export default BarCharts;