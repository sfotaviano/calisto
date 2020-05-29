/* eslint-disable react/display-name */
import React, { useState, forwardRef } from 'react'
import MaterialTable from 'material-table'

import {
  FiPlusSquare,
  FiArrowDown,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiSlash,
  FiTrash2,
  FiEdit3,
  FiFilter,
  FiSkipBack,
  FiSkipForward,
  FiDownload,
  FiSearch,
  FiMinusCircle,
  FiBarChart,
  FiX
} from 'react-icons/fi'

const tableIcons = {
  Add: forwardRef((props, ref) => <FiPlusSquare {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <FiCheck {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <FiSlash {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <FiTrash2 {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <FiChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <FiEdit3 {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <FiDownload {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FiFilter {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FiSkipBack {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <FiSkipForward {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <FiChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <FiChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <FiX {...props} ref={ref} size={18}/>),
  Search: forwardRef((props, ref) => <FiSearch {...props} ref={ref} size={22}/>),
  SortArrow: forwardRef((props, ref) => <FiArrowDown {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <FiMinusCircle {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <FiBarChart {...props} ref={ref} />)
}

export default function Equipamentos () {
  const [state, setState] = useState({
    columns: [
      { title: 'Host', field: 'host' },
      { title: 'Centro', field: 'center' },
      { title: 'Endereço IP', field: 'IpAdress', type: 'numeric' },
      { title: 'Tipo', field: 'type', lookup: { 1: 'Desktop', 2: 'Notebook', 3: 'All In One' } }
    ],
    data: [
      {
        host: 'D987654',
        center: 'Brasil',
        IpAdress: 192168165,
        type: 1
      },
      {
        host: 'A123456',
        center: 'Brasil',
        IpAdress: 19216815,
        type: 3
      }
    ]
  })

  return (
    <div style={{ width: '100%' }}>
      <MaterialTable
        icons={tableIcons}
        title="Equipamentos"
        columns={state.columns}
        data={state.data}
        options={{
          actionsColumnIndex: -1
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve()
                setState((prevState) => {
                  const data = [...prevState.data]
                  data.push(newData)
                  return { ...prevState, data }
                })
              }, 600)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve()
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data]
                    data[data.indexOf(oldData)] = newData
                    return { ...prevState, data }
                  })
                }
              }, 600)
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve()
                setState((prevState) => {
                  const data = [...prevState.data]
                  data.splice(data.indexOf(oldData), 1)
                  return { ...prevState, data }
                })
              }, 600)
            })
        }}
      />
    </div>
  )
}
