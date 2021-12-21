import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async url => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '9aefb08b60mshc2808b583e14c1cp1faa3ejsn80fc6e8f19e9'
    }
  })

  return data
}
