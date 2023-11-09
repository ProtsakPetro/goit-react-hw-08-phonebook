import axios from 'axios';

// axios.defaults.baseURL = 'https://654374c501b5e279de2066c5.mockapi.io/phonebook';

export const getAllContacts = async () => {
  return (await axios.get('/contacts')).data;
};

export const createContact = async data => {
  return (await axios.post('/contacts', data)).data;
};

export const deleteContact = async id => {
  return (await axios.delete(`/contacts/${id}`)).data;
};

export const updateContact = async ({ id, name, number }) => {
  return (await axios.patch(`/contacts/${id}`, { name, number })).data;
};