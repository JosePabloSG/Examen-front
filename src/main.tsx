import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster
        position='top-center'
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
