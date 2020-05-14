import React from 'react'

import { Classes, AppBarContainer, ToolbarContainer, Logo, LogoText, ProfileMenu } from './styles'

import { IoMdPlanet, IoMdMenu } from 'react-icons/io'
import SearchComp from '../search'

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

        <ProfileMenu>
          <IoMdMenu size={24}/>
        </ProfileMenu>

      </ToolbarContainer>
    </AppBarContainer>
  )
}
