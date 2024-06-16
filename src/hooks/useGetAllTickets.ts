import { getTickets } from '@/Services/Tickets'
import { useQuery } from 'react-query'

export default function useGetAllTickets () {
  const { data, error, isLoading, isError } = useQuery('clinics', getTickets)
  return { data, error, isLoading, isError }
}
