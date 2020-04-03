import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { red, green, blue, orange, purple } from "@material-ui/core/colors";

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
          <RenderBtn {...el} key={'button' + i} colorID={i} clickHandler={clickHandler} />
        ))
      }
    </div>
  )
}

function RenderBtn({ btnTxt, path, clickHandler, colorID }) {
  switch (colorID % 5) {
    case 0: return <div><RedBtn variant="contained" color="primary" onClick={() => clickHandler(path)}>{btnTxt}</RedBtn></div>
    case 1: return <div><GreenBtn variant="contained" color="primary" onClick={() => clickHandler(path)}>{btnTxt}</GreenBtn></div>
    case 2: return <div><BlueBtn variant="contained" color="primary" onClick={() => clickHandler(path)}>{btnTxt}</BlueBtn></div>
    case 3: return <div><OrangeBtn variant="contained" color="primary" onClick={() => clickHandler(path)}>{btnTxt}</OrangeBtn></div>
    case 4: return <div><PurpleBtn variant="contained" color="primary" onClick={() => clickHandler(path)}>{btnTxt}</PurpleBtn></div>
    default: return
  }

}

const RedBtn = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700]
    }
  }
}))(Button);

const GreenBtn = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
}))(Button);


const BlueBtn = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700]
    }
  }
}))(Button);


const OrangeBtn = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700]
    }
  }
}))(Button);

const PurpleBtn = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  }
}))(Button);

export default withStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))(BtnContainer)




