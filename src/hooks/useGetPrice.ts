import { getPrice } from '@/Services/Price'
import { useQuery } from 'react-query'

export default function useGetPrice () {
  const { data, error, isLoading, isError } = useQuery('clinics', getPrice)
  return { data, error, isLoading, isError }
}
