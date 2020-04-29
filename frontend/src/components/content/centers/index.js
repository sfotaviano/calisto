import React from 'react'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import { FiBriefcase } from 'react-icons/fi'
import Classes from './styles'

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

export default function AutoGridNoWrap () {
  const classes = Classes()

  return (
    <div className={classes.root}>
      {arr.map((item, index) => (
        <Paper className={classes.paper} key={index}>
          <Grid container wrap="nowrap" spacing={2}>

            <Grid item>
              <Avatar>
                <FiBriefcase size={22} />
              </Avatar>
            </Grid>

            <Grid item xs>
              <Typography>{item.title}</Typography>
              <Typography>{item.center}</Typography>
              <Typography>{item.dep}</Typography>
              <Typography>{item.cnpj}</Typography>
              <Typography>{item.adm}</Typography>
            </Grid>

          </Grid>
        </Paper>
      ))}
    </div>
  )
}
