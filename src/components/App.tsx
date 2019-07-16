import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from 'components/pages'

interface CustomPaletteTypes {
  primary: Object
  secondary: Object
  tertiary: Object
  quaternary: Object
}

const customPalette: CustomPaletteTypes = {
  primary: {
    main: '#A7CECB',
    contrastText: '#fff',
  },
  secondary: {
    main: '#86BBD8',
    contrastText: '#fff',
  },
  tertiary: {
    main: '#F4AFB4',
    contrastText: '#fff',
  },
  quaternary: {
    main: '#FFE6E8',
    contrastText: '#fff',
  },
}

const theme = createMuiTheme({
  palette: {
    ...customPalette,
  },
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            basename={process.env.REACT_APP_BASENAME || '/'}
            path="/"
            exact
            component={Home}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
