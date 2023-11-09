import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { createContactThunk } from '../../reduxe/contact/thunks';
import { nanoid } from '@reduxjs/toolkit';
import { Box, Button, TextField } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const addContact = e => {
    e.stopPropagation();
    e.preventDefault();
    const isTrue = contacts.some(contact => name === contact.name);
    if (isTrue) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(createContactThunk({ name, number, id: nanoid() }));
    setName('');
    setNumber('');
  };

  const getContactData = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };

  return (
<Box component="form" onSubmit={addContact} noValidate sx={{ mt: 1 }}>
<TextField
  margin="normal"
  required
  fullWidth
  id="filled-basic"
  label="Name"
  variant="filled"
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  autoComplete="off"
  value={name}
  InputProps={{
    sx: { borderRadius: '15px' },
    style: { color: '#fff' },
  }}
  onChange={getContactData}
/>

  <TextField
    margin="normal"
    required
    fullWidth
    id="filled-basic"
    label="Number"
    variant="filled"
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    autoComplete="off"
    onChange={getContactData}
    value={number}
    InputProps={{
      sx: { borderRadius: '15px' },
      style: { color: '#fff' },
         }}
  />

  <Button type="submit" fullWidth variant="contained" sx={{ borderRadius: '15px', mt: 3, mb: 2 }}>
    ADD CONTACT
  </Button>
</Box>

  );
};
export default ContactForm;