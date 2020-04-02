import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

function BtnContainer({
  classes,
  children,
  buttons,
  clickHandler,
}) {

  return (
    <div className={classes.root}>
      {
        buttons.map((el, i) => (
          <RenderBtn {...el} key={'button' + i} clickHandler={clickHandler} />
        ))
      }
    </div>
  )
}

function RenderBtn({ btnTxt, path, clickHandler }) {
  return (
    <Button variant='contained' onClick={() => clickHandler(path)}>{btnTxt}</Button>
  )
}

export default withStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))(BtnContainer)




