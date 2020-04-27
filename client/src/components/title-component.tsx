import React from "react";
import { Typography, Grid, Paper, makeStyles, Theme, createStyles, Chip } from "@material-ui/core";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

type titleProps = {
    name: string,
    lastUpdated: string,
    datasource: string,
    link: string
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4)
        },
        title: {
            marginTop: 20
        },
        date: {
            padding: 10, 
            borderWidth: 2
        },
        icon: {
            marginRight: 10
        }
    })
);

const TitleComponent: React.FC<titleProps> = (props) => {
    const classes = useStyles();
    return(
        <Grid container spacing={4} className={classes.root}>
            <Grid item xs={12} sm={9} className={classes.title}>
                <Typography variant="h5">
                    Dashboard of the COVID-19 Virus Outbreak in {props.name}
                </Typography>
                <Chip 
                    color="default" 
                    icon={<ErrorOutlineIcon />} 
                    size="small"
                    label={`Data source: ${props.datasource}`}
                    component="a"
                    href={props.link}
                    clickable
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Paper variant="outlined" className={classes.date}>
                    <Typography variant="subtitle1">
                        Last updated at:
                    </Typography>
                    <Typography variant="subtitle1">
                        <CalendarTodayIcon fontSize="small" className={classes.icon} />                                
                        {props.lastUpdated}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default TitleComponent;