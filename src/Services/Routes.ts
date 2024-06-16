import axios from 'axios'
export async function getAllRoutes () {
  return await axios.get('https://666dee3a7a3738f7cacdaa0f.mockapi.io/Rutas')
}
