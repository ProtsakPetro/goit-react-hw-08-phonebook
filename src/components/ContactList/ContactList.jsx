import { List, Typography } from '@mui/material';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { filteredContacts } from '../../reduxe/contact/selectors';

const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  return contacts.length > 0 ? (
    <List>
      <ContactListItem contacts={contacts} />
    </List>
  ) : (
    <Typography component="p" align="center" paddin='25px' color='#706f6f'>
    Have no contacts yet
  </Typography>
  
  );
};

export default ContactList;