import React from 'react'

import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import { FiBriefcase, FiPlus } from 'react-icons/fi'
import { Root, Container, Grid, Card } from './styles'

import Header from '../header'

const arr = [
  {
    name: 'Bebedouro-SP',
    centerId: '002',
    phone: '17 3344 1000',
    address: 'Rua são Joao n30',
    cnpj: '45236791000196',
    centerType: 'DCC',
    ip: 'DHCP',
    centerAdmin: 'Samuel Fernandes O'
  },
  {
    name: 'Bebedouro-SP',
    centerId: '002',
    phone: '17 3344 1000',
    address: 'Rua são Joao n30',
    cnpj: '45236791000196',
    centerType: 'DCC',
    ip: 'DHCP',
    centerAdmin: 'Samuel Fernandes O'
  },
  {
    name: 'Bebedouro-SP',
    centerId: '002',
    phone: '17 3344 1000',
    address: 'Rua são Joao n30',
    cnpj: '45236791000196',
    centerType: 'DCC',
    ip: 'DHCP',
    centerAdmin: 'Samuel Fernandes O'
  },
  {
    name: 'Bebedouro-SP',
    centerId: '002',
    phone: '17 3344 1000',
    address: 'Rua são Joao n30',
    cnpj: '45236791000196',
    centerType: 'DCC',
    ip: 'DHCP',
    centerAdmin: 'Samuel Fernandes O'
  },
  {
    name: 'Bebedouro-SP',
    centerId: '002',
    phone: '17 3344 1000',
    address: 'Rua são Joao n30',
    cnpj: '45236791000196',
    centerType: 'DCC',
    ip: 'DHCP',
    centerAdmin: 'Samuel Fernandes O'
  },
  {
    name: 'Bebedouro-SP',
    centerId: '002',
    phone: '17 3344 1000',
    address: 'Rua são Joao n30',
    cnpj: '45236791000196',
    centerType: 'DCC',
    ip: 'DHCP',
    centerAdmin: 'Samuel Fernandes O'
  },
  {
    name: 'Bebedouro-SP',
    centerId: '002',
    phone: '17 3344 1000',
    address: 'Rua são Joao n30',
    cnpj: '45236791000196',
    centerType: 'DCC',
    ip: 'DHCP',
    centerAdmin: 'Samuel Fernandes O'
  }
]

export default function GridCenter () {
  return (
    <Root>
      <Header
        headerText="Centros"
        buttonText="adicionar"
        tooltip="Novo centro"
        buttonIcon={<FiPlus size={22} />}
        handleClick={() => { alert('Mensagem de "Centros"') }}
      />
      <Container>
        <Grid>
          {arr.map((item, index) => {
            return (
              <Card
                key={index}
                variant="outlined"
              >
                <CardContent>

                  <div item>
                    <Avatar>
                      <FiBriefcase size={22} />
                    </Avatar>
                  </div>

                  <div item>
                    <Typography variant="h5" component="h2">{item.name}</Typography>
                    <Typography variant="body2" component="p">Centro: {item.centerId}</Typography>
                    <Typography variant="body2" component="p">Telefone: {item.phone}</Typography>
                    <Typography variant="body2" component="p">Endereço: {item.address}</Typography>
                    <Typography variant="body2" component="p">CNPJ: {item.cnpj}</Typography>
                    <Typography variant="body2" component="p">Departamento: {item.centerType}</Typography>
                    <Typography variant="body2" component="p">IP: {item.ip}</Typography>
                    <Typography variant="body2" component="p">Administrativo: {item.centerAdmin}</Typography>
                  </div>

                </CardContent>
              </Card>
            )
          })}
        </Grid>
      </Container>
    </Root>
  )
}
