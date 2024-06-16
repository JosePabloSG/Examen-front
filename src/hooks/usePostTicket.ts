import { postTicket } from '@/Services/Tickets'
import TicketProps from '@/types/ticket'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'

export default function usePostTicket () {
  const { register, handleSubmit } = useForm()
  const mutation = useMutation(postTicket)

  const OnSubmit = handleSubmit((data) => {
    const ticketData: TicketProps = {
      Lugar_salida: data.placeStart,
      Lugar_llegada: data.placeEnd,
      Fecha: data.date,
      Hora: data.time
    }
    mutation.mutate(ticketData)
    toast.success('Tiquete creado exitosamente')
  })

  return { register, OnSubmit }
}
