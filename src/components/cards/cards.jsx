import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography } from "@material-ui/core/";
import styles from "./cards.module.scss";
import CountUp from "react-countup";
import cx from "classnames";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    fontWeight: "200",
    textTransform: "capitalize",
    fontSize: "1.5rem",
    color: "#4a4750ab",
    margin: "0",
  },
  numbers: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  date: {
    color: "#4a4750ab",
  },
  info: {
    padding: ".2rem 0",
    lineHeight: "1.5rem",
    color: "#4a4750ab",
    textTransform: "capitalize",
  },
  button: {
    padding: "0",
    right: "5%",
    backgroundColor: "#fff54b70",
  },
});

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles();
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div>
      <Button className={classes.button} variant="contained">
        <Link to="/homePage">Home</Link>
      </Button>
      <Grid container spacing={3} justify="center">
        <Grid
          sx={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              infected
            </Typography>
            <CountUp
              style={{ color: "#1f4287" }}
              className={classes.numbers}
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
            <Typography className={classes.date} style={{ padding: ".2rem 0" }}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography className={classes.info}>
              Number of Active Cases with covid
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          sx={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              recovered
            </Typography>
            <CountUp
              style={{ color: "#2cb978" }}
              className={classes.numbers}
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
            <Typography className={classes.date}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography className={classes.info}>
              number of Recoverd cases with covid
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          sx={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              deaths
            </Typography>
            <CountUp
              style={{ color: "#e41749" }}
              className={classes.numbers}
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
            <Typography className={classes.date}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography className={classes.info}>
              number of Deaths with codv
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
