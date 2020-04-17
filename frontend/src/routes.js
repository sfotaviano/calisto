import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/login'
import Main from './pages/main'
import NewUser from './pages/forms/user'
import NewCenter from './pages/forms/center'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/home" component={Main} />
        <Route path="/users/new" component={NewUser} />
        <Route path="/centers/new" component={NewCenter} />
      </Switch>
    </BrowserRouter>
  )
}
