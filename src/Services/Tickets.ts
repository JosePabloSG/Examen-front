import TicketProps from '@/types/ticket'
import axios from 'axios'

export async function postTicket (ticket:TicketProps) {
  return await axios.post('https://localhost:7050/api/Viaje', ticket)
}
