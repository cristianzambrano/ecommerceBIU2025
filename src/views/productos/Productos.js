/* eslint-disable prettier/prettier */
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

const Productos = () => {
  const productos = [
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 5 },
    { id: 2, nombre: 'Mouse', precio: 25, stock: 30 },
    { id: 3, nombre: 'Teclado', precio: 45, stock: 20 },
  ]

  return (
    <CCard>
      <CCardHeader>📦 Gestión de Productos</CCardHeader>
      <CCardBody>
        <CTable hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell>ID</CTableHeaderCell>
              <CTableHeaderCell>Nombre</CTableHeaderCell>
              <CTableHeaderCell>Precio ($)</CTableHeaderCell>
              <CTableHeaderCell>Stock</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {productos.map((p) => (
              <CTableRow key={p.id}>
                <CTableDataCell>{p.id}</CTableDataCell>
                <CTableDataCell>{p.nombre}</CTableDataCell>
                <CTableDataCell>{p.precio}</CTableDataCell>
                <CTableDataCell>{p.stock}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Productos
