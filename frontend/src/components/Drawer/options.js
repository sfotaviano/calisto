import React from 'react'

import ListCenter from '../ListCenter/index'

export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>home</h2>
  },
  {
    path: '/centers',
    main: ListCenter
  },
  {
    path: '/shoelaces',
    main: () => <h2>Shoelaces</h2>
  }
]
