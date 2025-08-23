import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

const Dashboard = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Dashboard</CCardHeader>
        <CCardBody>
          <h4>Bienvenido al panel de administración</h4>
          <p className="text-medium-emphasis">
            Aquí puedes gestionar los productos, ver estadísticas y realizar otras tareas administrativas.
          </p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
