import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAppState } from '../../reduxe/app/selectors';

export const Loader = () => {
  const { isLoading } = useSelector(selectAppState);
  return (
    <Backdrop
      sx={{ color: '#afaaaa', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};