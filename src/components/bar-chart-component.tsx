import React from "react";
import { Grid } from "@material-ui/core";
import CompareChart from "./compare-chart";
import Boro from "./boro-component";

const BarCharts = () => {
    return(
        <Grid container spacing={1} style={{marginTop: 3}}>
            <Grid item xs={12} sm={12} md={5}>                        
                <CompareChart />
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Boro />
            </Grid>
        </Grid>  
    )
}

export default BarCharts;