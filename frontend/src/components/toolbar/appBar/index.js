import React from 'react'

import { Classes, AppBarContainer, ToolbarContainer, Logo, Link } from './styles'

import SearchComp from '../search'
import Profile from '../profile'
import { FiGlobe } from 'react-icons/fi'

export default function AppBars () {
  const classes = Classes()

  return (
    <AppBarContainer
      position='fixed'
      className={classes.zIndex}
    >
      <ToolbarContainer>

        <Logo>
          <FiGlobe size={26} />
          <Link to='/main'>Jupter</Link>
        </Logo>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <SearchComp />
        </div>

        <Profile />

      </ToolbarContainer>
    </AppBarContainer>
  )
}
