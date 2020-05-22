import React from 'react'
import { Classes, HeaderDivider } from './styles'
import { routesDrawer } from '../../routes'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  CssBaseline,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'

import AppBar from '../../components/toolbar/appBar'
import Header from '../../components/header'

export default function DrawerComponent () {
  const classes = Classes()

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar />

        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{ paper: classes.drawerPaper }}
        >
          <Toolbar />
          <List>
            {routesDrawer.map((prop, key) => (
              <Link to={prop.path} style={{ textDecoration: 'none', color: '#333' }} key={key}>
                <ListItem button>
                  <ListItemIcon><prop.icon/></ListItemIcon>
                  <ListItemText primary={prop.sidebarName}/>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </Drawer>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '40px' }}>
          <Toolbar />
          <div className={classes.content}>
            <Switch>
              {routesDrawer.map((route, index) => (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  nodeId={route.nodeId}
                />
              ))}
            </Switch>

          </div>
        </div>

      </div>
    </Router>
  )
}
