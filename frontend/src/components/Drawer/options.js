import React from 'react'

export const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>home</h2>
  },
  {
    path: '/bubblegum',
    main: () => <h2>bubblegum</h2>
  },
  {
    path: '/shoelaces',
    main: () => <h2>Shoelaces</h2>
  }
]
