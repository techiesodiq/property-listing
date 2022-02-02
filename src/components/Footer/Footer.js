import React from 'react';
import { Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Typography variant="body2" color="#607d8b" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/sodiq-akanmu-13641987/">
        Sodiq Akanmu
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default Footer;