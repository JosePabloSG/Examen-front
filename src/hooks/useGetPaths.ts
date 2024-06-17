import { getPaths } from '@/Services/path'
import { useQuery } from 'react-query'

export default function useGetPaths () {
  const { data, error, isLoading, isError } = useQuery('paths', getPaths)
  return { data, error, isLoading, isError }
}
