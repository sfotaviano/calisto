import React from 'react'
import Classes from './styles'
import { routesDrawer } from '../../routes'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  InputBase,
  IconButton,
  Paper
} from '@material-ui/core'

import { IoMdPlanet, IoMdSearch } from 'react-icons/io'

export default function DrawerComponent () {
  const classes = Classes()

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={classes.appBar}
        >
          <Typography variant="h6" noWrap style={{ display: 'flex', alignItems: 'center', justifyItems: 'start' }}>
            <IoMdPlanet size={26} style={{ marginRight: 10 }} />
              Jupter
          </Typography>
          <Toolbar style={{ width: '100%', display: 'center', justifyContent: 'center' }}>

            <Paper className={classes.paperSearch}>
              <InputBase
                className={classes.input}
                type='search'
                placeholder="Buscar objetos"
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <IoMdSearch />
              </IconButton>
            </Paper>

          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{ paper: classes.drawerPaper }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <MenuList>
              {routesDrawer.map((prop, key) => (
                <Link to={prop.path} style={{ textDecoration: 'none', color: '#333' }} key={key}>
                  <MenuItem>
                    <ListItemIcon><prop.icon/></ListItemIcon>
                    <ListItemText primary={prop.sidebarName}/>
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
            <Divider />
          </div>
        </Drawer>

        <main classes={classes.content}>
          <Toolbar />
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
        </main>
      </div>
    </Router>
  )
}
