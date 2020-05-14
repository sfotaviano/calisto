import React from 'react'

import { SearchCustom, SearchIcon, InputSearch } from './styles'

import { FiSearch } from 'react-icons/fi'

export default function SearchComp () {
  return (
    <SearchCustom>
      <SearchIcon>
        <FiSearch size={20} color='#a7adc9'/>
      </SearchIcon>
      <InputSearch
        type='search'
        placeholder="Busca..."
      />
    </SearchCustom>
  )
}
