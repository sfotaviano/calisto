import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import { FiBriefcase } from 'react-icons/fi'
import Classes from './styles'

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
  const classes = Classes()
  return (

    <div className={classes.root}>
      <ul className={classes.grid} >

        {arr.map((item, index) => {
          return (

            <Card className={classes.card} key={index} variant="outlined">
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
      </ul>
    </div>
  )
}
