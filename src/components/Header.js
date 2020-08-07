import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Link from "@material-ui/core/Link"
import Logo from "../assets/images/logo-2.0.png"
import SubscribeModal from "./SubscribeModal"

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: "100%",
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbar: {
    justifyContent: "space-between",
    overflowX: "auto",
    padding: theme.spacing(2),
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

const Header = ({ props, sections }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Toolbar component="nav" variant="dense" className={classes.toolbar}>
        <img
          src={Logo}
          alt="Stop Arthritis Foundation"
          className={classes.logo}
        />

        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
        <SubscribeModal/>
      </Toolbar>
    </React.Fragment>
  )
}

export default Header
