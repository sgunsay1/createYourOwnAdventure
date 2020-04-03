import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

function NavBar({
  classes,
  children,
}) {

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar align="center" className={classes.Toolbar}>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default withStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary,
  },
  Toolbar: {
    margin: "auto",
  }
}))(NavBar)
