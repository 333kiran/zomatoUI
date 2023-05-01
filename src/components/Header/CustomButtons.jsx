import React, { useState,useContext } from 'react';
import { Box,Button,styled } from '@mui/material';


import { DataContext } from '../../Context/DataProvider';

//components
import LoginDialog from '../Login/LoginDialog';
import NewAccount from './NewAccount';




const LoginButton = styled(Button)`
 color:#fff;
 border-color:white;
`;

const CustomButtons = () => {

const [open,setOpen] = useState(false);

const { account, setAccount } = useContext(DataContext);


const openDialog = () => {
    setOpen(true);
 }

  return (
    <Box>
        
        {
      account ? <NewAccount account={account}  setAccount={setAccount}/> :
    
        <LoginButton variant='outlined'  onClick={() => openDialog()}>Log In </LoginButton>
        }
          <LoginDialog  open={open} setOpen={setOpen} /> 
    </Box>
  )
}

export default CustomButtons;