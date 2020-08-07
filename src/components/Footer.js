import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Logo from "../assets/images/logo-2.0.png"

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  logo: {
    maxWidth: "100%",
    margin: theme.spacing(0, 0, 2, 0),
  },
  footerContent: {
    margin: theme.spacing(4, 0),
  },
}))

const Footer = ({ description, contactInfo }) => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <img
            src={Logo}
            alt="Stop Arthritis Foundation"
            className={classes.logo}
          />
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </Grid>
        <Grid item md={2} />
        <Grid item md={5} className={classes.footerContent}>
          <Typography variant="subtitle1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {contactInfo.map((info) => (
              <p>{info}</p>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
