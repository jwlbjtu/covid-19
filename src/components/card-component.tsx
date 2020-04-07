import React from "react";
import { Grid, Typography, Paper, Theme, createStyles, makeStyles } from "@material-ui/core";

type CardProps = {
    title: string,
    number: string,
    rate?: string,
    rateText?: string,
    rateColor?: string
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: 10, 
            borderWidth: 2
        }
    })
);

const CardComponent: React.FC<CardProps> = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm>
            <Paper elevation={6} className={classes.root}>
                <Typography variant="subtitle1">
                    {props.title}
                </Typography>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography variant="h4">
                            {props.number}
                        </Typography>
                    </Grid>
                    <Grid item>                        
                        <Typography variant="body2" style={{paddingTop: 17}}>
                            <span style={{color: props.rateColor}}>{props.rate}</span>{props.rateText}
                        </Typography>
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default CardComponent;