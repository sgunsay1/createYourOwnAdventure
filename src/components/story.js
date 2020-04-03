import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';


function StoryDescription({
  classes,
  children,
  description,
}) {

  return (
    <Typography className={classes.spacing}>{description}</Typography>
  )
}


export default withStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  spacing: {
    // padding: theme.spacing(4)
    marginBottom: theme.spacing(5)
  }
}))(StoryDescription)
