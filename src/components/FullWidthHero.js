import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import HeroImage from "../assets/images/heroimage.jpeg"
import { positions } from "@material-ui/system"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 0, 0, 3),
  },
  fullWidthHero: {
    height: "500px",
    position: "relative",
    margin: theme.spacing(0, 0, 4, 0),
    backgroundImage: "url(" + HeroImage + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlayBox: {
    position: "absolute",
    bottom: "0",
    right: "0",
    backgroundColor: "rgba(224, 224, 224, 0.9)",
    color: theme.palette.grey[900],
    height: "50%",
    width: "50%",
  },
  overlayText: {
    margin: theme.spacing(4, 10),
  },
  button: {
    margin: theme.spacing(2, 0, 0, 0),
  },
}))

const FullWidthHero = ({ props }) => {
  const classes = useStyles()

  return (
    <Box md={12} className={classes.fullWidthHero}>
      <Box md={6} className={classes.overlayBox}>
        <Box className={classes.overlayText}>
          <Typography variant="h4" gutterBottom>
            Types of Arthritis
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            There are more than 100 different kinds of arthritis and related
            conditions. Learn more about the major forms of arthritis and the
            treatment options available.
          </Typography>
          <Button variant="contained" color="primary" className={classes.button}>
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FullWidthHero
