import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider';


import MenuIcon from '@material-ui/icons/Menu'

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
