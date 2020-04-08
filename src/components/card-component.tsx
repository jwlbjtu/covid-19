import React from "react";
import { Grid, Typography, Paper, Theme, createStyles, makeStyles } from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

type CardProps = {
    title: string,
    number: string,
    rate?: string,
    rateText?: string,
    rateColor?: string,
    upIcon?: boolean,
    downIcon?: boolean
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

    let icon = null;
    if(props.upIcon) {
        icon = (
            <ArrowUpwardIcon />
        )
    } else if(props.downIcon) {
        icon = (
            <ArrowDownwardIcon />
        )
    }

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
                        {icon}
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default CardComponent;