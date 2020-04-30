import React from 'react'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
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

export default function AutoGridNoWrap () {
  const classes = Classes()
  return (
    <div className={classes.root}>
      <ul className={classes.ul} >
        {arr.map((item, index) => {
          return (
            <Paper className={classes.paper} key={index}>
              <Grid container wrap="nowrap" spacing={2}>

                <Grid item>
                  <Avatar>
                    <FiBriefcase size={22} />
                  </Avatar>
                </Grid>

                <Grid item xs>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>Centro: {item.centerId}</Typography>
                  <Typography>Telefone: {item.phone}</Typography>
                  <Typography>Endereço: {item.address}</Typography>
                  <Typography>CNPJ: {item.cnpj}</Typography>
                  <Typography>Departamento: {item.centerType}</Typography>
                  <Typography>IP: {item.ip}</Typography>
                  <Typography>Administrativo: {item.centerAdmin}</Typography>
                </Grid>

              </Grid>
            </Paper>
          )
        })}
      </ul>
    </div>
  )
}
