const { Typography, Box } = require('@mui/material');

const HomePage = () => {
  return (
    <Box
      sx={{
        width: 700,
        margin: '0 auto',
        marginTop: '250px',
        backgroundColor: '#a6a6aa',
        borderRadius: '20px',
        padding: '15px',
      }}
    >
      <Typography variant="h5" color="#858383" textAlign="center">
      Hello and welcome! We're delighted to have you on our page. Whether you're here to create a new account or log in with an existing one, you can easily save and manage your contacts.
      </Typography>
    </Box>
  );
};

export default HomePage;