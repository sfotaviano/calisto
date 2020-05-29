import React, { useState } from 'react'
import { Classes } from './styles'
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
  ListSubheader
} from '@material-ui/core'

import AppBar from '../../components/toolbar/appBar'

export default function DrawerComponent () {
  const classes = Classes()
  const [selectedItem, setSelectedItem] = useState()

  const handleListItemClick = (index) => {
    setSelectedItem(index)
  }

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
              <Link
                to={prop.path}
                key={key}
                style={{ textDecoration: 'none', color: '#333' }}
              >
                <ListSubheader>{prop.subHeader}</ListSubheader>
                <ListItem
                  button
                  divider={prop.divider}
                  selected={selectedItem === key}
                  onClick={() => handleListItemClick(key)}
                >
                  <ListItemIcon><prop.icon size={22}/></ListItemIcon>
                  <ListItemText primary={prop.sidebarName}/>
                </ListItem>
              </Link>
            ))}
          </List>
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
                />
              ))}
            </Switch>
          </div>
        </div>

      </div>
    </Router>
  )
}
