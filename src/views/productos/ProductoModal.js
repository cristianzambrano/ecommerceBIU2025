/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CForm,
  CFormInput,
  CFormFeedback,
} from '@coreui/react'

const ProductoModal = ({ visible, onClose, onSave, form, setForm, editingProduct }) => {
  const [errors, setErrors] = useState({})

  // Validación simple
  const validate = () => {
    let newErrors = {}

    if (!form.nombre || form.nombre.trim() === '') {
      newErrors.nombre = 'El nombre es obligatorio'
    }
    if (!form.categoria || form.categoria.trim() === '') {
      newErrors.categoria = 'La categoría es obligatoria'
    }
    if (form.valor === '' || isNaN(form.valor)) {
      newErrors.valor = 'El valor debe ser un número'
    } else if (form.valor <= 0) {
      newErrors.valor = 'El valor debe ser mayor que 0'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 // true si no hay errores
  }

  const handleSave = () => {
    if (validate()) {
      onSave()
    }
  }

  return (
    <CModal visible={visible} onClose={onClose}>
      <CModalHeader closeButton>
        <strong>{editingProduct ? '✏️ Editar Producto' : '➕ Nuevo Producto'}</strong>
      </CModalHeader>
      <CModalBody>
        <CForm>
          {/* Nombre */}
          <CFormInput
            className="mb-1"
            label="Nombre"
            value={form.nombre}
            invalid={!!errors.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />
          {errors.nombre && <CFormFeedback invalid>{errors.nombre}</CFormFeedback>}

          {/* Categoría */}
          <CFormInput
            className="mb-1"
            label="Categoría"
            value={form.categoria}
            invalid={!!errors.categoria}
            onChange={(e) => setForm({ ...form, categoria: e.target.value })}
          />
          {errors.categoria && <CFormFeedback invalid>{errors.categoria}</CFormFeedback>}

          {/* Valor */}
          <CFormInput
            className="mb-1"
            type="number"
            label="Valor"
            value={form.valor}
            invalid={!!errors.valor}
            onChange={(e) => setForm({ ...form, valor: Number(e.target.value) })}
          />
          {errors.valor && <CFormFeedback invalid>{errors.valor}</CFormFeedback>}
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Cancelar
        </CButton>
        <CButton color="primary" onClick={handleSave}>
          Guardar
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default ProductoModal
