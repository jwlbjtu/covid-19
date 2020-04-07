import React from "react";
import { Grid } from "@material-ui/core";
import CompareChart from "./compare-chart";
import Boro from "./boro-component";

const BarCharts = () => {
    return(
        <Grid container spacing={1} style={{marginTop: 3}}>
            <Grid item sm={5}>                        
                <CompareChart />
            </Grid>
            <Grid item sm={7}>
                <Boro />
            </Grid>
        </Grid>  
    )
}

export default BarCharts;