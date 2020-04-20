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
            <li> <Link style={{ color: '#fff' }} to="/">Home</Link> </li>
            <li> <Link style={{ color: '#fff' }} to="/centers">Bubblegum</Link> </li>
            <li> <Link style={{ color: '#fff' }} to="/shoelaces">Shoelaces</Link> </li>
          </DrawerOptions>

        </DrawerContainer>

        <div style={{ flex: '1 1 0%', background: 'red', display: 'flex', flexDirection: 'column', marginLeft: '260px', width: '100%' }} >
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
