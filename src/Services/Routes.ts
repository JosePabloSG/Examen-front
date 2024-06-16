import axios from 'axios'

export async function getAllRoutes () {
  return await axios.get('https://localhost:7050/api/Rutas')
}
