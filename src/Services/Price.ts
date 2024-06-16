import axios from 'axios'
export async function getPrice (placeStart: number, placeEnd: number) {
  return await axios.get(`https://localhost:7050/ObtenerPrecio?salida=${placeStart}&destino=${placeEnd}`)
}
