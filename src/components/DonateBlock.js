import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import grey from "@material-ui/core/colors/grey"
import heartIcon from "../assets/images/donation-icon.png"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: grey[100],
    margin: theme.spacing(0, 0, 3, 0),
  },
  icon: {
    paddingBottom: theme.spacing(1),
  },
  subtitle: {
    padding: theme.spacing(2),
  },
  donateComponent: {
    padding: theme.spacing(2, 20),
    textAlign: "center",
  },
}))

const DonateBlock = ({ title, description, subtitle }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        className={classes.donateComponent}
      >
        <img src={heartIcon} alt="heart icon" className={classes.icon} />
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" paragraph>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Typography>
        <Button variant="contained" color="primary">
          Donate Today
        </Button>
        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.subtitle}
        >
          {subtitle}
        </Typography>
      </Grid>
    </Card>
  )
}

export default DonateBlock
