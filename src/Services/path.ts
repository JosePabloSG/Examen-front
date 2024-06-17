import axios from 'axios'

export async function getPaths () {
  return await axios.get('https://localhost:7050/api/Dashboard/page-routes')
}
