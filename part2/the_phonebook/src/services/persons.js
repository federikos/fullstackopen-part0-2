import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons';

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

const updateNumber = (id, updObj) => {
  return axios.put(`${baseUrl}/${id}`, updObj)
    .then(res => res.data)
}

export default { getAll, create, del, updateNumber }