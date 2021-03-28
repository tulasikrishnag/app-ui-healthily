import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  bg: {
   backgroundColor:"#FF8000"
  },
  tg:
  {
    color: "#1C1C1C"
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <AppBar className={classes.bg}>
          <Toolbar>
            <Typography variant="h4" className={classes.tg}>
              Healthily
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
}
