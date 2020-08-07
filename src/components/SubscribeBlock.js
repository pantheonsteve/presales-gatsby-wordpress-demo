import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import SubscribeImage from "../assets/images/subscribe.jpeg"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { useFormik } from "formik"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 0, 4, 0),
    padding: theme.spacing(3),
  },
  media: {
    height: "100%",
  },
  cardContent: {
    margin: theme.spacing(0, 8, 0, 4),
  },
  newsletterForm: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(2, 1),
    height: "65%",
  },
}))

const SubscribeBlock = ({ title, description, caption }) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Grid container spacing={24}>
        <Grid item md={6}>
          <CardMedia
            className={classes.media}
            image={SubscribeImage}
            title="Notebooks open on a lab table."
          />
        </Grid>
        <Grid item md={6}>
          <CardContent className={classes.cardContent}>
            <Typography component="h2" variant="h4" gutterBottom>
              {title}
            </Typography>
            <Grid item md={12}>
              <Typography variant="subtitle1" paragraph>
                {description}
              </Typography>
            </Grid>

            <Grid item md={12} className="newsletterForm">
              <form
                className={classes.form}
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Grid container>
                  <Grid item xs>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      htmlFor="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      margin="0"
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
                <Typography variant="caption">{caption}</Typography>
              </form>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default SubscribeBlock
