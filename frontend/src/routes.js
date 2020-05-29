import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { FiBriefcase, FiUsers, FiMonitor, FiPrinter, FiCreditCard } from 'react-icons/fi'

import Auth from './pages/auth'
import NavDrawer from './pages/drawer'
import Table from './components/Table'
/* import NewUser from './pages/forms/user'
import NewCenter from './pages/forms/center' */

import Centers from './components/centers'
import Users from './components/users'
import Equipamentos from './components/equipamentos'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={NavDrawer} />
        <Route path="/auth" component={Auth} />
        <Route path="/main" component={NavDrawer} />
        {/*         <Route path="/users/new" component={NewUser} />
        <Route path="/centers/new" component={NewCenter} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export const routesDrawer = [
  {
    path: '/main/centers',
    sidebarName: 'Centros',
    exact: true,
    icon: FiBriefcase,
    component: Centers,
    divider: false,
    subHeader: ''
  },
  {
    path: '/main/equipamentos',
    sidebarName: 'Equipamentos',
    exact: true,
    icon: FiMonitor,
    component: Equipamentos,
    divider: false,
    subHeader: 'Objetos'
  },
  {
    path: '/main/impressoras',
    sidebarName: 'Impressoras',
    exact: true,
    icon: FiPrinter,
    component: Equipamentos,
    divider: false,
    subHeader: ''
  },
  {
    path: '/main/pinpad',
    sidebarName: 'Pin Pad',
    exact: true,
    icon: FiCreditCard,
    component: Table,
    divider: true,
    subHeader: ''
  },
  {
    path: '/main/users',
    sidebarName: 'Usuarios',
    exact: true,
    icon: FiUsers,
    component: Users,
    divider: false,
    subHeader: ''
  }
]
