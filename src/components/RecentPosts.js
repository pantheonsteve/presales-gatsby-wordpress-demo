import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    height: "100%",
  },
  media: {
    height: 250,
  },
}))

const RecentPosts = ({ posts }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={4}>
      {posts.map((post) => (
        <Grid item md={4}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={post.image}
              title={post.imageCaption}
            />
            <CardContent>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
              >
                {post.tag}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.subtitle}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default RecentPosts
