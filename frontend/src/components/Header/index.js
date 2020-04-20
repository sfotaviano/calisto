import React from 'react'

import { Container, HeaderTitle } from './styles'
import { FiCodesandbox } from 'react-icons/fi'

const Header = () => {
  return (
    <Container>

      <HeaderTitle>
        <FiCodesandbox style={{ marginRight: '10px' }} size={22}/>
        Store
      </HeaderTitle>
    </Container>
  )
}

export default Header
