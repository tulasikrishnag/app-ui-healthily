import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button, InputLabel, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from "../shared/Header/Header";
const useStyles = makeStyles((theme) => ({
  boxContainer: {
    paddingTop: "100px",
    paddingLeft: "18px",
    paddingRight: "18px",
  },
  typoPadding: {
    paddingBottom: "20px",
    paddingTop: "10px",
  },
  button: {
    padding: "10px 170px 10px 170px",
  },
  imageContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));

export const ConditionsDetails = (props) => {
  const classes = useStyles();

  const conditionsDetails = useSelector((state) => state.conditions.conditions);
  const [filterData, setFilterData] = useState({});

  useEffect(() => {
    const searchData = conditionsDetails.find((el) => {
      return el.label === props.match.params.label;
    });
    setFilterData(searchData);
  }, [conditionsDetails, props.match.params.label]);
  const { snippet, label, image,synonyms } = filterData;
  const history = useHistory();
  return (
   
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Header />
      <Box className={classes.boxContainer} maxWidth="600px" display="row">
        <Box className={classes.imageContainer}>
          <img src={image} alt="Failed to load" />

          <InputLabel>Label</InputLabel>
          <Typography className={classes.typoPadding}>{label}</Typography>
          <InputLabel>Snippet</InputLabel>
          <Typography className={classes.typoPadding}>{snippet}</Typography>
          <InputLabel>Synonyms</InputLabel>
          <Typography className={classes.typoPadding}>{synonyms}</Typography>
        </Box>

        <Box className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.goBack()}
            data-testid="back-button-test-id"
          >
            BACK
          </Button>
        </Box>
      </Box>
    </Grid>
  
  );
};
