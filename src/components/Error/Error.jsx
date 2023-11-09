import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAppState } from '../../reduxe/app/selectors';

const Error = () => {
  const { error } = useSelector(selectAppState);
  return (
    error && (
      <Alert severity="error">
        Oooops! Something went wrong... Please, try again later
      </Alert>
    )
  );
};

export default Error;