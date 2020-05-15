import React from 'react'

import { Classes, AppBarContainer, ToolbarContainer, Logo, LogoText } from './styles'

import { IoMdPlanet } from 'react-icons/io'
import SearchComp from '../search'
import Profile from '../profile'

export default function AppBars () {
  const classes = Classes()

  return (
    <AppBarContainer
      position='fixed'
      className={classes.zIndex}
    >
      <ToolbarContainer>

        <Logo>
          <IoMdPlanet size={26} />
          <LogoText variant="h6">Jupter</LogoText>
        </Logo>

        <SearchComp />

        <Profile />

      </ToolbarContainer>
    </AppBarContainer>
  )
}
