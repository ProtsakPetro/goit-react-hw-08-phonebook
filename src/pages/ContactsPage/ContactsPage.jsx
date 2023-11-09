import { Container } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContactsThunk } from '../../reduxe/contact/thunks';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        backgroundColor: '#9a9898',
        borderRadius: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.7)',
        marginTop: '150px',
        padding: '30px',
        width: '1000px',
             }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;