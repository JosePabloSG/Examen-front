import { getPrice } from '@/Services/Price'
import { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useQuery } from 'react-query'

interface CustomError {
  response: {
    data: {
      message: string
    }
  }
}

export default function useGetPrice () {
  const [placeStart, setPlaceStart] = useState<number | null>(null)
  const [placeEnd, setPlaceEnd] = useState<number | null>(null)
  const [price, setPrice] = useState<number>(0)

  const { data, error, isLoading, isError } = useQuery(['price', placeStart, placeEnd], async () => {
    if (placeStart !== null && placeEnd !== null) {
      console.log(placeStart, placeEnd)
      try {
        const response = await getPrice(placeStart, placeEnd)
        setPrice(response.data.precio)

        toast.success('Precio obtenido')
        return response
      } catch (error) {
        toast.error((error as CustomError).response.data.message)
        throw error
      }
    }
    return Promise.resolve(null)
  }, {
    enabled: placeStart !== null && placeEnd !== null,
    retry: false
  })

  const handlePlaceStartChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPlaceStart(Number(event.target.value))
  }
  const handlePlaceEndChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPlaceEnd(Number(event.target.value))
  }

  return { price, data, error, isLoading, isError, handlePlaceStartChange, handlePlaceEndChange }
}
