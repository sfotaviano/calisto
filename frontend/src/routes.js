import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { FiInbox, FiMail } from 'react-icons/fi'

import Auth from './pages/auth'
import NavDrawer from './pages/drawer'
import NewUser from './pages/forms/user'
import NewCenter from './pages/forms/center'

import Centers from './components/centers'
import Users from './components/users'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={NavDrawer} />
        <Route path="/auth" component={Auth} />
        <Route path="/main" component={NavDrawer} />
        <Route path="/users#/ew" component={NewUser} />
        <Route path="/centers/new" component={NewCenter} />
      </Switch>
    </BrowserRouter>
  )
}

export const routesDrawer = [
  {
    path: '/main/centers',
    sidebarName: 'Centros',
    exact: true,
    icon: FiInbox,
    component: Centers
  },
  {
    path: '/main/users',
    sidebarName: 'Usuarios',
    exact: true,
    icon: FiMail,
    component: Users
  }
]
