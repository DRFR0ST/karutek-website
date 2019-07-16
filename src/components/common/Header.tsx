import React from 'react'
import {
  withStyles,
  createStyles,
  Theme,
  Button,
  Typography,
} from '@material-ui/core'

interface PropTypes {
  classes: any
}

const Header = ({ classes }: PropTypes) => {
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h1" className={classes.logo}>
          KARUTEK
        </Typography>
        <Typography paragraph className={classes.slogan}>
          mesmerizing cool slogan here
        </Typography>
        <div className={classes.menu}>
          <Button
            className={classes.menuItem}
            variant="outlined"
            color="primary">
            About me
          </Button>
          <Button
            className={classes.menuItem}
            variant="outlined"
            color="secondary">
            Experience
          </Button>
          <Button
            className={classes.menuItem}
            variant="outlined"
            color="primary">
            Contact
          </Button>
          <Button
            className={classes.menuItem}
            variant="outlined"
            color="secondary">
            Galery
          </Button>
        </div>
      </div>
    </div>
  )
}

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '30vh',
      padding: '0 20vw',
      textAlign: 'center',
    },
    logo: {
      color: palette.primary.main,
      fontWeight: 'bold',
      fontSize: '3.5rem',
      margin: '0 !important',
      fontFamily: "'Syncopate'",
    },
    slogan: {
      margin: '0em 0 1rem 0',
      opacity: 0.25,
      fontSize: '1.25rem',
      color: '#000',
    },
    menu: {
      borderTop: '1px solid #eee',
      padding: '1rem 0',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    menuItem: {
      margin: '0.5rem',
    },
  })

export default withStyles(styles)(Header)
