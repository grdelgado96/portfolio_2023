import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const footerStyles = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  marginTop: 'auto',
  textAlign: 'center',
};

function Footer() {
  return (
    <footer style={footerStyles}>
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Feel free to reach out!
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Email: <Link href="mailto:rodriguezdelgadogiselle@gmail.com" color="inherit">rodriguezdelgadogiselle@gmail.com</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Connect with me on <Link href="https://www.linkedin.com/in/giselle-rodriguez-delgado/" color="inherit">LinkedIn</Link> | <Link href="https://github.com/grdelgado96" color="inherit">GitHub</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Copyright © {new Date().getFullYear()} Giselle Rodriguez. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;

