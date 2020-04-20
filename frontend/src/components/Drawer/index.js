import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  Container,
  DrawerHeaderDetails,
  ButtonPower,
  DrawerHeader,
  DrawerContainer,
  DrawerOptions,
  DrawerOptionDetails
} from './styles'

import { routes } from './options'
import { Search } from '../Search'
import { FiLayers, FiPower } from 'react-icons/fi'

export default function Drawer () {
  return (
    <Router>
      <Container>
        <DrawerContainer>

          <DrawerHeader>
            <FiLayers style={{ marginRight: '10px' }} size={24} />
            Calisto
          </DrawerHeader>

          <DrawerOptions>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/bubblegum">Bubblegum</Link> </li>
            <li> <Link to="/shoelaces">Shoelaces</Link> </li>
          </DrawerOptions>

        </DrawerContainer>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
          <DrawerHeaderDetails>
            <Search />
            <ButtonPower>
              <FiPower size={22} />
            </ButtonPower>
          </DrawerHeaderDetails>

          <DrawerOptionDetails>
            <Switch>
              {
                routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main/>}
                  />
                ))
              }
            </Switch>
          </DrawerOptionDetails>
        </div>

      </Container>
    </Router>
  )
}
