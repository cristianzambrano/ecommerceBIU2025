import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Productos = React.lazy(() => import('./views/productos/Productos'))
const ProductosAPI = React.lazy(() => import('./views/productos/Productos2'))
const ProductosAPIFiltros = React.lazy(() => import('./views/productos/Productos3'))

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/productos', name: 'Productos', element: Productos },
  { path: '/productos-api', name: 'Productos API', element: ProductosAPI },
  { path: '/productos-api-filtros', name: 'Productos API Filtros', element: ProductosAPIFiltros },
]

export default routes
