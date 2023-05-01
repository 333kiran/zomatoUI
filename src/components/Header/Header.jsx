import React from 'react';

import { AppBar,Box,styled, Toolbar } from '@mui/material';
import CustomButtons from './CustomButtons';


const StyledHeader = styled(AppBar)`
 background-color:#d1001f;
 height:70px;
 box-shadow:none;
`;

const Navbar = styled(Toolbar)`
  display:flex;
  margin-right:2rem;
  margin-left:4rem;
`;

const Image = styled("img")({
 height:"6.5rem"
}); 

const Header = () => {
    const logo = "https://clipground.com/images/zomato-logo-png-3.png";
  return (
    <StyledHeader>
        <Navbar >
           <Image src={logo} alt="logo"/>
           <Box style={{disaplay:"flex",marginRight:"2rem",marginLeft:"auto"}}>
            <CustomButtons/>
           </Box>
        </Navbar>
    </StyledHeader>
  )
}

export default Header;