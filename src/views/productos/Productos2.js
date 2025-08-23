/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CSpinner,
} from '@coreui/react'

const Productos = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3002/productos')
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`)
        return res.json()
      })
      .then((data) => {
        setProductos(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>📦 Lista de Productos</strong>
          </CCardHeader>
          <CCardBody>
            {loading && (
              <div className="text-center">
                <CSpinner color="primary" />
              </div>
            )}
            {error && <p className="text-danger">Error al Consumir la API: {error}</p>}
            {!loading && !error && (
              <CTable striped hover responsive bordered>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell>ID</CTableHeaderCell>
                    <CTableHeaderCell>Categoría</CTableHeaderCell>
                    <CTableHeaderCell>Nombre</CTableHeaderCell>
                    <CTableHeaderCell>Precio</CTableHeaderCell>
                   
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {productos.map((p) => (
                    <CTableRow key={p.id}>
                      <CTableDataCell>{p.id}</CTableDataCell>
                      <CTableDataCell>{p.categoria}</CTableDataCell>
                      <CTableDataCell>{p.nombre}</CTableDataCell>
                      <CTableDataCell>{p.valor}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Productos
