/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line prettier/prettier
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
  CFormInput,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

const Productos = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Estados para búsqueda, orden y paginación
  const [search, setSearch] = useState('')
  const [sortColumn, setSortColumn] = useState('id')
  const [sortOrder, setSortOrder] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  useEffect(() => {
    fetch('http://localhost:3001/productos')
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

  // 1. Filtrar por búsqueda
  const filtered = productos.filter((p) => p.nombre.toLowerCase().includes(search.toLowerCase()))

  // 2. Ordenar
  const sorted = [...filtered].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortOrder === 'asc' ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortOrder === 'asc' ? 1 : -1
    return 0
  })

  // 3. Paginación
  const totalPages = Math.ceil(sorted.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginated = sorted.slice(startIndex, startIndex + itemsPerPage)

  // Cambiar columna de ordenamiento
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortOrder('asc')
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>📦 Lista de Productos</strong>
          </CCardHeader>
          <CCardBody>
            {/* Buscador */}
            <CFormInput
              type="text"
              placeholder="🔎 Buscar producto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-3"
            />

            {loading && (
              <div className="text-center">
                <CSpinner color="primary" />
              </div>
            )}
            {error && <p className="text-danger">{error}</p>}
            {!loading && !error && (
              <>
                <CTable striped hover responsive bordered>
                  <CTableHead color="dark">
                    <CTableRow>
                      <CTableHeaderCell
                        onClick={() => handleSort('id')}
                        style={{ cursor: 'pointer' }}
                      >
                        ID {sortColumn === 'id' ? (sortOrder === 'asc' ? '⬆️' : '⬇️') : ''}
                      </CTableHeaderCell>
                       <CTableHeaderCell
                        onClick={() => handleSort('nombre')}
                        style={{ cursor: 'pointer' }}
                      >
                        Categorías {sortColumn === 'categoria' ? (sortOrder === 'asc' ? '⬆️' : '⬇️') : ''}
                      </CTableHeaderCell>
                      <CTableHeaderCell
                        onClick={() => handleSort('nombre')}
                        style={{ cursor: 'pointer' }}
                      >
                        Nombre {sortColumn === 'nombre' ? (sortOrder === 'asc' ? '⬆️' : '⬇️') : ''}
                      </CTableHeaderCell>
                      <CTableHeaderCell
                        onClick={() => handleSort('valor')}
                        style={{ cursor: 'pointer' }}
                      >
                        Valor {sortColumn === 'valor' ? (sortOrder === 'asc' ? '⬆️' : '⬇️') : ''}
                      </CTableHeaderCell>
                      
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {paginated.map((p) => (
                      <CTableRow key={p.id}>
                        <CTableDataCell>{p.id}</CTableDataCell>
                        <CTableDataCell>{p.categoria}</CTableDataCell>
                        <CTableDataCell>{p.nombre}</CTableDataCell>
                        <CTableDataCell>${p.valor}</CTableDataCell>
                        
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>

                {/* Paginación */}
                <div className="d-flex justify-content-center mt-3">
                  <CPagination>
                    <CPaginationItem
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    >
                      Anterior
                    </CPaginationItem>
                    {[...Array(totalPages)].map((_, index) => (
                      <CPaginationItem
                        key={index + 1}
                        active={currentPage === index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </CPaginationItem>
                    ))}
                    <CPaginationItem
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    >
                      Siguiente
                    </CPaginationItem>
                  </CPagination>
                </div>
              </>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Productos
