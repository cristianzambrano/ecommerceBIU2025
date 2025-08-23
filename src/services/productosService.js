/* eslint-disable prettier/prettier */
import api from './api'

export const getProductos = async () => {
  const res = await api.get('/productos')
  return res.data
}

export const getProductoById = async (id) => {
  const res = await api.get(`/productos/${id}`)
  return res.data
}

export const createProducto = async (producto) => {
  const res = await api.post('/productos', producto)
  return res.data
}

export const updateProducto = async (id, producto) => {
  const res = await api.put(`/productos/${id}`, producto)
  return res.data
}

export const deleteProducto = async (id) => {
  await api.delete(`/productos/${id}`)
  return true
}
