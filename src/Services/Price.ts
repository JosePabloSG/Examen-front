import axios from 'axios'
export async function getPrice () {
  return await axios.get('https://666e19bf7a3738f7cace015a.mockapi.io/precio')
}
