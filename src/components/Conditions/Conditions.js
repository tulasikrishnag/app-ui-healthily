import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Typography,
  Card,
  CircularProgress,
  Link,
} from "@material-ui/core";
import Header from "../shared/Header/Header";
import { useDispatch } from "react-redux";
import { pushConditionsToStore } from "./conditions.slice";
import { conditionsApi } from "./conditionsApi";
import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#EFF5FB",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#F2F2F2",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#E0F8F7",
    },
  },
  imageSize: {
    maxWidth: "100%",
    height: "auto",
  },

  card: {
    paddingTop: "10px",
    backgroundColor: "#FAFAFA",
  },
  spinner: {
    paddingTop: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "inherit",
    backgroundColor: "white",
  },
}));

const ConditionsUI = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const {label,snippet,image} = props.conditionDetails
  return (
    <Box className={classes.boxContainer}>
      <Card className={classes.card}>
        <img
          src={image}
          className={classes.imageSize}
          alt="Failed to load"
        />

        <Typography>Title: {label}</Typography>
        <Typography noWrap>{snippet}</Typography>
        <Link onClick={() => history.push(`/conditionDetails/${label}`)}>
          Show more
        </Link>
      </Card>
    </Box>
  );
};

const Conditions = () => {
  const classes = useStyles();
  const [conditionsData, setConditionsData] = useState([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(true);

  const dispatch = useDispatch();

  const conditionsDetails = useSelector((state) => state.conditions.conditions);

  useEffect(() => {
    const fetchConditions = async () => {
      const response = await conditionsApi.getConditions();
      dispatch(pushConditionsToStore(response.conditions));
      setConditionsData(response.conditions);
    };
    if (conditionsDetails.length === 0) {
      fetchConditions();
    } else {
      setConditionsData(conditionsDetails);
    }
    const loaderTimeout = setTimeout(() => setShowLoadingSpinner(false), 1000);

    return () => {
      window.clearTimeout(loaderTimeout);
    };
  }, [dispatch, conditionsDetails]);

  return (
    <>
      <Header />
      {showLoadingSpinner ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.root}>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="flex-start"
            justify="flex-start"
          >
            {conditionsData.map(
              (el) =>
                el.image !== undefined &&
                el.snippet !== undefined && (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={conditionsData.indexOf(el)}
                  >
                    <ConditionsUI
                      conditionDetails={{image:el.image,snippet:el.snippet,label:el.label}}
                     
                    />
                  </Grid>
                )
            )}
          </Grid>
        </div>
      )}
    </>
  );
};

export default withRouter(Conditions);
