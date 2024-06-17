import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import DashboardProvider from './context/DasboardProvider'
import App from './App'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DashboardProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position='top-center'
          reverseOrder={false}
        />
        <App />
      </QueryClientProvider>
    </DashboardProvider>
  </React.StrictMode>
)
