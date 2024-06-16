import { getAllRoutes } from '@/Services/Routes'
import { useQuery } from 'react-query'

export default function useGetAllRoutes () {
  const { data, error, isLoading, isError } = useQuery('clinics', getAllRoutes)
  return { data, error, isLoading, isError }
}
