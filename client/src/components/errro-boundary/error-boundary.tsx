import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        error_image_overlay: {
            height: "60vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        error_image_container: {
            display: "inline-block",
            backgroundImage: `url("https://i.imgur.com/yW2W9SC.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "40vh",
            height: "40vh"
        },
        error_image_text: {
            fontSize: "28px",
            color: "#2f8e89"
        }
    })
);

const ErrorBoundary: React.FC = () => {
    const classes = useStyles();
    return(
        <div className={classes.error_image_overlay}>
            <div className={classes.error_image_container}></div>
            <h2 className={classes.error_image_text}>Sorry, this page is broken</h2>
        </div>
    );
}

export default ErrorBoundary;