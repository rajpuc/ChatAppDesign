import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Container } from '@mui/material';

const Authentication = () => {
  const value = useContext(AppContext);

  return (
    <Container component={"main"}  sx={{
        bgcolor:"Red",
    }}>
        Hello
    </Container>
  )
}

export default Authentication;
