import { ReactNode, useState } from 'react'
import DashboardContext from './DashboardContext'

const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [dataDashboard, setdataDashboard] = useState({
    dineroRecolectado: '',
    cantidadPasajeros: ''
  })

  return (
    <DashboardContext.Provider value={{
      dataDashboard,
      setdataDashboard
    }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider
