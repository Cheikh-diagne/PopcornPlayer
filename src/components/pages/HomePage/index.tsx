import { Box, Typography } from '@mui/material';
import Banner from '../../banner';

const HomePage = () => {
  const apiUrl = process.env.REACT_APP_TMDB_API;
  const apiKey = process.env.REACT_APP_TMDB_API_APIKEY;
  
  return (
    <> 
      <Banner />   
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
     
      <Typography>
        Home Page {apiUrl} {apiKey}
      </Typography>
    </Box>
    </>

  );
};

export default HomePage;
