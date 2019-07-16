import React from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core'

interface PropTypes {
  classes: any
}

const Header = ({ classes }: PropTypes) => {
  return <div className={classes.root}>Header</div>
}

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: palette.background.default,
      color: palette.primary.main,
    },
  })

export default withStyles(styles)(Header)
