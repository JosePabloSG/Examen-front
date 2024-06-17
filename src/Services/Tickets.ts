import TicketProps from '@/types/ticket'
import axios from 'axios'

export async function postTicket (ticket:TicketProps) {
  return await axios.post('https://localhost:7050/api/Viaje', ticket)
}

export async function getInfoByrange (placeStart: number, placeEnd: number, dateStart: string, dateEnd: string) {
  return await axios.get(`https://localhost:7050/api/Dashboard/filtrar-datos?lugarSalida=${placeStart}&lugarLlegada=${placeEnd}&fechaInicio=${dateStart}&fechaFin=${dateEnd}`)
}
