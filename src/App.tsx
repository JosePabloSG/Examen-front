import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import useGetPaths from './hooks/useGetPaths'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'

type PathType = {
    id: number;
    name: string;
    path: string;
  };

export default function App () {
  const { data: paths } = useGetPaths()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [router, setRouter] = useState(null as any | null)

  useEffect(() => {
    if (paths?.data) {
      setRouter(createBrowserRouter(paths.data.map((path:PathType) => ({
        path: path.path,
        element: path.name === 'HomePage' ? <HomePage /> : <DashboardPage />
      }))))
    }
  }, [paths])

  if (!router) return null

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
