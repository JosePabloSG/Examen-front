import { postTicket } from '@/Services/Tickets'
import TicketProps from '@/types/ticket'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'

interface CustomError {
  response: {
    data: {
      message: string
    }
  }
}

export default function usePostTicket () {
  const { register, handleSubmit } = useForm()
  const mutation = useMutation(postTicket)

  const OnSubmit = handleSubmit(async (data) => {
    const ticketData: TicketProps = {
      Lugar_salida: data.placeStart,
      Lugar_llegada: data.placeEnd,
      Fecha: data.date
    }
    try {
      await mutation.mutateAsync(ticketData)
      toast.success('Tiquete creado exitosamente')
    } catch (error) {
      toast.error((error as CustomError).response.data.message)
    }
  })

  return { register, OnSubmit }
}
