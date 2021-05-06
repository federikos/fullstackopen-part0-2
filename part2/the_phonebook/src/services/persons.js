import axios from 'axios'
const baseUrl = '/api/persons';

const getAll = () => {
  return axios.get(baseUrl)
    .then(res => res.data)
}

const create = newObj => {
  return axios.post(baseUrl, newObj)
    .then(res => res.data)
}

const del = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

const updateNumber = (id, updParams) => {
  return axios.put(`${baseUrl}/${id}`, updParams)
    .then(res => res.data)
}

export default { getAll, create, del, updateNumber }