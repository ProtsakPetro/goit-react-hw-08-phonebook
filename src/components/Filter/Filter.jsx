import { setFilter } from '../../reduxe/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { selectContacts } from '../../reduxe/contact/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const getFilterData = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    contacts.length > 0 && (
     <Box noValidate sx={{ mt: 1 }}>
  <TextField
    fullWidth
    type="text"
    name="filter"
    onChange={getFilterData}
    label="Find contacts by Name"
    variant="standard"
    sx={{ borderRadius: '30px' }}
  />
</Box>

    )
  );
};

export default Filter;