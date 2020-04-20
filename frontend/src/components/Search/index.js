import React from 'react'

import {
  Container,
  InputSearch
} from './styles'

import { FiSearch } from 'react-icons/fi'

export const Search = () => {
  return (
    <Container>
      <FiSearch />
      <InputSearch placeholder='Search Object' type='search' />
    </Container>
  )
}
