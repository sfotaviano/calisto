import React, { Component } from 'react'

import { Container, CardDetails, Title, Description } from './styles'

const arr = [
  {
    title: 'Bebedouro-SP',
    center: 'Centro 002',
    dep: 'Departamento DCC',
    cnpj: 'CNPJ: 45236791000196',
    adm: 'Assistente ADM: Ricardo neves'
  },
  {
    title: 'Bebedouro-SP',
    center: 'Centro 002',
    dep: 'Departamento DCC',
    cnpj: 'CNPJ: 45236791000196',
    adm: 'Assistente ADM: Ricardo neves'
  },
  {
    title: 'Bebedouro-SP',
    center: 'Centro 002',
    dep: 'Departamento DCC',
    cnpj: 'CNPJ: 45236791000196',
    adm: 'Assistente ADM: Ricardo neves'
  },
  {
    title: 'Bebedouro-SP',
    center: 'Centro 002',
    dep: 'Departamento DCC',
    cnpj: 'CNPJ: 45236791000196',
    adm: 'Assistente ADM: Ricardo neves'
  },
  {
    title: 'Bebedouro-SP',
    center: 'Centro 002',
    dep: 'Departamento DCC',
    cnpj: 'CNPJ: 45236791000196',
    adm: 'Assistente ADM: Ricardo neves'
  },
  {
    title: 'Bebedouro-SP',
    center: 'Centro 002',
    dep: 'Departamento DCC',
    cnpj: 'CNPJ: 45236791000196',
    adm: 'Assistente ADM: Ricardo neves'
  }
]

export default class ListCenter extends Component {
  render () {
    return (
      <Container onScrollCapture={true} >
        {
          arr.map((item, index) => {
            const ref = React.createRef()
            const handleClick = () =>
              ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            return (
              <CardDetails key={index} ref={ref} >
                <Title>{item.title}</Title>
                <Description>{item.center}</Description>
                <Description>{item.dep}</Description>
                <Description>{item.cnpj}</Description>
                <Description onClick={handleClick} >{item.adm}</Description>
              </CardDetails>
            )
          })
        }
      </Container>
    )
  }
}
