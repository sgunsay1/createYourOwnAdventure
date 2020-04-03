import React from 'react';

import './App.css';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import CreateYourOwnStory from './createStory'

const colors = {
  blue: '#00a69c',
  yellow: '#fdb813',
  red: '#eb432e',
}

let theme = createMuiTheme({
  palette: {
    primary: { main: colors.red },
    secondary: { main: colors.blue },
    others: {
      white: 'white',
      gray: 'lightgray',
    },
    status: {
      error: colors.red,
      warning: colors.yellow,
    },
    influence: {
      connect: colors.blue,
      convey: colors.yellow,
      convince: colors.red,
    },
  },
  status: {
    danger: 'yellow',
  },
  typography: {
    fontFamily: [
      '"Poppins"',
      '"Roboto"',
      'sans-serif',
    ].join(',')
  },
})

theme = responsiveFontSizes(theme)

function App() {
  return (
    <CreateYourOwnStory />
  )
}

export default App;
