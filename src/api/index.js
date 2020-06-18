import axios from 'axios'

const api = axios.create({
    baseURL: 'https://dukaan-backend.herokuapp.com/api',
})

export const insertContact = payload => api.post(`/contact`, payload)
export const getAllContacts = () => api.get(`/contacts`)
export const updateContactById = (id, payload) => api.put(`/contact/${id}`, payload)
export const deleteContactById = id => api.delete(`/contact/${id}`)
export const getContactById = id => api.get(`/contact/${id}`)

const apis = {
    insertContact,
    getAllContacts,
    updateContactById,
    deleteContactById,
    getContactById,
}

export default apis