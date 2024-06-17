import { getInfoByrange } from '@/Services/Tickets'
import DashboardContext from '@/context/DashboardContext'
import { ChangeEvent, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'

export default function useGetInforByRange () {
  const { register } = useForm()
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [placeStart, setPlaceStart] = useState<number | null>(null)
  const [placeEnd, setPlaceEnd] = useState<number | null>(null)
  const { setdataDashboard } = useContext(DashboardContext)

  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value)
  }
  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value)
  }
  const handlePlaceStartChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPlaceStart(Number(event.target.value))
  }
  const handlePlaceEndChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPlaceEnd(Number(event.target.value))
  }

  const { data } = useQuery(['dataDashboard', startDate, endDate, placeStart, placeEnd], async () => {
    if (placeStart !== null && placeEnd !== null && startDate !== '' && endDate !== '') {
      const response = await getInfoByrange(placeStart!, placeEnd!, startDate, endDate)
      if (response.data) {
        setdataDashboard(response.data)
      }
      return response.data
    }
    return null
  }, {
    enabled: placeStart !== null && placeEnd !== null && startDate !== '' && endDate !== '',
    retry: false
  })

  return {
    register,
    handleStartDateChange,
    handleEndDateChange,
    handlePlaceStartChange,
    handlePlaceEndChange,
    data
  }
}
