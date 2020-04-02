import React from 'react';

import { Container, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Navbar from './components/navbar'
import StoryDescription from './components/story'
import BtnContainer from './components/btnContainer'
let storyPaths = require('./components/storyPaths').default

class CreateYourOwnStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPath: storyPaths.get('startPath')
    }
  }

  clickHandler(path) {
    this.setState({ currentPath: storyPaths.get(path) })
  }

  render() {
    const {
      classes,
    } = this.props
    return (
      <Container maxWidth="lg" className="App">

        <Navbar>
          <Typography variant='h2'>Honor 2102 Create Your Own Adventure</Typography>
        </Navbar>
        <Paper className={classes.Paper}>
          <StoryDescription description={this.state.currentPath.storyText} />
          <BtnContainer className={classes.Btns} buttons={this.state.currentPath.buttons} clickHandler={(path) => this.clickHandler(path)} />
        </Paper>

      </Container>


    )
  }
}



export default withStyles(theme => ({

  Toolbar: {
    margin: "auto",
  },
  Paper: {
    padding: theme.spacing(5),
  },
  Btns: {
    padding: theme.spacing(5),
  },
}))(CreateYourOwnStory)