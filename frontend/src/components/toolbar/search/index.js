import React from 'react'

import { Container, SearchIcon, SearchInput } from './styles'

import { FiSearch } from 'react-icons/fi'

export default function SearchComp () {
  return (
    <Container>
      <SearchIcon>
        <FiSearch size={20} color='#a7adc9'/>
      </SearchIcon>
      <SearchInput
        type='search'
        placeholder="Procurar..."
      />
    </Container>
  )
}
