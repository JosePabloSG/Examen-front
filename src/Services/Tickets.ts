import TicketProps from '@/types/ticket'
import axios from 'axios'
export async function getTickets () {
  return await axios.get('https://666dee3a7a3738f7cacdaa0f.mockapi.io/ListaTiquete')
}

export async function postTicket (ticket:TicketProps) {
  return await axios.post('https://666dee3a7a3738f7cacdaa0f.mockapi.io/ListaTiquete', ticket)
}
