import React from 'react'

type AppointmentsContextType = {
    dataDashboard: {
      dineroRecolectado: string
      cantidadPasajeros: string
    }
    setdataDashboard: (dataDashboard: {
      dineroRecolectado: string
      cantidadPasajeros: string
    }) => void;
  };

const DashboardContext = React.createContext<AppointmentsContextType>({
  dataDashboard: {
    dineroRecolectado: '',
    cantidadPasajeros: ''
  },
  setdataDashboard: () => {}
})

export default DashboardContext
