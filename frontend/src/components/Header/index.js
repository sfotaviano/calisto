import React from 'react'

import { Container, HeaderTitle, ButtonRemoveHeader } from './styles'
import { FiCodesandbox, FiX } from 'react-icons/fi'

const Header = () => {
  return (
    <Container>

      <HeaderTitle>
        <FiCodesandbox style={{ marginRight: '10px' }} size={22}/>
          Store
      </HeaderTitle>

      <ButtonRemoveHeader>
        <FiX size={20} />
        Remover moldura
      </ButtonRemoveHeader>

    </Container>
  )
}

export default Header

export const Hide = true
