import styled from 'styled-components'

import { InputBase } from '@material-ui/core'

export const SearchCustom = styled.div`
  width: 920px;
  min-width: 270px;
  height: 35px;
  opacity: 0.4;
  background: white;
  border-radius: 5px;

  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.6;
  }
`
export const SearchIcon = styled.div`
  position: absolute;
  margin-left: 20px;
  display:flex;
  justify-content: center;
  align-items:center;
`
export const InputSearch = styled(InputBase)`
  width: 100%;
  padding-left: 60px;
  padding-right: 10px;
`
