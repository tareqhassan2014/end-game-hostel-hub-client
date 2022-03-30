import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function Secure() {
  return (
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '90vh',
        width: '95vw',
        justifyContent: 'center',
      }}
    >
          <Typography variant="h2" align="center">
              Very Secure Page
          </Typography>
      </Box>
  );
}

export default Secure;
