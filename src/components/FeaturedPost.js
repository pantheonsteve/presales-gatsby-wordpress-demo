import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  media: {
    height: "100%",
  },
  subtitle: {
    paddingBottom: theme.spacing(2),
  },
  cardContent: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(10),
  },
  cardActions: {
    padding: theme.spacing(6),
    paddingRight: 0,
    paddingTop: 0,
  },
}))

const FeaturedPost = ({ title, description, date, tag, image, imageCaption }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Grid container spacing={12}>
        {/* FeaturedPost Content */}
        <Grid item md={6}>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className={classes.subtitle}
            >
              {tag}
            </Typography>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button variant="contained" color="primary">
              Read More
            </Button>
          </CardActions>
        </Grid>
        {/* FeaturedPost Image */}
        <Grid item md={6}>
          <CardMedia
            className={classes.media}
            image={image}
            title={imageCaption}
          />
        </Grid>
      </Grid>
    </Card>
  )
}

export default FeaturedPost