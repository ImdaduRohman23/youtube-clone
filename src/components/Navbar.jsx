import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '../asets/logo.png';

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2}
      sx={{
        position: 'sticky', 
        background:'rgba(250, 250, 250, 0.1)', 
        justifyContent: 'space-between', 
        borderBottom: '1px solid rgb(140, 140, 140)'}}
    >
      <Link to='/' style={{display: 'flex', flexDirection: 'column' ,alignItem: 'center'}}>
        <img src={logo} alt="logo" width={'40px'} style={{borderRadius: '10%'}}/>
        <p style={{marginBottom: '0', marginTop: '2px', color: 'white', fontWeight: 'bold', fontFamily: 'calibri'}}>TontoninAja</p>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
