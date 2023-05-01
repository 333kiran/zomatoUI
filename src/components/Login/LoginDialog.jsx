import React,{useState, useContext} from 'react';
import { Dialog,Box,Typography,TextField,Button,styled } from '@mui/material';

import { authenticateSignup , authenticateLogin } from '../../services/api';
import { DataContext} from '../../Context/DataProvider';

const Component = styled(Box)`
  height:95vh;
  width:'80vh';
`
const LoginButton = styled(Button)`
color:#fff;
background:maroon;
box-shadow: 0 2px 4px 0 rgb( 0 0 0/20%);
 
`
const OTPButton = styled(Button)`
text-transform: none;
background:#fff;
color:maroon;
height:48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgb( 0 0 0/20%);
`
const Text = styled(Typography)`
  font-size: 12px;
  color:#878787;
`
const CreateAccount = styled(Typography)`
  font-size:14px;  
  text-align:center;
  color:maroon;
  font-weight:600;
  cursor:pointer;
`
const Wrapper = styled(Box)`
   display: flex;
   flex-direction: column;
   padding:25px 35px;
   flex: 1;
 & > div, & > button, & > p {
    margin-top: 11px;
 }
`
const Error = styled(Typography)`
  color:red;
  font-size: 14px;
  line-height:0px;
  margin-top:30px;
  font-weight:500;
`
const accountInitialvalue = {
  login: {
      view: 'login',
  },

  signup:{
       view: 'signup',
  }

}

const loginInitialvalues = {
  username:"",
  passward:""
}


const signupInitialvalues = {
  firstname : "",
  lastname:"",
  username:"",
  email:"",
  passward:"",
  phone:""
}

const LoginDialog = ({open,setOpen}) => {

  const [account, toggleAccount] = useState(accountInitialvalue.login);
  const [signup, setSignup] = useState(signupInitialvalues);
  const [login, setLogin] = useState(loginInitialvalues);
  const [error, setError] = useState(false);
  


  const {  setAccount } = useContext(DataContext);

   const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialvalue.login);
        setError(false);

    }

    const toggleSignup = () => {

        toggleAccount(accountInitialvalue.signup);
    }
    
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name] : e.target.value });
    }

    const signupUser = async () => {
      let response =  await authenticateSignup(signup);
      if (!response) return;
      handleClose();
      setAccount(signup.firstname);
   }

   const onValueChange = (e) => {
      setLogin({ ...login, [e.target.name] : e.target.value});
   }

   const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if(response.status === 200) {
       handleClose();
       setAccount(response.data.data.firstname);
    }
    else {
       setError(true);
    }
   }


  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxHeight: 'unset' } }} >
     <Component >
     {
                    account.view === 'login' ?
     <Wrapper >
      <h2 style={{color:"maroon",textDecorationLine:"underline"}}>LogIn</h2>
     <TextField variant='standard'  onChange={(e) => onValueChange(e)}  name="username"  label="Enter Username" />
     { error &&   <Error >Please enter valid username and passward</Error >}

     <TextField variant='standard' onChange={(e) => onValueChange(e)}  name="passward" label="Enter Passward" />
     <Text>By Continuing, You agree to Zomato terms and privacy policies</Text>
     <LoginButton onClick={() => loginUser()}>Login</LoginButton>
     <Typography style={{ textAlign: 'center' }}>OR</Typography>
     <OTPButton>Request OTP</OTPButton>
     < CreateAccount onClick={() => toggleSignup()}>New to Zomato? Create an account</ CreateAccount>
     </Wrapper>
   :
     <Wrapper  style={{width:'60vh'}}>
      <h2 style={{color:"maroon",textDecorationLine:"underline"}}>SignUp</h2>

                        <TextField variant='standard'  name="firstname" label="Enter firstname"  onChange={(e) => onInputChange(e)}/>
                        <TextField variant='standard' name="lastname" label="Enter lastname" onChange={(e) => onInputChange(e)}/>
                        <TextField variant='standard' name="username" label="Enter username" onChange={(e) => onInputChange(e)}/>
                        <TextField variant='standard' name="email" label="Enter email" onChange={(e) => onInputChange(e)}/>
                        <TextField variant='standard'  name="passward"label="Enter passward" onChange={(e) => onInputChange(e)}/>
                        <TextField variant='standard' name="phone" label="Enter phone" onChange={(e) => onInputChange(e)}/>
                        <LoginButton  onClick={() => signupUser()}>Continue</LoginButton>
                    </Wrapper >
    }
     </Component>
     
    </Dialog>
    
  )
}

export default LoginDialog;